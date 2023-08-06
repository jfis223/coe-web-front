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
  justify-content: flex-start;
  gap: ${px2rem(spacing.size2)};
  > div {
    width: 100%;
  }
  ${includeMedia(
    "lm",
    css`
      width: 100%;
      margin: ${px2rem(spacing.size5)} auto;
    `
  )};
`;

const Title = styled.h2`
  ${typography.bodyL};
  text-align: center;
  width: 100%;
  margin-bottom: ${px2rem(spacing.size6)};
`;

const Group = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: ${px2rem(spacing.size6)};
  margin-bottom: ${px2rem(spacing.size6)};
  button {
    margin: 0 ${px2rem(spacing.size2)};
  }
  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;

const ContactLinksStyled = { Wrapper, Title, Group };

export default ContactLinksStyled;
