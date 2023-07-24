import { css } from "styled-components";

export const activeAnimation = css`
    transition: all ease 250ms;
    &:active {
        transform: scale(0.95);
    }
`
