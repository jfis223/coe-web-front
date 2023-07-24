import { Expose, Type } from "class-transformer";
import {StrapiPage} from "@/src/core/strapi_pages/domain/models/strapi_page";
import {StrapiPageAttributesModel} from "@/src/core/strapi_pages/data/models/strapi_page_attributes_model";

export class StrapiPageDataModel {
    @Expose() id!: string;
    @Expose() @Type(() => StrapiPageAttributesModel) attributes!: StrapiPageAttributesModel;

    toDomain(): StrapiPage {
        return new StrapiPage({
            id: this.id,
            attributes: this.attributes,
        })
    }
}
