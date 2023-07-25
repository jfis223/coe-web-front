import type { FlattenSimpleInterpolation } from "styled-components";
import { createGlobalStyle, css } from "styled-components";

export const FontStyled = createGlobalStyle`
  /* Primary Font Family - Switzer Regular */
  @font-face {
    font-family: 'Switzer', sans-serif;
    src: url("/assets/fonts/Switzer-Regular.otf") format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Switzer', sans-serif;
    src: url("/assets/fonts/Switzer-Italic.otf") format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  /* Secondary Font Family - Plein */
  @font-face {
    font-family: 'Plein', sans-serif;
    src: url("/assets/fonts/Plein-Bold.otf") format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Plein', sans-serif;
    src: url("/assets/fonts/Plein-BoldItalic.otf") format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;

declare type FontType = "Switzer" | "Plein";

export const fonts: Record<FontType, FlattenSimpleInterpolation> = {
  Switzer: css`
    font-family: 'Switzer', sans-serif;

    * {
      font-family: 'Switzer', sans-serif;
    }
  `,
  Plein: css`
    font-family: 'Plein', sans-serif;

    * {
      font-family: 'Plein', sans-serif;
    }
  `,
};
