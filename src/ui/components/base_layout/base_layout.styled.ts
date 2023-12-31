import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import { px2rem, flexCenter } from "@/src/ui/styles/utils";
//import { spacing } from "../../styles/spacing";
import { includeMedia, includeMaxMedia, breakpoints } from "@/src/ui/styles/breakpoints";
import { spacing } from "@/src/ui/styles/spacing";
import { typography } from "@/src/ui/styles/typography";

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
    padding: ${px2rem(80)} 0;
    max-width: ${px2rem(breakpoints.lm)};
    margin: 0 auto;
    z-index: 1;
    overflow-y: hidden;
    width: 100%;
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
  background: linear-gradient(171deg, rgba(34, 51, 137, 1) 0%, rgba(34, 85, 137, 1) 100%);
  border-top: 1px solid ${colors.gray};
  color: ${colors.white};
  z-index: 1;
`;

const FooterContent = styled.div`
  max-width: ${px2rem(breakpoints.lm + "px")};
  width: 100%;
  margin: ${px2rem(spacing.size8)} auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  ${includeMedia(
    "lm",
    css`
      margin: 0 auto;
    `
  )};
`;

const FooterHalfWidthContent = styled.div`
  width: 100%;
  margin: 0 ${px2rem(16)};
  padding: ${px2rem(spacing.size5)} 0;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${includeMedia(
    "lm",
    css`
      margin: ${px2rem(spacing.size5)} 0 0 0;
      width: 50%;
      > div {
        align-items: flex-end;
      }
    `
  )};
`;

const FooterFullWidth = styled.p`
  width: 100%;
  text-align: center;
  padding: ${px2rem(spacing.size5)} 0;
`;

const Nav = styled.nav`
  max-width: 100vw;
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
  padding: 0 ${px2rem(16)};
`;

const MainHeader = styled.div`
  max-width: ${px2rem(breakpoints.lm + "px")};
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

const AnimatedIcon = styled.div`
  font-size: 0;
  button {
    border: none;
    background-color: unset;
    cursor: pointer;
    ${flexCenter};
    color: ${colors.white};
    ${typography.bodyM}
  }
  svg {
    margin: ${px2rem(spacing.size2)} 0 ${px2rem(spacing.size2)} ${px2rem(spacing.size2)};
    ${includeMedia(
      "sm",
      css`
        width: ${px2rem(24)};
        height: ${px2rem(27)};
      `
    )}
    width: ${px2rem(30)};
    height: ${px2rem(30)};
    > * {
      fill: ${colors.white};
    }
  }
  a {
    width: inherit;
    height: inherit;
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
  MainHeaderRightWrapper,
  FooterContent,
  FooterFullWidth,
  FooterHalfWidthContent,
  AnimatedIcon
};

export default BaseLayoutStyled;
