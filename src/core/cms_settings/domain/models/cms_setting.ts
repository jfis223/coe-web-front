import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {CMSSettingAttributes} from "@/src/core/cms_settings/domain/models/cms_setting_attributes";

export class CMSSettingData {
    id: string;
    attributes: CMSSettingAttributes;


    constructor(input: ConstructorType<CMSSettingData>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}

export class CMSSetting {
    data: CMSSettingData;


    constructor(input: ConstructorType<CMSSetting>) {
        this.data = input.data;
    }
}
