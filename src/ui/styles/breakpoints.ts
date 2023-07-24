import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

export const breakpoints: Record<BreakpointTypes, number> = {
    xs: 480,
    sm: 768,
    md: 992,
    ml: 1080,
    lm: 1360,
    lg: 1440,
    xl: 1920,

};

export type BreakpointTypes = "xs" | "sm" | "md" | "ml" | "lg" | "xl" | "lm";
export const includeMedia = (type: BreakpointTypes, styles: FlattenSimpleInterpolation) => css`
  @media (min-width: ${breakpoints[type]}px) {
    ${styles}
  }
`;

export const includeMaxMedia = (type: BreakpointTypes, styles: FlattenSimpleInterpolation) => css`
  @media (max-width: ${breakpoints[type]}px) {
    ${styles}
  }
`;
