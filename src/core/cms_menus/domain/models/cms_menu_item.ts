import type {ConstructorType} from "@/src/common/interfaces/constructor_type";

export class CMSMenuItemAttributes {
    order: number;
    title: string;
    url: string;
    target: string | null;
    createdAt: Date;
    updatedAt: Date;

    constructor(input: ConstructorType<CMSMenuItemAttributes>) {
        this.order = input.order;
        this.title = input.title;
        this.url = input.url;
        this.target = input.target;
        this.createdAt = input.createdAt;
        this.updatedAt = input.updatedAt;
    }
}


export class CMSMenuItem {
    id: number;
    attributes: CMSMenuItemAttributes;

    constructor(input: ConstructorType<CMSMenuItem>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}
