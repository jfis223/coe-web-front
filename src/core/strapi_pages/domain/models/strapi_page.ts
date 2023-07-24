import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiPageAttributes} from "@/src/core/strapi_pages/domain/models/strapi_page_attributes";

export class StrapiPage {
    id: string;
    attributes: StrapiPageAttributes;

    constructor(input: ConstructorType<StrapiPage>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}
