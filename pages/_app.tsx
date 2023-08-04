/* eslint-disable @typescript-eslint/no-var-requires */
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import React from "react";
import type { NextPage } from "next";
import { MainLoader } from "@/src/ui/components/main_loader/main_loader";
import { AppRouterController } from "@/src/ui/controllers/app_router_controller";
import { GlobalStyles } from "@/src/ui/styles/globals";
import { Modal } from "@/src/ui/components/modal/modal";
import Head from "next/head";
import "@/src/common/utils/yup_extensions";
import { uiProvider, useUiProvider } from "@/src/ui/providers/ui.provider";
import { useIsMobileProvider } from "@/src/ui/providers/is_mobile.provider";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import getCMSSettingsController from "@/src/ui/controllers/get_cms_settings_controller";
import getCMSClinicsController from "@/src/ui/controllers/get_cms_clinics_controller";

// Conditionally inject axe into the page.
// This only happens outside of production and in a browser (not SSR).
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  const ReactDOM = require("react-dom");
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

new AppRouterController(uiProvider.getState());

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const setIsMobile = useIsMobileProvider((state) => state.setIsMobile);
  const checkIfH1OnPage = useUiProvider((state) => state.checkIfH1OnPage);

  useEffect(() => {
    window.addEventListener("resize", () => setIsMobile(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setIsMobile(window.innerWidth));
    };
  }, [setIsMobile]);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
    checkIfH1OnPage();
  }, [pageProps]);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
    getCMSSettingsController().catch(console.error);
    getCMSClinicsController().catch(console.error);
  }, []);

  return (
    <>
      <Head>
        <title>Next boilerplate app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {process.env.NODE_ENV === "production" && (
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self' googleapis.com maps.googleapis.com youtube.com google.com coe-web-front.vercel.app coe-web-cms.fly.dev; style-src coe-web-front.vercel.app fonts.googleapis.com 'unsafe-inline'; object-src 'none'; img-src maps.gstatic.com coe-web-front.vercel.app res.cloudinary.com; script-src 'self' youtube.com https://maps.googleapis.com maps.googleapis.com google.com https://www.youtube.com 'unsafe-inline' 'unsafe-eval' coe-web-front.vercel.app; child-src *; frame-src * youtube.com https://www.google.com google.com https://www.youtube.com;"
          />
        )}
        <meta httpEquiv="referrer" content="no-referrer, strict-origin-when-cross-origin" />
      </Head>
      <GlobalStyles />
      <Modal />
      <MainLoader />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default appWithTranslation(MyApp);
