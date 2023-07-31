import styled, { css } from "styled-components";
import { colors } from "@/src/ui/styles/colors";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { typography } from "@/src/ui/styles/typography";
import type { TransitionStatus } from "react-transition-group";
import { includeMedia } from "@/src/ui/styles/breakpoints";

interface TransitionProps {
  state: TransitionStatus;
}

interface Props {
  isOpened: boolean;
}

const AccordionHead = styled.button<Props>`
  background-color: rgba(243, 244, 246, 0.7);
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: black;
  padding: ${px2rem(spacing.size5)} ${px2rem(spacing.size3)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border: 1px solid ${colors.doveGray};
  ${(props) =>
    props.isOpened
      ? css`
          border-top-left-radius: ${px2rem(spacing.size2)};
          border-top-right-radius: ${px2rem(spacing.size2)};
        `
      : css`
          border-radius: ${px2rem(spacing.size2)};
        `}
  span {
    display: table;
    text-align: left;
    font-weight: 600;
    ${typography.bodyM}
  }
  > div {
    display: flex;
    position: relative;
    align-items: center;
    flex-wrap: wrap;
    gap: ${px2rem(spacing.size4)};
  }
`;

const AccordionBody = styled.div<TransitionProps>`
  background-color: rgba(243, 244, 246, 0.7);
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: ${px2rem(spacing.size6)};
  ${includeMedia(
    "ml",
    css`
      flex-direction: row;
    `
  )};
  ${(props) =>
    props.state === "entered"
      ? css`
          height: auto;
          padding: ${px2rem(spacing.size8)} ${px2rem(spacing.size8)};
          border: 1px solid ${colors.doveGray};
          opacity: 1;
          p {
            ${typography.bodyM}
          }
        `
      : css`
          height: 0;
          padding: 0;
          border: unset;
          opacity: 0;
          p {
            font-size: 0;
          }
        `};
  img {
    border: 1px solid ${colors.main};
    border-radius: ${px2rem(spacing.size2)};
    overflow: hidden;
    object-fit: cover;
    max-width: ${px2rem(350)};
    width: 100%;
    ${includeMedia(
      "ml",
      css`
        max-width: unset;
        width: unset;
      `
    )};
  }
  transition: all 500ms ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: ${px2rem(spacing.size2)};
  border-bottom-right-radius: ${px2rem(spacing.size2)};
`;

const Icon = styled.div<Props>`
  width: ${px2rem(24)};
  height: ${px2rem(24)};
  min-width: ${px2rem(24)};
  border-radius: 50%;
  background-color: #e2e2e2;
  position: relative;
  &:after {
    content: "";
    background-color: ${colors.main};
    width: 50%;
    height: ${px2rem(2)};
    font-weight: 600;
    transition: all 0.5s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    ${(props) =>
      !props.isOpened
        ? css`
            transform: translate3d(-50%, -50%, 0) rotate(90deg);
          `
        : css`
            transform: translate3d(-50%, -50%, 0);
          `}
    ${typography.bodyM};
  }
  &:before {
    content: "";
    background-color: ${colors.main};
    width: 50%;
    height: ${px2rem(2)};
    font-weight: 600;
    transition: all 0.5s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    ${(props) =>
      props.isOpened
        ? css`
            transform: translate3d(-50%, -50%, 0);
          `
        : css`
            transform: translate3d(-50%, -50%, 0);
          `}
    ${typography.bodyM}
  }
`;

const Label = styled.div`
  width: auto;
  color: ${colors.white};
  background-color: ${colors.main};
  padding: ${px2rem(spacing.size2)};
  border-radius: ${px2rem(spacing.size2)};
  ${typography.bodyS}
`;

const Content = styled.div`
  p {
    text-align: justify;
    padding-bottom: ${px2rem(spacing.size6)};
    ${typography.bodyM}
  }
  h1,
  h2,
  h3,
  h4,
  strong {
    text-align: justify;
    ${typography.bodyM}
    font-weight: 600;
    margin-bottom: ${px2rem(spacing.size3)};
  }
  br {
    height: ${px2rem(spacing.size3)};
  }
  li {
    margin-left: ${px2rem(spacing.size6)};
    margin-bottom: ${px2rem(spacing.size3)};
    list-style-type: circle;
  }
`;

const AccordionItemStyled = { AccordionHead, AccordionBody, Icon, Label, Content };

export default AccordionItemStyled;
