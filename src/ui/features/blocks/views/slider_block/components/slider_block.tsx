import type { CMSSlider } from "@/src/core/cms_blocks/domain/models/blocks/cms_slider";
import ReactPlayer from "react-player";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CldImage } from "next-cloudinary";
import Styled from "./slider_block.styled";

export const SliderBlock = ({ slides }: CMSSlider) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <Styled.Wrapper>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => {
            return (
              <div className="embla__slide" key={index}>
                <Styled.TextWrapper>
                  <Styled.Title dangerouslySetInnerHTML={{ __html: slide.title }} />
                  <Styled.Subtitle dangerouslySetInnerHTML={{ __html: slide.subtitle ?? "" }} />
                </Styled.TextWrapper>
                <Styled.GradientOverlay />
                {Boolean(slide.image) && (
                  <CldImage
                    src={slide.image.image.data.attributes.url}
                    alt={slide.image.altText}
                    width={slide.image.image.data.attributes.width}
                    height={slide.image.image.data.attributes.height}
                  />
                )}
                {Boolean(slide.video) && <ReactPlayer url={slide.video.url} playing={true} loop={true} controls={false} muted={true} />}
              </div>
            );
          })}
        </div>
      </div>
    </Styled.Wrapper>
  );
};
