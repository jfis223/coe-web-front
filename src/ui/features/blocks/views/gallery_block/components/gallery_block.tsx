import type { CMSGallery } from "@/src/core/cms_blocks/domain/models/blocks/cms_gallery";
import { CldImage } from "next-cloudinary";
import Styled from "./gallery_block.styled";
import PhotoAlbum from "react-photo-album";
import type { RenderPhotoProps } from "react-photo-album";
import { breakpoints } from "@/src/ui/styles/breakpoints";
import { useEffect } from "react";
import { useState } from "react";
import type { Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const NextJsImage = ({ photo, imageProps: { alt, title, sizes, className, onClick }, wrapperStyle }: RenderPhotoProps) => {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <CldImage
        fill
        src={photo.src}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        onLoad={() => window.dispatchEvent(new Event("resize"))}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
};
export const GalleryBlock = ({ images }: CMSGallery) => {
  const [index, setIndex] = useState(-1);
  const [parsedImages, setParsedImages] = useState<Photo[] | null>(null);
  useEffect(() => {
    const newImages = images.map((image) => {
      return {
        src: image.image.data.attributes.url,
        alt: image.altText,
        width: image.image.data.attributes.width,
        height: image.image.data.attributes.height
      };
    });
    setParsedImages(newImages);
  }, [images]);

  return (
    <Styled.Wrapper>
      <PhotoAlbum
        layout="rows"
        photos={parsedImages ?? []}
        renderPhoto={NextJsImage}
        defaultContainerWidth={breakpoints.lm}
        sizes={{ size: "calc(100vw - 240px)" }}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={parsedImages ?? []}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails]}
      />
    </Styled.Wrapper>
  );
};
