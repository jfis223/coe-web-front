import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {CMSService} from "@/src/core/app/data/services/cms_service";
import type {ICMSPagesRepository} from "@/src/core/cms_pages/domain/interfaces/cms_pages_repository";
import {CMSResponseDataModel} from "@/src/core/app/data/models/cms_response_data_model";
import type {CMSResponse} from "@/src/core/app/domain/models/cms_response";
import type {CMSPage} from "@/src/core/cms_pages/domain/models/cms_page";
import {CMSPageDataModel} from "@/src/core/cms_pages/data/models/cms_page_data_model";
import type {CMSData} from "@/src/core/app/data/models/cms_response_data_model";

@injectable()
export class CMSPagesRepository implements ICMSPagesRepository {
    @inject(TYPES.CMSService) private apiServiceProvider!: IocProvider<CMSService>;

    private readonly baseUrl = "/api/pages";

    async pages(): Promise<CMSResponse<CMSPage>> {
        const service = await this.apiServiceProvider();
        const response = await service.get<CMSData<CMSPage>>(`${this.baseUrl}`, {
            params: {
                populate: 'deep'
            }
        });
        return CMSResponseDataModel.create(CMSPageDataModel, response).toDomain();
    }

}
