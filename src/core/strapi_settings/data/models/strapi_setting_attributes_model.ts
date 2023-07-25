import {Expose, Type} from "class-transformer";

export class StrapiSettingAttributesModel {
    @Expose() locale!: string;
    @Expose() defaultLocale!: string;

    @Expose() @Type(() => Date) createdAt!: Date;
    @Expose() @Type(() => Date) updatedAt!: Date;
    @Expose() @Type(() => Date) publishedAt!: Date;

}
