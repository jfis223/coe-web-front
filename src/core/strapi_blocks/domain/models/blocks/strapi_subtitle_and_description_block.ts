import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {FontTypes} from "@/src/core/strapi_blocks/domain/models/blocks/strapi_title_and_description_block";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

export class StrapiSubtitleAndDescriptionBlock {
    id: number;
    __component: "blocks.subtitle-and-desc";
    shouldHideWithCountdown: boolean;
    displayCountdown: boolean;
    subtitle: string;
    description: string;
    subtitleFont: FontTypes;
    buttons: StrapiLink[];

    constructor(input: ConstructorType<StrapiSubtitleAndDescriptionBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.displayCountdown = input.displayCountdown;
        this.subtitle = input.subtitle;
        this.description = input.description;
        this.subtitleFont = input.subtitleFont;
        this.buttons = input.buttons;
    }
}
