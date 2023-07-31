import styled, { css } from "styled-components";
import { px2rem, flexCenter, absoluteCenter } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { colors } from "@/src/ui/styles/colors";
import { includeMedia } from "@/src/ui/styles/breakpoints";
import { typography } from "@/src/ui/styles/typography";

const Wrapper = styled.section`
  max-width: 100vw;
  margin: ${px2rem(spacing.size5)};
  border: 1px solid ${colors.main};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: ${px2rem(spacing.size5)};
  overflow: hidden;
  background-color: ${colors.white};
  ${includeMedia(
    "ml",
    css`
      width: 100%;
      margin: ${px2rem(spacing.size5)} auto;
    `
  )};
  ${flexCenter}
  .embla__slide {
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  .embla__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 2.82 / 1;
  }
`;

const GradientOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(2, 0, 36, 0.5);
  ${absoluteCenter}
  ${includeMedia(
    "sm",
    css`
      background: rgb(2, 0, 36);
      background: linear-gradient(0deg, rgba(2, 0, 36, 0.7) 0%, rgba(34, 85, 137, 0.19509810760241597) 80%);
    `
  )};
`;

const TextWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  text-shadow: 2px 2px 10px #000;
  z-index: 1;
  width: 100%;
  ${absoluteCenter}
  ${includeMedia(
    "sm",
    css`
      width: auto;
    `
  )};
`;

const Title = styled.span`
  ${typography.headingS}
  text-align: center;
  color: ${colors.white};
  font-weight: 600;
  margin: ${px2rem(spacing.size1)} auto;
  display: table;
  ${includeMedia(
    "sm",
    css`
      ${typography.headingS}
      font-weight: 600;
    `
  )};
  h1,
  h2 {
    ${typography.headingS}
    font-weight: 600;
    text-align: center;
    ${includeMedia(
      "sm",
      css`
        ${typography.headingS}
        font-weight: 600;
      `
    )};
  }
`;

const Subtitle = styled.h3`
  ${typography.bodyS}
  text-align: center;
  color: ${colors.white};
  ${includeMedia(
    "sm",
    css`
      ${typography.bodyL}
    `
  )};
  p {
    ${typography.bodyS}
    ${includeMedia(
      "sm",
      css`
        ${typography.bodyL}
      `
    )};
  }
`;

const SliderBlockStyled = { Wrapper, TextWrapper, Title, Subtitle, GradientOverlay };

export default SliderBlockStyled;
