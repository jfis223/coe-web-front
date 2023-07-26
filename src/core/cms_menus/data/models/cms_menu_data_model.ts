import { Expose, Type } from "class-transformer";
import {CMSMenuAttributesModel} from "@/src/core/cms_menus/data/models/cms_menu_attributes_model";
import {CMSMenu} from "@/src/core/cms_menus/domain/models/cms_menu";

export class CMSMenuDataModel {
    @Expose() id!: string;
    @Expose() @Type(() => CMSMenuAttributesModel) attributes!: CMSMenuAttributesModel;

    toDomain(): CMSMenu {
        return new CMSMenu({
            id: this.id,
            attributes: this.attributes,
        })
    }
}
