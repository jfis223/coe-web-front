import { Expose, Type } from "class-transformer";
import {CMSSettingAttributesModel} from "@/src/core/cms_settings/data/models/cms_setting_attributes_model";
import {CMSSetting} from "@/src/core/cms_settings/domain/models/cms_setting";

export class CMSSettingDataModel {
    @Expose() id!: string;
    @Expose() @Type(() => CMSSettingAttributesModel) attributes!: CMSSettingAttributesModel;

    toDomain(): CMSSetting {
        return new CMSSetting({
            id: this.id,
            attributes: this.attributes,
        })
    }
}
