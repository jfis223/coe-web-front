import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import { px2rem, flexCenter } from "@/src/ui/styles/utils";
import { spacing } from "../../styles/spacing";
import { includeMedia, includeMaxMedia, breakpoints } from "@/src/ui/styles/breakpoints";
import {activeAnimation} from "@/src/ui/styles/animations";
import {typography} from "@/src/ui/styles/typography";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 ${px2rem(spacing.size4)};
    max-width: ${px2rem(breakpoints.ml + 'px')};
    margin: 0 auto;
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

const MainHeaderMobileMenu = styled.div`
  width: ${px2rem(40)};
  height: 100%;
  padding-left: ${px2rem(8)};
  display: flex;
  cursor: pointer;
  ${activeAnimation};
  ${flexCenter};
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

const DesktopLinks = styled.ul`
  ${flexCenter};
  gap: ${px2rem(20)};
  a.underline {
    ${typography.linkM};
    text-decoration: none; 
    color: ${colors.main};
    height: ${px2rem(23)};
    display: grid;
    background:
        linear-gradient(
            to right,
            rgba(100, 200, 200, 0),
            rgba(100, 200, 200, 0)
        ),
        linear-gradient(
            to right,
            rgba(34, 85, 137, 1),
            rgba(125, 173, 221, 1)
        );
    background-size: 100% 3px, 0 3px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
    &:hover {
      background-size: 0 3px, 100% 3px;
    }
  }
`;

const AnimatedIcon = styled.li`
    button {
      border: none;
      background-color: unset;
      padding: unset;
      width: ${px2rem(24)};
      height: ${px2rem(27)};
      cursor: pointer;
    }
    svg {
      width: ${px2rem(24)};
      height: ${px2rem(27)};
      > * {
        fill: ${colors.main};
      }
    }
    a{
      width: inherit;
      height: inherit;
    }
    button:hover,
    a:hover {
      svg:not(#gradient) {
        fill: url(#gradient) ${colors.main};
        transition: fill 1s;
        > * {
          fill: url(#gradient) ${colors.main};
          transition: fill 1s;
        }
      }
    }
`;


const BaseLayoutStyled = {
  Wrapper,
  Footer,
  Nav,
  DesktopLinks,
  AnimatedIcon,
  MainHeader,
  MainHeaderMobileMenu,
  MainHeaderCategories,
  MainLogo,
  MainHeaderRightWrapper
};

export default BaseLayoutStyled;
