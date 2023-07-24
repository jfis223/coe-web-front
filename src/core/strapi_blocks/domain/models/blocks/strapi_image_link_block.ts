import type {ConstructorType} from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";

export class StrapiImageLinkBlock {
    id: number;
    __component: "blocks.image-link";
    show: boolean;
    shouldHideWithCountdown: boolean;
    url: string;
    isHeroSize: boolean;
    image: StrapiImageSingle;

    constructor(input: ConstructorType<StrapiImageLinkBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.url = input.url;
        this.isHeroSize = input.isHeroSize;
        this.image = input.image;
    }
}
