import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";

class StrapiBenefit {
    id: number;
    show: boolean;
    title: string;
    description: string;
    icon: StrapiImageSingle;

    constructor(input: ConstructorType<StrapiBenefit>) {
        this.id = input.id;
        this.show = input.show;
        this.title = input.title;
        this.description = input.description;
        this.icon = input.icon;
    }
}

export class StrapiBenefitsBlock {
    id: number;
    __component: "blocks.benefits";
    show: boolean;
    shouldHideWithCountdown: boolean;
    displayCountdown: boolean;
    title: string;
    backgroundColor: string;
    benefits: StrapiBenefit[];

    constructor(input: ConstructorType<StrapiBenefitsBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.title = input.title;
        this.backgroundColor = input.backgroundColor;
        this.benefits = input.benefits;
        this.displayCountdown = input.displayCountdown;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
    }
}
