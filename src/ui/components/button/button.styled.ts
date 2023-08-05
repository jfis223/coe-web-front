import styled from "styled-components";
import { colors } from "../../styles/colors";
import type { ButtonProps } from "@/src/ui/components/button/button";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";

const Wrapper = styled.button<ButtonProps>`
  height: ${px2rem(50)};
  border: none;
  outline: none;
  color: ${colors.white};
  background-color: ${(props) => (props.disabled ? colors.gray : colors.main)};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: ${px2rem(10)};
  padding: 0 ${px2rem(spacing.size4)};

  &:before {
    content: "";
    background: linear-gradient(45deg, ${colors.main}, ${colors.secondary}, ${colors.variant});
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + ${px2rem(4)});
    height: calc(100% + ${px2rem(4)});
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: ${px2rem(10)};
  }

  &:active {
    color: ${colors.white};
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${colors.main};
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

const ButtonStyled = {
  Wrapper
};

export default ButtonStyled;
