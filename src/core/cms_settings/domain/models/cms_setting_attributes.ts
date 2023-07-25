import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class CMSSettingAttributes {
    contactFormEmail: string;
    whatsappNumber: string;
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    whatsappFrom: string;
    whatsappTo: string;
    locale: string;

    createdAt: Date;
    updatedAt: Date;

    constructor(input: ConstructorType<CMSSettingAttributes>) {
        this.contactFormEmail = input.contactFormEmail;
        this.whatsappNumber = input.whatsappNumber;
        this.primaryColor = input.primaryColor;
        this.secondaryColor = input.secondaryColor;
        this.tertiaryColor = input.tertiaryColor;
        this.whatsappFrom = input.whatsappFrom;
        this.whatsappTo = input.whatsappTo;
        this.locale = input.locale;
        this.createdAt = input.createdAt;
        this.updatedAt = input.updatedAt;
    }
}
