import type {ConstructorType} from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";

export class StrapiStep {
    id: string;
    title: string;
    description: string;
    image: StrapiImageSingle;

    constructor(input: ConstructorType<StrapiStep>) {
        this.id = input.id;
        this.title = input.title;
        this.image = input.image;
        this.description = input.description;
    }
}
