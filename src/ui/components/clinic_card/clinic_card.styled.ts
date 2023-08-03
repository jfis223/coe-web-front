import styled, { css } from "styled-components";
import { spacing } from "@/src/ui/styles/spacing";
import { px2rem } from "@/src/ui/styles/utils";
import { colors } from "@/src/ui/styles/colors";
import { includeMedia } from "@/src/ui/styles/breakpoints";

interface Props {
  even?: boolean;
}

const Wrapper = styled.div<Props>`
  margin-bottom: ${px2rem(spacing.size2)};
  background: linear-gradient(171deg, rgba(34, 51, 137, 0.8) 0%, rgba(34, 85, 137, 0.8) 100%);
  padding: ${px2rem(spacing.size8)};
  border: 1px solid ${colors.white};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: ${px2rem(spacing.size5)};
  overflow: hidden;
  margin-bottom: ${px2rem(spacing.size8)};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${(props) =>
    props.even
      ? css`
          flex-direction: row-reverse;
        `
      : css`
          flex-direction: row;
        `}}
  iframe {
    border: 1px solid ${colors.main};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: ${px2rem(spacing.size5)};
    overflow: hidden;
  }
  p {
    display: flex;
    align-items: center;
    gap: ${px2rem(spacing.size2)};
    color: ${colors.white};
  }
   div{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: ${px2rem(spacing.size8)};
    ${(props) =>
      Boolean(props.even)
        ? css`
            align-items: flex-end;
          `
        : css`
            align-items: flex-start !important;
          `}
    ${includeMedia(
      "lm",
      css`
        width: auto !important;
        margin-top: unset;
      `
    )}
  }
`;

const ClinicCardStyled = {
  Wrapper
};

export default ClinicCardStyled;
