import type {ReactElement} from "react";
import {BaseLayout} from "@/src/ui/components/base_layout/base_layout";
import {AppErrorBoundary} from "@/src/ui/components/app_error_boundary/app_error_boundary";

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
