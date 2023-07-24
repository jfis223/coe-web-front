import type {StrapiSetting} from "@/src/core/strapi_settings/domain/models/strapi_setting";
import type {StrapiResponse} from "@/src/core/app/domain/models/strapi_response";

export interface IStrapiSettingsRepository {
    settings(store: string, locale: string): Promise<StrapiResponse<StrapiSetting>>;
}
