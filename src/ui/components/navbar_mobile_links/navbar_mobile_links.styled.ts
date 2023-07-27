import styled from "styled-components";
import {flexCenter, px2rem} from "@/src/ui/styles/utils";
import {typography} from "@/src/ui/styles/typography";
import {colors} from "@/src/ui/styles/colors";

interface Props {
  state: any;
}

const MobileLinks = styled.ul<Props>`
  width: 100%;
  height: calc(100vh - ${px2rem(80)});
  position: fixed;
  left: 0;
  ${flexCenter};
  flex-direction: column;
  gap: ${px2rem(40)};
  z-index: 50;
  background: linear-gradient(171deg, rgba(34,51,137,1) 0%, rgba(34,85,137,1) 100%);
  transition: top 500ms;
  top: ${(props) => props.state === 'entered' ? `${px2rem(80)}` : `calc(-100vh - ${px2rem(80)})`};
  a.underline {
    ${typography.bodyL};
    text-decoration: none; 
    color: ${colors.white};
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

const NavbarMobileLinks = {
  MobileLinks
};

export default NavbarMobileLinks;
