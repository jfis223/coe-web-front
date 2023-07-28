import type {ReactElement} from "react";
import {BaseLayout} from "@/src/ui/components/base_layout/base_layout";
import {AppErrorBoundary} from "@/src/ui/components/app_error_boundary/app_error_boundary";
import type {GetStaticProps, GetStaticPaths} from "next";
import {locator} from "@/src/core/app/ioc";
import type {IocProvider} from "@/src/core/app/ioc/interfaces";
import type {GetCMSPageBySlugUseCase} from "@/src/core/cms_pages/domain/use_cases/get_cms_page_by_slug_use_case";
import {TYPES} from "@/src/core/app/ioc/types";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import type {CMSPage} from "@/src/core/cms_pages/domain/models/cms_page";
import type {NextPageWithLayout} from "@/src/ui/@types/page";
import type {GetCMSMenuBySlugUseCase} from "@/src/core/cms_menus/domain/use_cases/get_cms_menu_by_slug_use_case";
import BlocksPage from "@/src/ui/features/blocks/views/blocks_page/components/blocks_page";

type Props = {
    page: CMSPage;
};

const Page: NextPageWithLayout  = ({page} : Props) => {
    return <BlocksPage blocks={page.attributes.blocks} />
}

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <BaseLayout header={page.props.menu?.header}>
            <AppErrorBoundary>{page}</AppErrorBoundary>
        </BaseLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    slug: 'home'
                },
            }
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
    const getPagesUseCase = await locator.get<IocProvider<GetCMSPageBySlugUseCase>>(TYPES.GetCMSPageBySlugUseCase)();
    const page = await getPagesUseCase.execute(params?.slug as string || 'home', locale || 'es');
    console.log(page, 'page')
    if (page.data.length === 0) {
        return {
            notFound: true,
        }
    }

    const getCMSMenuBySlugUseCase = await locator.get<IocProvider<GetCMSMenuBySlugUseCase>>(TYPES.GetCMSMenuBySlugUseCase)();
    const headerMenu = await getCMSMenuBySlugUseCase.execute('header', locale || 'es');

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
}
