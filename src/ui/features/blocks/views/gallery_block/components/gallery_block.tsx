import type { CMSGallery } from "@/src/core/cms_blocks/domain/models/blocks/cms_gallery";
import { CldImage } from "next-cloudinary";
import Styled from "./gallery_block.styled";
import PhotoAlbum from "react-photo-album";
import type { RenderPhotoProps } from "react-photo-album";
import { breakpoints } from "@/src/ui/styles/breakpoints";
import { useEffect } from "react";
import { useState } from "react";
import type { Photo } from "react-photo-album";

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
        defaultContainerWidth={breakpoints.ml}
        sizes={{ size: "calc(100vw - 240px)" }}
      />
    </Styled.Wrapper>
  );
};
