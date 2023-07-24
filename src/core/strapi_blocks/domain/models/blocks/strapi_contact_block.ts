import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

export class StrapiContactBlock {
    id: number;
    __component: "blocks.contact";
    show: boolean;
    shouldHideWithCountdown: boolean;
    button: StrapiLink;

    constructor(input: ConstructorType<StrapiContactBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.show = input.show;
        this.button = input.button;
    }
}
