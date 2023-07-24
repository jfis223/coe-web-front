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
import {uiProvider} from "@/src/ui/providers/ui.provider";
import {useStoreProvider} from "@/src/ui/providers/store.provider";
import {useIntlProvider} from "@/src/ui/providers/intl.provider";
import {useIsMobileProvider} from "@/src/ui/providers/is_mobile.provider";
import {appWithI18Next, useSyncLanguage} from "ni18n";
import {ni18nConfig} from "../ni18n.config";
import {LANGUAGES, DEFAULT_STORE} from "@/src/common/constants";
import {useEffect} from "react";
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const {store} = router.query;
  const getLayout = Component.getLayout ?? ((page) => page);
  const locale = useIntlProvider((state) => state.locale);
  const setLocale = useIntlProvider((state) => state.setLocale);
  const setStore = useStoreProvider((state) => state.setStore);
  const isValidStore = useStoreProvider((state) => state.isValidStore);
  const setIsMobile = useIsMobileProvider((state) => state.setIsMobile);

  useEffect(() => {
    if(store && !isValidStore(store as string)) {
      router.push(`/404`);
    }
    setStore(store as string || DEFAULT_STORE);
    const availableStoreLanguages = LANGUAGES[(store as string) || DEFAULT_STORE] || LANGUAGES[DEFAULT_STORE];
    const userLang = navigator && navigator.language;
    setLocale(availableStoreLanguages.filter((x) => x === userLang)[0] || availableStoreLanguages[0] || availableStoreLanguages.filter((x) => x === locale)[0] );
  }, [store])

  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setIsMobile(window.innerWidth))
    }
  }, [])

  useSyncLanguage(locale || "es-ES");

    return (
    <>
      <Head>
        <title>Next boilerplate app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2" />
        {process.env.NODE_ENV === "production" && (
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; child-src 'none'; style-src 'unsafe-inline'; object-src 'none'" />
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

export default appWithI18Next(MyApp, ni18nConfig);
