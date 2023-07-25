import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {CMSPageAttributes} from "@/src/core/cms_pages/domain/models/cms_page_attributes";

export class CMSPage {
    id: string;
    attributes: CMSPageAttributes;

    constructor(input: ConstructorType<CMSPage>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}
