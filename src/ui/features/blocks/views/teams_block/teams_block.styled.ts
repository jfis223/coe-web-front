import styled, { css } from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { includeMedia } from "@/src/ui/styles/breakpoints";
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
`;

const Card = styled.div`
  width: ${px2rem(350)};
  border: 1px solid ${colors.main};
  border-radius: ${px2rem(spacing.size2)};
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
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
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: column;
  width: 100%;
  padding: ${px2rem(spacing.size5)} ${px2rem(spacing.size3)};
  transition: padding 0.5s ease;
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

const TeamsBlockStyled = { Wrapper, Card, Caption, Title, Subtitle, GlassBackground, MainTitle };

export default TeamsBlockStyled;
