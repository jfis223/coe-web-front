import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";

export class StrapiMetadata {
    id: number;
    title: string;
    description: string;
    og_image: StrapiImageSingle;

    constructor(input: ConstructorType<StrapiMetadata>) {
        this.id = input.id;
        this.title = input.title;
        this.description = input.description;
        this.og_image = input.og_image;
    }
}
