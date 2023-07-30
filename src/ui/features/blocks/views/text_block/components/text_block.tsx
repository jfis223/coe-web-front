import type { CMSTextBlock } from "@/src/core/cms_blocks/domain/models/blocks/cms_text_block";
import { useUiProvider } from "@/src/ui/providers/ui.provider";
import Styled from "./text_block.styled";

export const TextBlock = ({ title, body }: CMSTextBlock) => {
  const pageHasH1 = useUiProvider((state) => state.pageHasH1);

  return (
    <Styled.Wrapper>
      {pageHasH1 && title && (
        <Styled.Title>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </Styled.Title>
      )}
      {!pageHasH1 && title && (
        <Styled.Title>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
        </Styled.Title>
      )}
      {body && (
        <Styled.Body>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Styled.Body>
      )}
    </Styled.Wrapper>
  );
};
