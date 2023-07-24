import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiFormBlock {
    id: number;
    __component: "blocks.form";
    title: string;
    onDoneRedirectLink: string;
    refererUrl: string;
    formTypeKey: string;
    shouldHideWithCountdown: boolean;

    constructor(input: ConstructorType<StrapiFormBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.title = input.title;
        this.onDoneRedirectLink = input.onDoneRedirectLink;
        this.refererUrl = input.refererUrl;
        this.formTypeKey = input.formTypeKey;
    }
}
