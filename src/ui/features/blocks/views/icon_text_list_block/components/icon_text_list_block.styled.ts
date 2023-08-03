import styled, { css } from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { colors } from "@/src/ui/styles/colors";
import { includeMedia } from "@/src/ui/styles/breakpoints";
import { flexCenter } from "@/src/ui/styles/utils";
import { typography } from "@/src/ui/styles/typography";

const Wrapper = styled.section`
  max-width: 100vw;
  margin: ${px2rem(spacing.size5)};
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${px2rem(spacing.size2)};
  ${includeMedia(
    "lm",
    css`
      width: 100%;
      margin: ${px2rem(spacing.size5)} auto;
    `
  )};
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid white;
  position: relative;
  z-index: 2;
  border-radius: ${px2rem(spacing.size2)};
  overflow: hidden;
  padding: ${px2rem(spacing.size5)} ${px2rem(spacing.size3)};
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  ${flexCenter};
  justify-content: flex-start;
  ${includeMedia(
    "sm",
    css`
      justify-content: center;
      width: calc(50% - ${px2rem(spacing.size2)});
      padding: ${px2rem(spacing.size5)} ${px2rem(spacing.size8)};
    `
  )};
  ${includeMedia(
    "lm",
    css`
      justify-content: center;
      width: calc(25% - ${px2rem(spacing.size2)});
      padding: ${px2rem(spacing.size5)} ${px2rem(spacing.size8)};
    `
  )};
  img {
    padding: ${px2rem(spacing.size2)};
    margin-bottom: ${px2rem(spacing.size5)};
    object-fit: contain;
    width: ${px2rem(100)};
    height: ${px2rem(100)};
  }
  p {
    text-align: center;
    ${typography.bodyM}
  }
`;

const CardBackground = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.gray};
  opacity: 0.7;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
`;

const IconTextListBlockStyled = { Wrapper, Card, CardBackground };

export default IconTextListBlockStyled;
