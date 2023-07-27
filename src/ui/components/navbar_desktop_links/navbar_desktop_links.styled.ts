import styled, {css} from "styled-components";
import {flexCenter, px2rem} from "@/src/ui/styles/utils";
import {typography} from "@/src/ui/styles/typography";
import {colors} from "@/src/ui/styles/colors";
import {includeMedia} from "@/src/ui/styles/breakpoints";

const DesktopLinks = styled.ul`
  ${flexCenter};
  gap: ${px2rem(20)};
  margin-left: ${px2rem(10)};
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
      ${includeMedia("sm", css`
        width: ${px2rem(24)};
        height: ${px2rem(27)};
      `)}
      width: ${px2rem(30)};
      height: ${px2rem(30)};
      cursor: pointer;
    }
    svg {
      ${includeMedia("sm", css`
        width: ${px2rem(24)};
        height: ${px2rem(27)};
      `)}
      width: ${px2rem(30)};
      height: ${px2rem(30)};
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

const DesktopNavbarStyled = {
    DesktopLinks,
    AnimatedIcon
};

export default DesktopNavbarStyled;
