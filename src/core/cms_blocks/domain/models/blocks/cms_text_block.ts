import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class CMSTextBlock {
    id: number;
    __component: "blocks.text";
    title: string;
    body: string;

    constructor(input: ConstructorType<CMSTextBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.title = input.title;
        this.body = input.body;
    }
}
