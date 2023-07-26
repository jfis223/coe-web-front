import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {CMSMenuItem} from "@/src/core/cms_menus/domain/models/cms_menu_item";

export class CMSMenuItemsData {
    data: CMSMenuItem[];

    constructor(input: ConstructorType<CMSMenuItemsData>) {
        this.data = input.data;
    }
}

export class CMSMenuAttributes {
    title: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    items: CMSMenuItemsData;

    constructor(input: ConstructorType<CMSMenuAttributes>) {
        this.title = input.title;
        this.slug = input.slug;
        this.createdAt = input.createdAt;
        this.updatedAt = input.updatedAt;
        this.items = input.items;
    }
}


export class CMSMenu {
    id: string;
    attributes: CMSMenuAttributes;

    constructor(input: ConstructorType<CMSMenu>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}
