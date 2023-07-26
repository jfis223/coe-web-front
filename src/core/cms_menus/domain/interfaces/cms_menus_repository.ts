import type {CMSResponse} from "@/src/core/app/domain/models/cms_response";
import type {CMSMenu} from "@/src/core/cms_menus/domain/models/cms_menu";

export interface ICMSMenusRepository {
    getMenuBySlug(slug: string, locale: string): Promise<CMSResponse<CMSMenu>>;
}
