import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiBrand} from "@/src/core/strapi_blocks/domain/models/items/strapi_brand";

export class StrapiBrandsSliderBlock {
    id: number;
    __component: "blocks.brands-slider";
    shouldHideWithCountdown: boolean;
    menuTitle: string;
    title: string;
    brands: StrapiBrand[];

    constructor(input: ConstructorType<StrapiBrandsSliderBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.menuTitle = input.menuTitle;
        this.title = input.title;
        this.brands = input.brands;
    }
}
