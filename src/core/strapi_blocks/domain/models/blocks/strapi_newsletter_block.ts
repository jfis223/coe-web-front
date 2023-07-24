import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiNewsletterBlock {
    id: number;
    __component: "blocks.newsletter";
    shouldHideWithCountdown: boolean;
    displayCountdown: boolean;
    title: string;
    placeholder: string;
    cta: string;
    show: boolean;
    subtitle: string;

    constructor(input: ConstructorType<StrapiNewsletterBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.displayCountdown = input.displayCountdown;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.placeholder = input.placeholder;
        this.cta = input.cta;
        this.subtitle = input.subtitle;
        this.show = input.show;
        this.title = input.title;
    }
}
