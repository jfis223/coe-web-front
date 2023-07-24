import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";
import { px2rem } from "./utils";
import { fonts } from "./fonts";

export interface Typography {
  bodyXs: FlattenSimpleInterpolation;
  bodyS: FlattenSimpleInterpolation;
  bodyM: FlattenSimpleInterpolation;
  bodyL: FlattenSimpleInterpolation;
  bodyXL: FlattenSimpleInterpolation;
  subHeading: FlattenSimpleInterpolation;
  headingS: FlattenSimpleInterpolation;
  headingM: FlattenSimpleInterpolation;
  headingL: FlattenSimpleInterpolation;
  headingXL: FlattenSimpleInterpolation;
  heading2XL: FlattenSimpleInterpolation;
  legal: FlattenSimpleInterpolation;
  detail: FlattenSimpleInterpolation;
  linkXs: FlattenSimpleInterpolation;
  linkS: FlattenSimpleInterpolation;
  linkM: FlattenSimpleInterpolation;
  button: FlattenSimpleInterpolation;
}

// Body
const bodyXs = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(12)};
  line-height: ${px2rem(14)};
  font-weight: 400;
`;
const bodyS = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(14)};
  line-height: ${px2rem(18)};
  font-weight: 400;
`;
const bodyM = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(16)};
  line-height: ${px2rem(20)};
  font-weight: 400;
`;
const bodyL = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(24)};
  line-height: ${px2rem(28)};
  font-weight: 400;
`;
const bodyXL = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(32)};
  line-height: ${px2rem(36)};
  font-weight: 400;
`;

// Heading
const subHeading = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(48)};
  line-height: ${px2rem(52)};
  font-weight: 400;
`;
const headingS = css`
  ${fonts.ITCGaramondCond};
  font-size: ${px2rem(32)};
  line-height: ${px2rem(36)};
  letter-spacing: ${px2rem(-0.32)};
  font-weight: 300;
`;
const headingM = css`
  ${fonts.ITCGaramondCond};
  font-size: ${px2rem(56)};
  line-height: ${px2rem(52)};
  letter-spacing: ${px2rem(-0.56)};
  font-weight: 300;
`;
const headingL = css`
  ${fonts.ITCGaramondCond};
  font-size: ${px2rem(72)};
  line-height: ${px2rem(68)};
  letter-spacing: ${px2rem(-1.44)};
  font-weight: 300;
`;

const headingXL = css`
  ${fonts.ITCGaramondCond};
  font-size: ${px2rem(96)};
  line-height: ${px2rem(88)};
  letter-spacing: ${px2rem(-1.44)};
  font-weight: 300;
`;

const heading2XL = css`
  ${fonts.ITCGaramondCond};
  font-size: ${px2rem(132)};
  line-height: ${px2rem(106)};
  letter-spacing: ${px2rem(-1.44)};
  font-weight: 300;
`;

//Specific
const legal = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(10)};
  line-height: ${px2rem(14)};
  font-weight: 400;
`;

const detail = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(12)};
  line-height: ${px2rem(16)};
  font-weight: 400;
`;

//Action
const linkXs = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(12)};
  line-height: ${px2rem(16)};
  font-weight: 400;
  text-decoration: underline;
`;

const linkS = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(14)};
  line-height: ${px2rem(18)};
  font-weight: 400;
  text-decoration: underline;
`;

const linkM = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(16)};
  line-height: ${px2rem(20)};
  font-weight: 400;
  text-decoration: underline;
`;

const button = css`
  ${fonts.NeueHaasGrotesk};
  font-size: ${px2rem(16)};
  line-height: ${px2rem(20)};
  font-weight: 400;
`;

export const typography: Typography = {
  bodyXs,
  bodyS,
  bodyM,
  bodyL,
  bodyXL,
  subHeading,
  headingS,
  headingM,
  headingL,
  headingXL,
  heading2XL,
  legal,
  detail,
  linkXs,
  linkS,
  linkM,
  button
};
