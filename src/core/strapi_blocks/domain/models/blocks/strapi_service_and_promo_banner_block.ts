import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";
import type {StrapiAnalyticsPromotion} from "@/src/core/strapi_blocks/domain/models/items/strapi_analytics_promotion";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

export class StrapiServiceAndPromoBannerBlock {
    id: number;
    __component: "blocks.service-and-promo-banner";
    shouldHideWithCountdown: boolean;
    displayCountdown: boolean;
    menuTitle: string;
    title: string;
    backgroundColor: string;
    subtitle: string;
    textColor: string;
    image: StrapiImageSingle;
    analyticsPromotion: StrapiAnalyticsPromotion | null;
    buttons: StrapiLink[];

    constructor(input: ConstructorType<StrapiServiceAndPromoBannerBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.displayCountdown = input.displayCountdown;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.menuTitle = input.menuTitle;
        this.backgroundColor = input.backgroundColor;
        this.subtitle = input.subtitle;
        this.textColor = input.textColor;
        this.title = input.title;
        this.image = input.image;
        this.analyticsPromotion = input.analyticsPromotion;
        this.buttons = input.buttons;
    }
}
