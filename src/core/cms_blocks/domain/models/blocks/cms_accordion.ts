import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class CMSAccordion {
    id: number;
    __component: "blocks.accordion";
    title: string;
    items: string;

    constructor(input: ConstructorType<CMSAccordion>) {
        this.id = input.id;
        this.__component = input.__component;
        this.title = input.title;
        this.items = input.items;
    }
}
