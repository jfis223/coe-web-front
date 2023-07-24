import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiStep} from "@/src/core/strapi_blocks/domain/models/items/strapi_step";

export class StrapiStepByStepBlock {
    id: number;
    __component: "blocks.step-by-step";
    title: string;
    layout: "column" | "row";
    show: boolean;
    backgroundColor: string;
    shouldHideWithCountdown: boolean;
    steps: StrapiStep[];

    constructor(input: ConstructorType<StrapiStepByStepBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.title = input.title;
        this.layout = input.layout;
        this.backgroundColor = input.backgroundColor;
        this.steps = input.steps;
    }
}
