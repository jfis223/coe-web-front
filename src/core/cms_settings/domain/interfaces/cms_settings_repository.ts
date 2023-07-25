import type {CMSSetting} from "@/src/core/cms_settings/domain/models/cms_setting";
import type {CMSResponse} from "@/src/core/app/domain/models/cms_response";

export interface ICMSSettingsRepository {
    settings(store: string, locale: string): Promise<CMSResponse<CMSSetting>>;
}
