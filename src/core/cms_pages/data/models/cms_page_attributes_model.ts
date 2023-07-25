import {Expose, Type} from "class-transformer";
import type {CMSBlock} from "@/src/core/cms_blocks/domain/models/cms_block";

export class CMSPageAttributesModel {
    @Expose() slug!: string;
    @Expose() active!: boolean;
    @Expose() locale!: string;
    @Expose() title!: string;
    @Expose() blocks!: CMSBlock[];

    @Expose() @Type(() => Date) createdAt!: Date;
    @Expose() @Type(() => Date) updatedAt!: Date;
    @Expose() @Type(() => Date) publishedAt!: Date;

}
