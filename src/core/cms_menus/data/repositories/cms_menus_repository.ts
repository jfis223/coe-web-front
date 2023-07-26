import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {CMSService} from "@/src/core/app/data/services/cms_service";
import {CMSResponseDataModel} from "@/src/core/app/data/models/cms_response_data_model";
import type {CMSResponse} from "@/src/core/app/domain/models/cms_response";
import {CMSMenuDataModel} from "@/src/core/cms_menus/data/models/cms_menu_data_model";
import type {CMSData} from "@/src/core/app/data/models/cms_response_data_model";
import type {ICMSMenusRepository} from "@/src/core/cms_menus/domain/interfaces/cms_menus_repository";
import type {CMSMenu} from "@/src/core/cms_menus/domain/models/cms_menu";

@injectable()
export class CMSMenusRepository implements ICMSMenusRepository {
    @inject(TYPES.CMSService) private apiServiceProvider!: IocProvider<CMSService>;

    private readonly baseUrl = "/api/menus";

    async getMenuBySlug(slug: string, locale: string): Promise<CMSResponse<CMSMenu>> {
        const service = await this.apiServiceProvider();
        const response = await service.get<CMSData<CMSMenu>>(`${this.baseUrl}`, {
            params: {
                locale: locale,
                populate: '*'
            }
        });
        return CMSResponseDataModel.create(CMSMenuDataModel, response).toDomain();
    }

}
