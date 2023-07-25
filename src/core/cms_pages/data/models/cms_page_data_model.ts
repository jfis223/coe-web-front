import { Expose, Type } from "class-transformer";
import {CMSPage} from "@/src/core/cms_pages/domain/models/cms_page";
import {CMSPageAttributesModel} from "@/src/core/cms_pages/data/models/cms_page_attributes_model";

export class CMSPageDataModel {
    @Expose() id!: string;
    @Expose() @Type(() => CMSPageAttributesModel) attributes!: CMSPageAttributesModel;

    toDomain(): CMSPage {
        return new CMSPage({
            id: this.id,
            attributes: this.attributes,
        })
    }
}
