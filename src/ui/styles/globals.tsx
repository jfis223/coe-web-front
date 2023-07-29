import { createGlobalStyle } from "styled-components";
import { ResetCSS } from "@/src/ui/styles/reset";
import { colors } from "./colors";
import { fonts, FontStyled } from "./fonts";
import { typography } from "@/src/ui/styles/typography";
import { px2rem } from "@/src/ui/styles/utils";

const Styles = createGlobalStyle`
  body {
    background-color: ${colors.white};
    overflow-x: hidden;
  }

  * {
    ${fonts.Switzer};

    &:focus {
      outline: ${px2rem(2)} solid ${colors.codGray};
    }
  }

  h1 {
    ${typography.headingL}
  }

  h2 {
    ${typography.headingM}
  }

  h3 {
    ${typography.headingS}
  }

  h4 {
    ${typography.subHeading}
  }

  p {
    ${typography.bodyM}
  }

  small {
    ${typography.bodyXs}
  }
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
`;

export const GlobalStyles = () => (
  <>
    <Styles />
    <ResetCSS />
    <FontStyled />
  </>
);
