import type { CMSVideoBlock } from "@/src/core/cms_blocks/domain/models/blocks/cms_video";
import ReactPlayer from "react-player";
import Styled from "./video_block.styled";

export const VideoBlock = ({ video }: CMSVideoBlock) => {
  return (
    <Styled.Wrapper>
      <ReactPlayer url={video.url} width={"100%"} height={"100%"} />
    </Styled.Wrapper>
  );
};
