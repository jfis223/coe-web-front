import styled, { css } from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { includeMedia } from "@/src/ui/styles/breakpoints";
import { colors } from "@/src/ui/styles/colors";

const Wrapper = styled.section`
  max-width: 100vw;
  margin: ${px2rem(spacing.size5)};
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${px2rem(spacing.size2)};
  border: 1px solid ${colors.main};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: ${px2rem(spacing.size5)};
  ${includeMedia(
    "lm",
    css`
      width: 100%;
      margin: ${px2rem(spacing.size5)} auto;
    `
  )};
`;

const FullWidthImageStyled = { Wrapper };

export default FullWidthImageStyled;
