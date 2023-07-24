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

export class StrapiJoiningBenefitsBlock {
    id: number;
    __component: "blocks.joining-benefits";
    show: boolean;
    shouldHideWithCountdown: boolean;
    title: string;
    description: string;
    benefits: StrapiBenefit[];

    constructor(input: ConstructorType<StrapiJoiningBenefitsBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.title = input.title;
        this.description = input.description;
        this.benefits = input.benefits;
    }
}
