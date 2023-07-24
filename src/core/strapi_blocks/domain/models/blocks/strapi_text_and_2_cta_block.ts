import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

export class StrapiTextAnd2CTAsBlock {
    id: number;
    __component: "blocks.text-and-2-cta";
    show: boolean;
    shouldHideWithCountdown: boolean;
    displayCountdown: boolean;
    title: string;
    isBold: boolean;
    centerTitle: boolean;
    subtitle: string;
    centerSubtitle: boolean;
    content: string;
    buttons: StrapiLink[];

    constructor(input: ConstructorType<StrapiTextAnd2CTAsBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.displayCountdown = input.displayCountdown;
        this.subtitle = input.subtitle;
        this.show = input.show;
        this.title = input.title;
        this.isBold = input.isBold;
        this.centerTitle = input.centerTitle;
        this.centerSubtitle = input.centerSubtitle;
        this.content = input.content;
        this.buttons = input.buttons;
    }
}
