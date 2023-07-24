import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

export class StrapiJoinContactBlock {
    id: number;
    __component: "blocks.join-contact";
    show: boolean;
    shouldHideWithCountdown: boolean;
    title: string;
    description: string;
    bgColor: string;
    submittedTitle: string;
    submittedDescription: string;
    submittedBackgroundColor: string;
    image: StrapiImageSingle;
    button: StrapiLink;

    constructor(input: ConstructorType<StrapiJoinContactBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.image = input.image;
        this.bgColor = input.bgColor;
        this.submittedTitle = input.submittedTitle;
        this.submittedDescription = input.submittedDescription;
        this.submittedBackgroundColor = input.submittedBackgroundColor;
        this.button = input.button;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.title = input.title;
        this.description = input.description;
    }
}
