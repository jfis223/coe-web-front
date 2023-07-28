import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {CMSService} from "@/src/core/app/data/services/cms_service";
import type {CMSSetting} from "@/src/core/cms_settings/domain/models/cms_setting";
import type {ICMSSettingsRepository} from "@/src/core/cms_settings/domain/interfaces/cms_settings_repository";
import {toDomain} from "@/src/common/utils/class-transformer";
import {CMSSettingDataModel} from "@/src/core/cms_settings/data/models/cms_setting_data_model";

@injectable()
export class CMSSettingsRepository implements ICMSSettingsRepository {
    @inject(TYPES.CMSService) private apiServiceProvider!: IocProvider<CMSService>;

    private readonly baseUrl = "/api/setting";

    async settings(): Promise<CMSSetting> {
        const service = await this.apiServiceProvider();
        const response = await service.get<CMSSetting>(`${this.baseUrl}`, {
            params: {
                populate: 'deep'
            }
        });
        return toDomain(CMSSettingDataModel, response);
    }

}
