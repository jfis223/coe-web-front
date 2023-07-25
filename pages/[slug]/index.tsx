import type {ReactElement} from "react";
import {BaseLayout} from "@/src/ui/components/base_layout/base_layout";
import {AppErrorBoundary} from "@/src/ui/components/app_error_boundary/app_error_boundary";
import type {GetStaticProps, GetStaticPaths} from "next";
import {locator} from "@/src/core/app/ioc";
import type {IocProvider} from "@/src/core/app/ioc/interfaces";
import type {GetCMSPageBySlugUseCase} from "@/src/core/cms_pages/domain/use_cases/get_cms_page_by_slug_use_case";
import {TYPES} from "@/src/core/app/ioc/types";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Page = () => {
    return <div>TEST</div>
}

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <BaseLayout logged={page.props.logged}>
            <AppErrorBoundary>{page}</AppErrorBoundary>
        </BaseLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    slug: 'home',
                },
            },
        ],
        fallback: false,
    }
}


export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
    const getPagesUseCase = await locator.get<IocProvider<GetCMSPageBySlugUseCase>>(TYPES.GetCMSPageBySlugUseCase)();
    const page = await getPagesUseCase.execute(params?.slug as string || 'home', locale || 'es');
    console.log(page.data[0]);
    return {
        props: {
            page: JSON.parse(JSON.stringify(page.data[0])),
            ...(await serverSideTranslations(locale || "es"))
            // Will be passed to the page component as props
        },
        revalidate: 60
    };
}
