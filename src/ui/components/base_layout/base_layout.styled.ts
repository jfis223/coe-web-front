import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import { px2rem, flexCenter } from "@/src/ui/styles/utils";
import { spacing } from "../../styles/spacing";
import { includeMedia, includeMaxMedia, breakpoints } from "@/src/ui/styles/breakpoints";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  //background-color: ${colors.white};

  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding: ${px2rem(80)} ${px2rem(spacing.size4)} 0;
    max-width: ${px2rem(breakpoints.ml + 'px')};
    margin: 0 auto;
    z-index: 1;
    overflow-y: hidden;
  }
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    background-color: ${colors.white};
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
  z-index: 1;
`;

const Nav = styled.nav`
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.4px);
  -webkit-backdrop-filter: blur(8.4px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.77);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  overflow: hidden;
  transition: all ease 400ms;
  height: ${px2rem(80)};
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0  ${px2rem(16)};
`;

const MainHeader = styled.div`
  max-width: ${px2rem(breakpoints.ml + 'px')};
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: ${px2rem(180)};
  font-size: 0;
  ${flexCenter};
  svg {
    width: ${px2rem(180)};
  }
`;

const MainHeaderRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: ${px2rem(16)};
  padding-left: ${px2rem(90)};
`;

const MenuIcon = styled.div`
  width: ${px2rem(40)};
  height: ${px2rem(40)};
  cursor: pointer;
  margin-right: ${px2rem(20)};
  svg {
    width: inherit;
    height: inherit;
    vertical-align: middle;
    > * {
      fill: ${colors.main};
    }
  }
`;


const BaseLayoutStyled = {
  Wrapper,
  Footer,
  Nav,
  MainHeader,
  MainHeaderCategories,
  MainLogo,
  MenuIcon,
  MainHeaderRightWrapper
};

export default BaseLayoutStyled;
