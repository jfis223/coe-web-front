import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class CMSLink {
    id: number;
    text: string;
    showAsButton: boolean;
    targetBlank: boolean;
    link: string;

    constructor(input: ConstructorType<CMSLink>) {
        this.id = input.id;
        this.text = input.text;
        this.showAsButton = input.showAsButton;
        this.targetBlank = input.targetBlank;
        this.link = input.link;
    }
}

export class CMSLinkList {
    id: number;
    links: CMSLink[]
    constructor(input: ConstructorType<CMSLinkList>) {
        this.id = input.id;
        this.links = input.links;
    }
}
