import styled, { css } from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { colors } from "@/src/ui/styles/colors";
import { includeMedia } from "@/src/ui/styles/breakpoints";

const Wrapper = styled.section`
  max-width: 100vw;
  margin: ${px2rem(spacing.size5)};
  img {
    height: auto;
    border: 1px solid ${colors.main};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: ${px2rem(spacing.size5)};
    overflow: hidden;
    background-color: ${colors.white};
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
  ${includeMedia(
    "lm",
    css`
      width: 100%;
      margin: ${px2rem(spacing.size5)} auto;
    `
  )};
`;

const GalleryBlockStyled = { Wrapper };

export default GalleryBlockStyled;
