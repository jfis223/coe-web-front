import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiGridItem} from "@/src/core/strapi_blocks/domain/models/items/strapi_grid_item";

export class StrapiMainGridBlock {
    id: number;
    __component: "blocks.main-grid";
    show: boolean;
    shouldHideWithCountdown: boolean;
    alignment: "left" | "right";
    gridColumns: "three_3" | "four_4";
    height: number;
    mobileScroll: boolean;
    items: StrapiGridItem[];

    constructor(input: ConstructorType<StrapiMainGridBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.alignment = input.alignment;
        this.gridColumns = input.gridColumns;
        this.height = input.height;
        this.mobileScroll = input.mobileScroll;
        this.items = input.items;
    }
}
