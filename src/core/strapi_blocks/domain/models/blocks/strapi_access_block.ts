import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

export class StrapiAccessBlock {
    id: number;
    __component: "blocks.access";
    show: boolean;
    shouldHideWithCountdown: boolean;
    displayCountdown: boolean;
    title: string;
    description: string;
    image: StrapiImageSingle;
    buttons: StrapiLink[];

    constructor(input: ConstructorType<StrapiAccessBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.displayCountdown = input.displayCountdown;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.title = input.title;
        this.description = input.description;
        this.image = input.image;
        this.buttons = input.buttons;
    }
}
