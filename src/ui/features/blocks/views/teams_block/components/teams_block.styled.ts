import styled, { css } from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { includeMedia, includeMaxMedia, breakpoints } from "@/src/ui/styles/breakpoints";
import { flexCenter } from "@/src/ui/styles/utils";
import { colors } from "@/src/ui/styles/colors";
import { typography } from "@/src/ui/styles/typography";

const Wrapper = styled.section`
  max-width: 100vw;
  margin: ${px2rem(spacing.size5)};
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${px2rem(spacing.size2)};
  position: relative;
  ${flexCenter}
  ${includeMedia(
    "lm",
    css`
      width: 100%;
      margin: ${px2rem(spacing.size5)} auto;
    `
  )};
  .embla {
    max-width: calc(100vw - ${px2rem(spacing.size5)} - ${px2rem(spacing.size5)});
    overflow: hidden;
    ${includeMedia(
      "lm",
      css`
        max-width: ${px2rem(breakpoints.lm)};
      `
    )};
  }
  .embla__container {
    display: flex;
    gap: ${px2rem(spacing.size4)};
  }
  .embla__slide {
    flex: 0 0 ${px2rem(350)};
    max-width: 100%;
    min-width: 0;
  }
`;

const WithBioWrapper = styled.div`
  max-width: 100vw;
  margin: ${px2rem(spacing.size5)};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${px2rem(spacing.size2)};
  position: relative;
  ${flexCenter}
  > div {
    justify-content: center !important;
    max-width: 100%;
    padding: ${px2rem(spacing.size7)};
    ${includeMedia(
      "lm",
      css`
        padding: ${px2rem(spacing.size10)};
      `
    )};
  }
  ${includeMedia(
    "lm",
    css`
      width: 100%;
      margin: ${px2rem(spacing.size5)} auto;
    `
  )};
`;

interface EvenProps {
  even: boolean;
}

const Biography = styled.section<EvenProps>`
  ${includeMedia(
    "lm",
    css`
      max-width: calc(100% - ${px2rem(350)}) !important;
      width: calc(100% - ${px2rem(450)}) !important;
    `
  )};
  ${(props) =>
    props.even
      ? css`
          margin-left: unset !important;
          margin-right: ${px2rem(spacing.size8)};
        `
      : css`
          margin-left: ${px2rem(spacing.size8)};
          margin-right: unset !important;
        `}
  ${includeMaxMedia(
    "lm",
    css`
      margin-left: 0 !important;
      margin-right: 0 !important;
    `
  )};
  * {
    color: ${colors.white};
    ${typography.bodyM};
    flex-direction: column;
    text-align: justify;
  }
`;

interface Props {
  isFounder: boolean;
}

const Card = styled.div<Props>`
  width: 100%;
  max-width: ${px2rem(350)};
  ${({ isFounder }) =>
    isFounder
      ? css`
          border: 2px solid ${colors.secondary};
        `
      : css`
          border: 1px solid ${colors.main};
        `}
  border-radius: ${px2rem(spacing.size2)};
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  img {
    object-fit: cover;
  }
`;

const GlassBackground = styled.div`
  background-color: ${colors.white};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  z-index: 1;
  border-top: 1px solid ${colors.variant};
  margin-bottom: 0 !important;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: column;
  width: 100%;
  padding: ${px2rem(spacing.size5)} ${px2rem(spacing.size3)};
  transition: padding 0.5s ease;
  margin-bottom: 0 !important;
  ${flexCenter}
  &:hover {
    padding: ${px2rem(spacing.size8)} ${px2rem(spacing.size3)};
  }
`;

const Title = styled.h4`
  position: relative;
  z-index: 2;
  color: ${colors.main};
  ${typography.bodyL}
`;

const Subtitle = styled.p`
  position: relative;
  z-index: 2;
  color: ${colors.secondary};
  ${typography.bodyS}
`;

const MainTitle = styled.h3`
  width: 100%;
  position: relative;
  text-align: center;
  padding-bottom: ${px2rem(spacing.size8)};
  ${typography.headingS}
  font-weight: 600;
`;

const TeamsBlockStyled = { Wrapper, Card, Caption, Title, Subtitle, GlassBackground, MainTitle, WithBioWrapper, Biography };

export default TeamsBlockStyled;
