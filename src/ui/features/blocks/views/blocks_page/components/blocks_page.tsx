import type { ReactElement } from "react";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
import Styled from "@/src/ui/features/blocks/views/blocks_page/components/blocks_page.styled";
import { AppErrorBoundary } from "@/src/ui/components/app_error_boundary/app_error_boundary";
import type {BlocksTypeOptions} from "@/src/ui/features/blocks/views/blocks_page/view_models/blocks_type_options";
import type {CMSBlock} from "@/src/core/cms_blocks/domain/models/cms_block";

const componentMap: Record<BlocksTypeOptions, () => JSX.Element> = {
  "blocks.accordion": () => <h1>blocks.accordion</h1>,
  "blocks.gallery": () => <h1>blocks.gallery</h1>,
  "blocks.icon-text-list": () => <h1>blocks.icon-text-list</h1>,
  "blocks.slider": () => <h1>blocks.slider</h1>,
  "blocks.team": () => <h1>blocks.team</h1>,
  "blocks.text": () => <h1>blocks.text</h1>,
  "blocks.video": () => <h1>blocks.video</h1>,
};

type Props = {
  blocks: CMSBlock[];
};

export default function BlocksPage({blocks} : Props) {
  return (
    <Styled.Wrapper>
      {
        blocks && blocks.map(block => {
          const Component = componentMap[block.__component]
          return <Component key={block.id} />
        })
      }
    </Styled.Wrapper>
  );
}

BlocksPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout header={page.props.menu?.header}>
      <AppErrorBoundary>{page}</AppErrorBoundary>
    </BaseLayout>
  );
};
