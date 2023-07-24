import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

class StrapiStepOptions {
    id: number;
    title: string;
    description: string;
    links: StrapiLink[];

    constructor(input: ConstructorType<StrapiStepOptions>) {
        this.id = input.id;
        this.title = input.title;
        this.description = input.description;
        this.links = input.links;
    }
}

class StrapiSingleStep {
    id: number;
    heading: string;
    title: string;
    image: StrapiImageSingle;
    links: StrapiLink[];

    constructor(input: ConstructorType<StrapiSingleStep>) {
        this.id = input.id;
        this.title = input.title;
        this.heading = input.heading;
        this.image = input.image;
        this.links = input.links;
    }
}

export class StrapiStepsGuidedBlock {
    id: number;
    __component: "blocks.steps-guided";
    show: boolean;
    shouldHideWithCountdown: boolean;
    steps: StrapiSingleStep[];

    constructor(input: ConstructorType<StrapiStepsGuidedBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.steps = input.steps;
    }
}
