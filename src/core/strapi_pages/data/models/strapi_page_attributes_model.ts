import {Expose, Type} from "class-transformer";
import {StoreDataModel} from "@/src/core/app/data/models/store_data_model";
import type {StrapiPageBlock} from "@/src/core/strapi_pages/domain/models/strapi_page_blocks";
import {StrapiMetadata} from "@/src/core/strapi_blocks/domain/models/items/strapi_metadata";
import {StrapiPublishDate} from "@/src/core/strapi_blocks/domain/models/items/strapi_publish_date";

export class StrapiPageAttributesModel {
    @Expose() slug!: string;
    @Expose() active!: boolean;
    @Expose() locale!: string;
    @Expose() @Type(() => StoreDataModel) store!: StoreDataModel;
    @Expose() blocks!: StrapiPageBlock[];
    @Expose() @Type(() => StrapiMetadata) metaData!: StrapiMetadata;

    @Expose() @Type(() => Date) createdAt!: Date;
    @Expose() @Type(() => Date) updatedAt!: Date;
    @Expose() @Type(() => Date) publishedAt!: Date;
    @Expose() @Type(() => StrapiPublishDate) publishDate!: StrapiPublishDate;

}
