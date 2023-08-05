import type { CMSFullWidthImage } from "@/src/core/cms_blocks/domain/models/blocks/cms_full_width_image";
import { CldImage } from "next-cloudinary";
import Styled from "./full_width_image_block.styled";

export const FullWidthImageBlock = ({ image }: CMSFullWidthImage) => {
  return (
    <Styled.Wrapper>
      <CldImage
        src={image.image.data.attributes.url}
        alt={image.altText}
        width={image.image.data.attributes.width}
        height={image.image.data.attributes.height}
      />
    </Styled.Wrapper>
  );
};
