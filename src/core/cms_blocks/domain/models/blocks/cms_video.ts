import type {ConstructorType} from "@/src/common/interfaces/constructor_type";
import type {CMSVideo} from "@/src/core/cms_blocks/domain/models/items/cms_video";

export class CMSVideoBlock {
    id: number;
    __component: "blocks.video";
    video: CMSVideo;

    constructor(input: ConstructorType<CMSVideoBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.video = input.video;
    }
}
