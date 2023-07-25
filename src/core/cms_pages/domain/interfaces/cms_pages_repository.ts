import type {CMSPage} from "@/src/core/cms_pages/domain/models/cms_page";
import type {CMSResponse} from "@/src/core/app/domain/models/cms_response";

export interface ICMSPagesRepository {
    pages(): Promise<CMSResponse<CMSPage>>;
    getPageBySlug(slug: string, locale: string): Promise<CMSResponse<CMSPage>>;
}
