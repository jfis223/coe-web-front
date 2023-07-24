import type {ConstructorType} from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

export class StrapiBrand {
    id: string;
    name: string;
    image: StrapiImageSingle;
    logo: StrapiImageSingle;
    link: StrapiLink;

    constructor(input: ConstructorType<StrapiBrand>) {
        this.id = input.id;
        this.name = input.name;
        this.image = input.image;
        this.logo = input.logo;
        this.link = input.link;
    }
}
