import styled, { css } from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { includeMedia } from "@/src/ui/styles/breakpoints";

const Wrapper = styled.section`
  max-width: 100vw;
  margin: ${px2rem(spacing.size5)};
  ${includeMedia(
    "lm",
    css`
      width: 100%;
      margin: ${px2rem(spacing.size5)} auto;
    `
  )};
`;

const ClinicsBlockStyled = { Wrapper };

export default ClinicsBlockStyled;
