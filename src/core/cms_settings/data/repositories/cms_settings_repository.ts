import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {CMSService} from "@/src/core/app/data/services/cms_service";
import {CMSResponseDataModel} from "@/src/core/app/data/models/cms_response_data_model";
import type {CMSResponse} from "@/src/core/app/domain/models/cms_response";
import {CMSSettingDataModel} from "@/src/core/cms_settings/data/models/cms_setting_data_model";
import type {CMSSetting} from "@/src/core/cms_settings/domain/models/cms_setting";
import type {CMSData} from "@/src/core/app/data/models/cms_response_data_model";
import type {ICMSSettingsRepository} from "@/src/core/cms_settings/domain/interfaces/cms_settings_repository";

@injectable()
export class CMSSettingsRepository implements ICMSSettingsRepository {
    @inject(TYPES.CMSService) private apiServiceProvider!: IocProvider<CMSService>;

    private readonly baseUrl = "/api/setting";

    async settings(store: string, locale: string): Promise<CMSResponse<CMSSetting>> {
        const service = await this.apiServiceProvider();
        const response = await service.get<CMSData<CMSSetting>>(`${this.baseUrl}`, {
            params: {
                populate: 'deep',
                locale
            }
        });
        return CMSResponseDataModel.create(CMSSettingDataModel, response).toDomain();
    }

}
