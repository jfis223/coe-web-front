import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {GetCMSPagesUseCase} from "@/src/core/cms_pages/domain/use_cases/get_cms_pages_use_case";
export default <div>TODO</div>;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  console.log("REVALIDATING POSTS");
  const getPagesUseCase = await locator.get<IocProvider<GetCMSPagesUseCase>>(TYPES.GetCMSPagesUseCase)();
  const pages = await getPagesUseCase.execute();
  return {
    props: {
      serializedPosts: JSON.parse(JSON.stringify(pages)),
      ...(await serverSideTranslations(locale || "es-ES"))
      // Will be passed to the page component as props
    },
    revalidate: 5
  };
};
