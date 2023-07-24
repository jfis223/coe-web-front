import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {StrapiService} from "@/src/core/app/data/services/strapi_service";
import type {IStrapiPagesRepository} from "@/src/core/strapi_pages/domain/interfaces/strapi_pages_repository";
import {StrapiResponseDataModel} from "@/src/core/app/data/models/strapi_response_data_model";
import type {StrapiResponse} from "@/src/core/app/domain/models/strapi_response";
import type {StrapiPage} from "@/src/core/strapi_pages/domain/models/strapi_page";
import {StrapiPageDataModel} from "@/src/core/strapi_pages/data/models/strapi_page_data_model";
import type {StrapiData} from "@/src/core/app/data/models/strapi_response_data_model";

@injectable()
export class StrapiPagesRepository implements IStrapiPagesRepository {
    @inject(TYPES.StrapiService) private apiServiceProvider!: IocProvider<StrapiService>;

    private readonly baseUrl = "/api/pages";

    async pages(): Promise<StrapiResponse<StrapiPage>> {
        const service = await this.apiServiceProvider();
        const response = await service.get<StrapiData<StrapiPage>>(`${this.baseUrl}`, {
            params: {
                populate: 'deep'
            }
        });
        return StrapiResponseDataModel.create(StrapiPageDataModel, response).toDomain();
    }

}
