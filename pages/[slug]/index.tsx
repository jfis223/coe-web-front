import type { ReactElement } from "react";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
import { ErrorBoundary } from "react-error-boundary";
import type { GetStaticProps, GetStaticPaths } from "next";
import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { GetCMSPageBySlugUseCase } from "@/src/core/cms_pages/domain/use_cases/get_cms_page_by_slug_use_case";
import { TYPES } from "@/src/core/app/ioc/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { CMSPage } from "@/src/core/cms_pages/domain/models/cms_page";
import type { NextPageWithLayout } from "@/src/ui/@types/page";
import type { GetCMSMenuBySlugUseCase } from "@/src/core/cms_menus/domain/use_cases/get_cms_menu_by_slug_use_case";
import BlocksPage from "@/src/ui/features/blocks/views/blocks_page/components/blocks_page";
import Head from "next/head";

type Props = {
  page: CMSPage;
};

const Page: NextPageWithLayout = ({ page }: Props) => {
  return (
    <>
      <Head>
        <title>{`${page?.attributes?.title ?? ""} - Centro Oftalmológico del Este`}</title>
        <meta name="description" content={page?.attributes?.description ?? ""} />
        <meta property="og:title" content={`${page?.attributes?.title ?? ""} - Centro Oftalmológico del Este`} />
        <meta property="og:description" content={`${page?.attributes?.description ?? ""}`} />
      </Head>
      <BlocksPage blocks={page?.attributes?.blocks} />
    </>
  );
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout header={page.props.menu?.header}>
      <ErrorBoundary
        fallbackRender={() => (
          <h2>
            <b>Something went wrong</b>
          </h2>
        )}
      >
        {page}
      </ErrorBoundary>
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "home"
        }
      },
      {
        params: {
          slug: "nuestros-centros"
        }
      },
      {
        params: {
          slug: "contacto"
        }
      },
      {
        params: {
          slug: "quienes-somos"
        }
      },
      {
        params: {
          slug: "tecnologias"
        }
      },
      {
        params: {
          slug: "tratamientos"
        }
      }
    ],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const getPagesUseCase = await locator.get<IocProvider<GetCMSPageBySlugUseCase>>(TYPES.GetCMSPageBySlugUseCase)();
  const page = await getPagesUseCase.execute((params?.slug as string) || "home", locale || "es");
  if (page.data.length === 0) {
    return {
      notFound: true
    };
  }

  const getCMSMenuBySlugUseCase = await locator.get<IocProvider<GetCMSMenuBySlugUseCase>>(TYPES.GetCMSMenuBySlugUseCase)();
  const headerMenu = await getCMSMenuBySlugUseCase.execute("header", locale || "es");

  return {
    props: {
      page: JSON.parse(JSON.stringify(page.data[0])),
      menu: {
        header: JSON.parse(JSON.stringify(headerMenu.data[0]))
      },
      ...(await serverSideTranslations(locale || "es"))
      // Will be passed to the page component as props
    },
    revalidate: 60
  };
};
