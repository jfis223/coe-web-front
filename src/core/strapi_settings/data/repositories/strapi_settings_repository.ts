import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {StrapiService} from "@/src/core/app/data/services/strapi_service";
import {StrapiResponseDataModel} from "@/src/core/app/data/models/strapi_response_data_model";
import type {StrapiResponse} from "@/src/core/app/domain/models/strapi_response";
import {StrapiSettingDataModel} from "@/src/core/strapi_settings/data/models/strapi_setting_data_model";
import type {StrapiSetting} from "@/src/core/strapi_settings/domain/models/strapi_setting";
import type {StrapiData} from "@/src/core/app/data/models/strapi_response_data_model";
import type {IStrapiSettingsRepository} from "@/src/core/strapi_settings/domain/interfaces/strapi_settings_repository";

@injectable()
export class StrapiSettingsRepository implements IStrapiSettingsRepository {
    @inject(TYPES.StrapiService) private apiServiceProvider!: IocProvider<StrapiService>;

    private readonly baseUrl = "/api/settings";

    async settings(store: string, locale: string): Promise<StrapiResponse<StrapiSetting>> {
        const service = await this.apiServiceProvider();
        const response = await service.get<StrapiData<StrapiSetting>>(`${this.baseUrl}`, {
            params: {
                populate: 'deep',
                'filters[$and][0][store][store][$eq]': store,
                locale
            }
        });
        return StrapiResponseDataModel.create(StrapiSettingDataModel, response).toDomain();
    }

}
