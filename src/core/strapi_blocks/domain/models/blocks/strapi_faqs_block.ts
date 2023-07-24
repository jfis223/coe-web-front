import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

class StrapiFAQ {
    id: number;
    title: string;
    description: string;
    links: StrapiLink[];

    constructor(input: ConstructorType<StrapiFAQ>) {
        this.id = input.id;
        this.title = input.title;
        this.description = input.description;
        this.links = input.links;
    }
}

class StrapiFAQGroup {
    id: number;
    title: string;
    questions: StrapiFAQ[];

    constructor(input: ConstructorType<StrapiFAQGroup>) {
        this.id = input.id;
        this.title = input.title;
        this.questions = input.questions;
    }
}

export class StrapiFAQsBlock {
    id: number;
    __component: "blocks.faqs";
    show: boolean;
    shouldHideWithCountdown: boolean;
    title: string;
    group: StrapiFAQGroup[];

    constructor(input: ConstructorType<StrapiFAQsBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.title = input.title;
        this.group = input.group;
    }
}
