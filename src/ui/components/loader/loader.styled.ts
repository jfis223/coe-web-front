import styled from "styled-components";
import { absoluteCenter } from "@/src/ui/styles/utils";

const LoaderStyled = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  svg {
    ${absoluteCenter};
  }

  .st0 {
    stroke-dasharray: 420;
    stroke-dashoffset: 420;
    animation-name: logo;
    animation: logo 1s infinite linear alternate;
    animation-delay: 0.5s;
  }
  @keyframes logo {
    0% {
      stroke-dashoffset: 0;
    }
    20% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 420;
    }
  }
`;

export default LoaderStyled;
