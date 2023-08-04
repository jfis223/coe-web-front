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
        `}
  section {
    width: 100%;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: ${px2rem(spacing.size8)};
    margin-left: 0;
    ${includeMedia(
      "lm",
      css`
        width: 50%;
        align-self: unset;
        margin-top: 0;
        margin-left: ${px2rem(spacing.size8)};
      `
    )};
  }
  p {
    display: flex;
    align-items: center;
    gap: ${px2rem(spacing.size2)};
    color: ${colors.white};
  }
`;

const ClinicCardStyled = {
  Wrapper
};

export default ClinicCardStyled;
