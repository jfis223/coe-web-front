import type {CMSSetting} from "@/src/core/cms_settings/domain/models/cms_setting";

export interface ICMSSettingsRepository {
    settings(): Promise<CMSSetting>;
}
