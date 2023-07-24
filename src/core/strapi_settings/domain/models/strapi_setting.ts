import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import {StrapiSettingAttributes} from "@/src/core/strapi_settings/domain/models/strapi_setting_attributes";

export class StrapiSetting {
    id: string;
    attributes: StrapiSettingAttributes;


    constructor(input: ConstructorType<StrapiSetting>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}
