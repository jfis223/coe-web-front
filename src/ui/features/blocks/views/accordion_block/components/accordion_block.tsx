import type { CMSAccordion } from "@/src/core/cms_blocks/domain/models/blocks/cms_accordion";
import Styled from "./accordion_block.styled";
import { AccordionItem } from "@/src/ui/features/blocks/views/accordion_block/components/accordion_item/accordion_item";

export const AccordionBlock = ({ items }: CMSAccordion) => {
  return (
    <Styled.Wrapper>
      <>
        {items.map((item, index) => {
          return <AccordionItem {...item} key={index} />;
        })}
        <Styled.Spacer />
      </>
    </Styled.Wrapper>
  );
};
