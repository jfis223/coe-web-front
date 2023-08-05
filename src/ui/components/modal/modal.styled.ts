import styled from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { colors } from "../../styles/colors";
import { IconButton } from "@/src/ui/components/icon_button/icon_button";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0 0 0 / 85%);
  width: 100%;
  height: 100%;
  z-index: 9;
  > div {
    position: relative;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 900;
  min-height: ${px2rem(100)};
  padding: ${px2rem(16)};
  background-color: ${colors.white};
  pointer-events: all;
  max-width: 700px;
`;

const CloseBtn = styled(IconButton)`
  position: absolute;
  top: -10px;
  right: -10px;
  svg {
    * {
      fill: ${colors.white};
      stroke: ${colors.white};
    }
  }
  background-color: ${colors.main};
  &:hover {
    background-color: ${colors.main};
  }
`;

const CloseBtnAlt = styled(IconButton)`
  align-self: flex-end;
`;

const ModalStyled = {
  Wrapper,
  Content,
  CloseBtn,
  CloseBtnAlt
};

export default ModalStyled;
