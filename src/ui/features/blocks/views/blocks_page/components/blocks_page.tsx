import type { ReactElement } from "react";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
import Styled from "@/src/ui/features/blocks/views/blocks_page/components/blocks_page.styled";
import type { BlocksTypeOptions } from "@/src/ui/features/blocks/views/blocks_page/view_models/blocks_type_options";
import type { CMSBlock } from "@/src/core/cms_blocks/domain/models/cms_block";
import { SliderBlock } from "@/src/ui/features/blocks/views/slider_block/components/slider_block";
import { IconTextListBlock } from "@/src/ui/features/blocks/views/icon_text_list_block/components/icon_text_list_block";
import { TextBlock } from "@/src/ui/features/blocks/views/text_block/components/text_block";
import { VideoBlock } from "@/src/ui/features/blocks/views/video_block/component/video_block";
import { TeamsBlock } from "@/src/ui/features/blocks/views/teams_block/teams_block";
import { AccordionBlock } from "@/src/ui/features/blocks/views/accordion_block/components/accordion_block";
import { ErrorBoundary } from "react-error-boundary";

const componentMap: Record<BlocksTypeOptions, (props: any) => JSX.Element> = {
  "blocks.accordion": AccordionBlock,
  "blocks.gallery": () => <span>blocks.gallery</span>,
  "blocks.icon-text-list": IconTextListBlock,
  "blocks.slider": SliderBlock,
  "blocks.team": TeamsBlock,
  "blocks.text": TextBlock,
  "blocks.video": VideoBlock
};

type Props = {
  blocks: CMSBlock[];
};

export default function BlocksPage({ blocks }: Props) {
  return (
    <Styled.Wrapper>
      {blocks &&
        blocks.map((block, index) => {
          const Component = componentMap[block.__component];
          return <Component key={index} {...block} />;
        })}
    </Styled.Wrapper>
  );
}

BlocksPage.getLayout = function getLayout(page: ReactElement) {
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
