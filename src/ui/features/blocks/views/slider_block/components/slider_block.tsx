import type {CMSSlider} from "@/src/core/cms_blocks/domain/models/blocks/cms_slider";
import useEmblaCarousel from 'embla-carousel-react';
import { CldImage } from 'next-cloudinary';

export const SliderBlock = ({slides}: CMSSlider) => {
    const [emblaRef] = useEmblaCarousel();
    console.log(slides[0].image.image.data.attributes.url)
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {
                    slides.map((slide, index) => {
                        return  (
                            <CldImage
                                key={index}
                                src={slide.image.image.data.attributes.url}
                                alt={slide.image.altText}
                                width={1000}
                                height={1000}
                            />
                        )

                    })
                }
            </div>
        </div>
    )
}
