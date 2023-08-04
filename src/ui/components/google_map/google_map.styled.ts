import styled, { css } from "styled-components";
import { colors } from "@/src/ui/styles/colors";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { includeMedia } from "@/src/ui/styles/breakpoints";

const Wrapper = styled.div`
  border: 1px solid ${colors.main};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: ${px2rem(spacing.size5)};
  overflow: hidden;
  max-width: 100%;
  ${includeMedia(
    "lm",
    css`
      max-width: 50%;
    `
  )}
`;

const Marker = styled.div`
  width: ${px2rem(spacing.size9)};
  height: ${px2rem(spacing.size9)};
  svg {
    width: inherit;
    height: inherit;
    .st0 {
      fill: none;
      stroke: ${colors.white};
      stroke-width: 0.5;
      stroke-miterlimit: 6.1432;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    path:not(.st0) {
      color: ${colors.main};
      fill: ${colors.main};
    }
  }
`;

const GoogleMapStyled = {
  Wrapper,
  Marker
};

export default GoogleMapStyled;
