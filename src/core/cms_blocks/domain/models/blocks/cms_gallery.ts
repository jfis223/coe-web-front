import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {CMSImageItem} from "@/src/core/cms_blocks/domain/models/items/cms_image";

export class CMSGallery {
    id: number;
    __component: "blocks.gallery";
    images: CMSImageItem[];

    constructor(input: ConstructorType<CMSGallery>) {
        this.id = input.id;
        this.__component = input.__component;
        this.images = input.images;
    }
}
