import { forwardRef } from "react";
import type { CMSVideo } from "@/src/core/cms_blocks/domain/models/items/cms_video";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Styled from "./video_modal.styled";

interface VideoModalProps {
  video: CMSVideo;
}

export const VideoModal = forwardRef<HTMLDivElement, VideoModalProps>(({ video }, ref) => {
  return (
    <Styled.Wrapper ref={ref}>
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
});
