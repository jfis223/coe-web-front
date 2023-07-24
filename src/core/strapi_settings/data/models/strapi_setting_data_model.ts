import { Expose, Type } from "class-transformer";
import {StrapiSettingAttributesModel} from "@/src/core/strapi_settings/data/models/strapi_setting_attributes_model";
import {StrapiSetting} from "@/src/core/strapi_settings/domain/models/strapi_setting";

export class StrapiSettingDataModel {
    @Expose() id!: string;
    @Expose() @Type(() => StrapiSettingAttributesModel) attributes!: StrapiSettingAttributesModel;

    toDomain(): StrapiSetting {
        return new StrapiSetting({
            id: this.id,
            attributes: this.attributes,
        })
    }
}
