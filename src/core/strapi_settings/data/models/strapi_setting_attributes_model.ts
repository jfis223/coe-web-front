import {Expose, Type} from "class-transformer";
import {StoreDataModel} from "@/src/core/app/data/models/store_data_model";

export class StrapiSettingAttributesModel {
    @Expose() locale!: string;
    @Expose() defaultLocale!: string;
    @Expose() @Type(() => StoreDataModel) store!: StoreDataModel;

    @Expose() @Type(() => Date) createdAt!: Date;
    @Expose() @Type(() => Date) updatedAt!: Date;
    @Expose() @Type(() => Date) publishedAt!: Date;

}
