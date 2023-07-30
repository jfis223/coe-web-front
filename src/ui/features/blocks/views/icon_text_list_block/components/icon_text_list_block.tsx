import type { CMSIconTextList } from "@/src/core/cms_blocks/domain/models/blocks/cms_icon_text_list";
import { CldImage } from "next-cloudinary";
import Styled from "./icon_text_list_block.styled";
import { colors } from "@/src/ui/styles/colors";

export const IconTextListBlock = ({ items }: CMSIconTextList) => {
  return (
    <Styled.Wrapper>
      {items?.map((item, index) => {
        return (
          <Styled.Card key={index}>
            <CldImage
              effects={[{ colorize: `100,co_rgb:${colors.main.replace("#", "")},` }]}
              crop={"fit"}
              alt={item.icon.altText}
              src={item.icon.image.data.attributes.url}
              format={"png"}
              width={100}
              height={100}
            />
            <p>{item.text}</p>
            <Styled.CardBackground />
          </Styled.Card>
        );
      })}
    </Styled.Wrapper>
  );
};
