import {Expose, Type} from "class-transformer";

export class CMSSettingAttributesModel {
    @Expose() contactFormEmail!: string;
    @Expose() whatsappNumber!: string;
    @Expose() primaryColor!: string;
    @Expose() secondaryColor!: string;
    @Expose() tertiaryColor!: string;
    @Expose() whatsappFrom!: string;
    @Expose() whatsappTo!: string;
    @Expose() locale!: string;

    @Expose() @Type(() => Date) createdAt!: Date;
    @Expose() @Type(() => Date) updatedAt!: Date;

}
