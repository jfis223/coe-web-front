import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {CMSSettingAttributes} from "@/src/core/cms_settings/domain/models/cms_setting_attributes";

export class CMSSetting {
    id: string;
    attributes: CMSSettingAttributes;


    constructor(input: ConstructorType<CMSSetting>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}
