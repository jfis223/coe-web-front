import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import { px2rem, flexCenter } from "@/src/ui/styles/utils";
import { spacing } from "../../styles/spacing";
import { includeMedia, includeMaxMedia, breakpoints } from "@/src/ui/styles/breakpoints";
import {activeAnimation} from "@/src/ui/styles/animations";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 ${px2rem(spacing.size4)};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  color: ${colors.white};
  height: ${px2rem(120)};
`;

const Nav = styled.nav`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  overflow: hidden;
  transition: all ease 400ms;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

const MainHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  background-color: white;
  position: relative;
  height: ${px2rem(64)};
  max-width: ${breakpoints.lm}px;
  margin: auto;
`;

const MainHeaderMobileMenu = styled.div`
  width: ${px2rem(40)};
  height: 100%;
  padding-left: ${px2rem(8)};
  display: flex;
  cursor: pointer;
  ${activeAnimation};
  ${flexCenter};
`;

const MainHeaderCategories = styled.div`
  ${flexCenter};
  justify-content: flex-start;
  font-size: ${px2rem(16)};
  ${includeMedia(
      "lm",
      css`
        margin-left: ${px2rem(-16)};
    `
  )};
  ${includeMaxMedia(
      "lm",
      css`
        margin-left: ${px2rem(24)};
    `
  )};
`;

const MainLogo = styled.div`
  width: ${px2rem(90)};
  ${includeMedia(
      "sm",
      css`
          width: ${px2rem(120)};
        `
  )};
  ${flexCenter};
  svg {
    width: ${px2rem(90)};
    ${includeMedia(
        "sm",
        css`
          width: ${px2rem(120)};
        `
    )};
  }
`;

const MainHeaderRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: ${px2rem(16)};
  padding-left: ${px2rem(90)};
`;


const BaseLayoutStyled = {
  Wrapper,
  Footer,
  Nav,
  MainHeaderWrapper,
  MainHeaderMobileMenu,
  MainHeaderCategories,
  MainLogo,
  MainHeaderRightWrapper
};

export default BaseLayoutStyled;
