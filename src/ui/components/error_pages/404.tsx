import type { ReactElement } from "react";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
//import { AppErrorBoundary } from "@/src/ui/components/app_error_boundary/app_error_boundary";
import { ErrorBoundary } from "react-error-boundary";

export default function Page404() {
  return <h1>404 - Page Not Found</h1>;
}

Page404.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout header={page.props.header}>
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
