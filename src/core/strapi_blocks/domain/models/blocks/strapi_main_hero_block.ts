import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiMainHeroBlockSlide} from "@/src/core/strapi_blocks/domain/models/items/strapi_main_hero_block_slide";

export class StrapiMainHeroBlock {
    id: number;
    __component: "blocks.main-hero";
    show: boolean;
    shouldHideWithCountdown: boolean;
    setSlidesDelayAutoplay: number;
    disableAutoplayOnInteraction: boolean;
    mode: string;
    heightPercentage: number | null;
    maxHeightPx: number;
    url: string | null;
    isDark: boolean;
    slides: StrapiMainHeroBlockSlide[]

    constructor(input: ConstructorType<StrapiMainHeroBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.setSlidesDelayAutoplay = input.setSlidesDelayAutoplay;
        this.disableAutoplayOnInteraction = input.disableAutoplayOnInteraction;
        this.mode = input.mode;
        this.heightPercentage = input.heightPercentage;
        this.maxHeightPx = input.maxHeightPx;
        this.url = input.url;
        this.isDark = input.isDark;
        this.slides = input.slides;
    }
}
