import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {CMSImageItem} from "@/src/core/cms_blocks/domain/models/items/cms_image";

export class CMSIconTextList {
    id: number;
    __component: "blocks.icon-text-list";
    items: CMSIconTextListItem[];

    constructor(input: ConstructorType<CMSIconTextList>) {
        this.id = input.id;
        this.__component = input.__component;
        this.items = input.items;
    }
}

export class CMSIconTextListItem {
    id: number;
    text: string;
    icon: CMSImageItem;

    constructor(input: ConstructorType<CMSIconTextListItem>) {
        this.id = input.id;
        this.text = input.text;
        this.icon = input.icon;
    }
}
