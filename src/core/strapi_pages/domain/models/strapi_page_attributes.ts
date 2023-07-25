import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiPageBlock} from "@/src/core/strapi_pages/domain/models/strapi_page_blocks";
import type {StrapiMetadata} from "@/src/core/strapi_blocks/domain/models/items/strapi_metadata";
import type {StrapiPublishDate} from "@/src/core/strapi_blocks/domain/models/items/strapi_publish_date";

export class StrapiPageAttributes {
    slug: string;
    active: boolean;
    locale: string;
    blocks: StrapiPageBlock[];
    metaData: StrapiMetadata;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    publishDate: StrapiPublishDate;

    constructor(input: ConstructorType<StrapiPageAttributes>) {
        this.slug = input.slug;
        this.active = input.active;
        this.locale = input.locale;
        this.blocks = input.blocks;
        this.metaData = input.metaData;
        this.createdAt = input.createdAt;
        this.updatedAt = input.updatedAt;
        this.publishedAt = input.publishedAt;
        this.publishDate = input.publishDate;
    }
}
