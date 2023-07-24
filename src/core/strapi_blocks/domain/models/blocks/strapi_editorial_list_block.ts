import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiEditorialListBlock {
    id: number;
    __component: "blocks.editorial-list";
    show: boolean;
    shouldHideWithCountdown: boolean;

    constructor(input: ConstructorType<StrapiEditorialListBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
    }
}
