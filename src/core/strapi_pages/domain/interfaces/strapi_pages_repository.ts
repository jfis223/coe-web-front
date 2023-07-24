import type {StrapiPage} from "@/src/core/strapi_pages/domain/models/strapi_page";
import type {StrapiResponse} from "@/src/core/app/domain/models/strapi_response";

export interface IStrapiPagesRepository {
    pages(): Promise<StrapiResponse<StrapiPage>>;
}
