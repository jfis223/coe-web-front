import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export type FontTypes = "itc" | "neueHaas";

export class StrapiTitleAndDescriptionBlock {
    id: number;
    __component: "blocks.title-and-description";
    show: boolean;
    shouldHideWithCountdown: boolean;
    displayCountdown: boolean;
    title: string;
    titleFont: FontTypes;
    description: string;
    center: boolean;
    centerTitle: boolean;
    centerDescription: boolean;

    constructor(input: ConstructorType<StrapiTitleAndDescriptionBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.displayCountdown = input.displayCountdown;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.titleFont = input.titleFont;
        this.description = input.description;
        this.center = input.center;
        this.show = input.show;
        this.title = input.title;
        this.centerTitle = input.centerTitle;
        this.centerDescription = input.centerDescription;
    }
}
