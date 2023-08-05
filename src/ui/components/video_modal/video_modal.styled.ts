import styled from "styled-components";
import { px2rem } from "@/src/ui/styles/utils";
import { spacing } from "@/src/ui/styles/spacing";
import { colors } from "@/src/ui/styles/colors";

const Wrapper = styled.section`
  width: 80vw;
  max-width: 100vw;
  margin: ${px2rem(spacing.size5)};
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${px2rem(spacing.size2)};
  iframe {
    aspect-ratio: 16 / 9;
    border: 1px solid ${colors.main};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: ${px2rem(spacing.size5)};
  }
`;

const VideoModalStyled = { Wrapper };

export default VideoModalStyled;
