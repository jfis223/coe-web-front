import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {CMSImageItem} from "@/src/core/cms_blocks/domain/models/items/cms_image";
import type {CMSVideo} from "@/src/core/cms_blocks/domain/models/items/cms_video";
import type {CMSLink} from "@/src/core/cms_blocks/domain/models/items/cms_link";

export class CMSSlider {
    id: number;
    __component: "blocks.slider";
    slides: CMSSlideItem[];

    constructor(input: ConstructorType<CMSSlider>) {
        this.id = input.id;
        this.__component = input.__component;
        this.slides = input.slides;
    }
}


export class CMSSlideItem {
    id: number;
    video: CMSVideo;
    title: string;
    subtitle?: string;
    image: CMSImageItem;
    link: CMSLink;

    constructor(input: ConstructorType<CMSSlideItem>) {
        this.id = input.id;
        this.video = input.video;
        this.title = input.title;
        this.subtitle = input.subtitle;
        this.image = input.image;
        this.link = input.link;
    }
}
