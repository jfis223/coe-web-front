import styled, { css } from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { includeMedia } from "@/src/ui/styles/breakpoints";
import { typography } from "@/src/ui/styles/typography";
import { colors } from "@/src/ui/styles/colors";

const Wrapper = styled.section`
  max-width: 100vw;
  margin: ${px2rem(spacing.size5)};
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${px2rem(spacing.size2)};
  ${includeMedia(
    "ml",
    css`
      width: 100%;
      margin: ${px2rem(spacing.size5)} auto;
    `
  )};
`;

const Title = styled.div`
  h1,
  h2,
  h1 > p,
  h2 > p {
    text-align: justify;
    ${typography.headingS}
    font-weight: 600;
    margin-bottom: ${px2rem(spacing.size3)};
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: column;
  }
  p {
    text-align: justify;
    padding-bottom: ${px2rem(spacing.size2)};
    ${typography.bodyM}
  }
  blockquote {
    background: ${colors.gray};
    opacity: 0.7;
    border-radius: ${px2rem(spacing.size2)};
    border: 1px solid white;
    padding: ${px2rem(spacing.size4)};
    margin: ${px2rem(spacing.size4)} 0;
    width: 100%;
    align-self: center;
    margin-bottom: ${px2rem(spacing.size4)};
    position: relative;
    &:after {
      content: "”";
      position: absolute;
      bottom: -${px2rem(spacing.size9)};
      right: 3%;
      color: ${colors.main};
      opacity: 0.5;
      ${typography.headingXL}
    }
    ${includeMedia(
      "ml",
      css`
        margin: ${px2rem(spacing.size8)} 0;
        width: 60%;
      `
    )};
    > p {
      ${typography.bodyL}
      text-align: center;
    }
  }
`;

const TextBlockStyled = { Wrapper, Title, Body };

export default TextBlockStyled;
