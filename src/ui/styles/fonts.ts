import type { FlattenSimpleInterpolation } from "styled-components";
import { createGlobalStyle, css } from "styled-components";

export const FontStyled = createGlobalStyle`
  /* Primary Font Family - ITC Garamond Cond */
  @font-face {
    font-family: 'ITC Garamond Cond', sans-serif;
    src: url("/assets/fonts/ITCGaramondStd-LtCond.otf") format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ITC Garamond Cond', sans-serif;
    src: url("/assets/fonts/ITCGaramondStd-LtCondIta.otf") format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  /* Secondary Font Family - Neue Haas Grotesk */
  @font-face {
    font-family: 'Neue Haas Grotesk', sans-serif;
    src: url("/assets/fonts/NeueHaasDisplayRoman.ttf") format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;

declare type FontType = "ITCGaramondCond" | "NeueHaasGrotesk";

export const fonts: Record<FontType, FlattenSimpleInterpolation> = {
  ITCGaramondCond: css`
    font-family: 'ITC Garamond Cond', sans-serif;

    * {
      font-family: 'ITC Garamond Cond', sans-serif;
    }
  `,
  NeueHaasGrotesk: css`
    font-family: 'Neue Haas Grotesk', sans-serif;

    * {
      font-family: 'Neue Haas Grotesk', sans-serif;
    }
  `,
};
