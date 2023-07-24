import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {FontTypes} from "@/src/core/strapi_blocks/domain/models/blocks/strapi_title_and_description_block";
import type {StrapiMultipleImages} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";

export class StrapiPhotoVideoBlock {
    id: number;
    __component: "blocks.photo-video";
    shouldHideWithCountdown: boolean;
    title: string;
    titleFont: FontTypes;
    medias: StrapiMultipleImages;
    mediasMobile: StrapiMultipleImages;

    constructor(input: ConstructorType<StrapiPhotoVideoBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.titleFont = input.titleFont;
        this.medias = input.medias;
        this.mediasMobile = input.mediasMobile;
        this.title = input.title;
    }
}
