import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiFeaturedProductBlock {
    id: number;
    __component: "blocks.featured-product";
    show: boolean;
    shouldHideWithCountdown: boolean;
    sku: string;

    constructor(input: ConstructorType<StrapiFeaturedProductBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.sku = input.sku;
    }
}
