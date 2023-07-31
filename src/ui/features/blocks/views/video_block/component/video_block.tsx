import type { CMSVideoBlock } from "@/src/core/cms_blocks/domain/models/blocks/cms_video";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Styled from "./video_block.styled";

export const VideoBlock = ({ video }: CMSVideoBlock) => {
  return (
    <Styled.Wrapper>
      <ReactPlayer
        url={video.url}
        width={"100%"}
        height={"100%"}
        onReady={() => window.dispatchEvent(new Event("resize"))}
        config={{
          youtube: {
            playerVars: { origin: "https://coe-web-front.vercel.app" }
          }
        }}
      />
    </Styled.Wrapper>
  );
};
