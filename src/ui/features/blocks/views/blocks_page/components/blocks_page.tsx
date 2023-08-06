import type { ReactElement } from "react";
import { BaseLayout } from "@/src/ui/components/base_layout/base_layout";
import Styled from "@/src/ui/features/blocks/views/blocks_page/components/blocks_page.styled";
import type { BlocksTypeOptions } from "@/src/ui/features/blocks/views/blocks_page/view_models/blocks_type_options";
import type { CMSBlock } from "@/src/core/cms_blocks/domain/models/cms_block";
import { SliderBlock } from "@/src/ui/features/blocks/views/slider_block/components/slider_block";
import { IconTextListBlock } from "@/src/ui/features/blocks/views/icon_text_list_block/components/icon_text_list_block";
import { TextBlock } from "@/src/ui/features/blocks/views/text_block/components/text_block";
import { VideoBlock } from "@/src/ui/features/blocks/views/video_block/components/video_block";
import { TeamsBlock } from "@/src/ui/features/blocks/views/teams_block/components/teams_block";
import { AccordionBlock } from "@/src/ui/features/blocks/views/accordion_block/components/accordion_block";
import { GalleryBlock } from "@/src/ui/features/blocks/views/gallery_block/components/gallery_block";
import { ClinicsBlock } from "@/src/ui/features/blocks/views/clinics_block/components/clinics_block";
import { ContactFormBlock } from "@/src/ui/features/blocks/views/contact_form_block/components/contact_form_block";
import { ContactLinksBlock } from "@/src/ui/features/blocks/views/contact_links_block/components/contact_links_block";
import { FullWidthImageBlock } from "@/src/ui/features/blocks/views/full_width_image_block/components/full_width_image_block";
import { ErrorBoundary } from "react-error-boundary";

const componentMap: Record<BlocksTypeOptions, (props: any) => JSX.Element> = {
  "blocks.accordion": AccordionBlock,
  "blocks.gallery": GalleryBlock,
  "blocks.icon-text-list": IconTextListBlock,
  "blocks.slider": SliderBlock,
  "blocks.team": TeamsBlock,
  "blocks.text": TextBlock,
  "blocks.video": VideoBlock,
  "blocks.clinics": ClinicsBlock,
  "blocks.contact-form": ContactFormBlock,
  "blocks.contact-links": ContactLinksBlock,
  "blocks.full-width-image": FullWidthImageBlock
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
