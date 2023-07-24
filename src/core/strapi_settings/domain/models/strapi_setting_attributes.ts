import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StoreModel} from "@/src/core/app/domain/models/store/store";

export class StrapiSettingAttributes {
    locale: string;
    defaultLocale: string;
    store: StoreModel;

    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;

    constructor(input: ConstructorType<StrapiSettingAttributes>) {
        this.store = input.store;
        this.defaultLocale = input.defaultLocale;
        this.locale = input.locale;
        this.createdAt = input.createdAt;
        this.updatedAt = input.updatedAt;
        this.publishedAt = input.publishedAt;
    }
}
