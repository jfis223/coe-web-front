import {Expose, Type} from "class-transformer";

export class CMSMenuItemAttributesModel {
    @Expose() order!: number;
    @Expose() title!: string;
    @Expose() slug!: string;
    @Expose() target!: string;
    @Expose() @Type(() => Date) createdAt!: Date;
    @Expose() @Type(() => Date) updatedAt!: Date;
}

export class CMSMenuItemModel {
    @Expose() id!: number;
    @Expose() @Type(() => CMSMenuItemAttributesModel) attributes!: CMSMenuItemAttributesModel;
}

export class CMSMenuItemDataModel {
    @Expose() @Type(() => CMSMenuItemModel) data!: CMSMenuItemModel[];
}

export class CMSMenuAttributesModel {
    @Expose() title!: string;
    @Expose() slug!: string;
    @Expose() items!: CMSMenuItemDataModel;

    @Expose() @Type(() => Date) createdAt!: Date;
    @Expose() @Type(() => Date) updatedAt!: Date;

}
