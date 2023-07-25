import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiSettingAttributes {
    locale: string;
    defaultLocale: string;

    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;

    constructor(input: ConstructorType<StrapiSettingAttributes>) {
        this.defaultLocale = input.defaultLocale;
        this.locale = input.locale;
        this.createdAt = input.createdAt;
        this.updatedAt = input.updatedAt;
        this.publishedAt = input.publishedAt;
    }
}
