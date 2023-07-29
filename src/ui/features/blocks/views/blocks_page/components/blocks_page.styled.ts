import styled, {css} from "styled-components";
import { Form } from "formik";
import { px2rem, wrapperStyles } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import {includeMedia} from "@/src/ui/styles/breakpoints";

const Wrapper = styled.div`
  ${wrapperStyles};
  display: flex;
  flex-direction: column;
  padding: ${px2rem(spacing.size4)} 0;
  border-radius: ${px2rem(4)};
  gap: ${px2rem(spacing.size2)};
  overflow: hidden;
  max-width: 100vw;
  ${includeMedia(
      "sm",
      css`
       max-width: 100%
      `
  )};
`;

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${px2rem(spacing.size4)};
`;

const Locale = styled.div`
  display: flex;
  align-items: center;
  margin: ${px2rem(spacing.size4)} 0;
  gap: ${px2rem(spacing.size4)};
`;

const HomePageStyled = {
  Wrapper,
  Form: FormStyled,
  Locale
};

export default HomePageStyled;
