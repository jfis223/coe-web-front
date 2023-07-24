import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

export class StrapiMainHeroBlockSlide {
    id: string;
    layout: "bottom" | "left";
    displayCountdown: boolean;
    title: string;
    titleColor: string;
    subtitle: string;
    subtitleColor: string;
    cta: string;
    image: StrapiImageSingle;
    imagePosition: "center" | "bottom";
    imageMobile: StrapiImageSingle;
    buttons: StrapiLink[]

    constructor(input: ConstructorType<StrapiMainHeroBlockSlide>) {
        this.id = input.id;
        this.layout = input.layout;
        this.displayCountdown = input.displayCountdown;
        this.title = input.title;
        this.titleColor = input.titleColor;
        this.subtitle = input.subtitle;
        this.subtitleColor = input.subtitleColor;
        this.cta = input.cta;
        this.image = input.image;
        this.imagePosition = input.imagePosition;
        this.imageMobile = input.imageMobile;
        this.buttons = input.buttons;
    }
}
