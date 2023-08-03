import styled, { css } from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { includeMedia } from "@/src/ui/styles/breakpoints";

const Wrapper = styled.section`
  max-width: 100vw;
  margin: ${px2rem(spacing.size2)} ${px2rem(spacing.size5)};
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${includeMedia(
    "lm",
    css`
      width: 100%;
      margin: 0 auto;
    `
  )};
`;

const Spacer = styled.div`
  width: 100%;
  margin-bottom: ${px2rem(spacing.size2)};
`;

const AccordionBlockStyled = { Wrapper, Spacer };

export default AccordionBlockStyled;
