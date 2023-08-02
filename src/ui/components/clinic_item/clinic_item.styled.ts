import styled, { css } from "styled-components";
import { includeMedia } from "@/src/ui/styles/breakpoints";
import { typography } from "@/src/ui/styles/typography";
import { spacing } from "@/src/ui/styles/spacing";
import { px2rem } from "@/src/ui/styles/utils";

const Wrapper = styled.div`
  margin-bottom: ${px2rem(spacing.size2)};
  p {
    display: flex;
    align-items: center;
    gap: ${px2rem(spacing.size2)};
  }
  ${includeMedia(
    "lm",
    css`
      align-items: flex-start !important;
    `
  )};
`;

const Text = styled.p`
  ${typography.bodyM};
  margin-bottom: ${px2rem(spacing.size1)};
  display: flex;
  align-items: center;
  gap: ${px2rem(spacing.size2)};
  a{ 
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${px2rem(spacing.size2)};
  }
  svg {
    path {
      fill: white;
    }
  }
)};
`;

const ClinicItemStyled = {
  Wrapper,
  Text
};

export default ClinicItemStyled;
