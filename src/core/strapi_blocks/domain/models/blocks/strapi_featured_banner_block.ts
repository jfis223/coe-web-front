import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";
import type {StrapiAnalyticsPromotion} from "@/src/core/strapi_blocks/domain/models/items/strapi_analytics_promotion";

export class StrapiFeaturedBannerBlock {
    id: number;
    __component: "blocks.featured-banner";
    showOnTopWhenInCategoryPage: boolean;
    centerText: boolean;
    fullWidthImageBackground: boolean;
    shouldHideWithCountdown: boolean;
    displayCountdown: boolean;
    menuTitle: string;
    description: string;
    title: string;
    subtitle: string;
    backgroundColor: string;
    fontColor: string;
    maxHeightPxDesktop: number | null;
    maxHeightPxMobile: number | null;
    image: StrapiImageSingle;
    buttons: StrapiLink[]
    analyticsPromotion: StrapiAnalyticsPromotion;

    constructor(input: ConstructorType<StrapiFeaturedBannerBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.showOnTopWhenInCategoryPage = input.showOnTopWhenInCategoryPage;
        this.centerText = input.centerText;
        this.fullWidthImageBackground = input.fullWidthImageBackground;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.displayCountdown = input.displayCountdown;
        this.menuTitle = input.menuTitle;
        this.description = input.description;
        this.title = input.title;
        this.subtitle = input.subtitle;
        this.backgroundColor = input.backgroundColor;
        this.maxHeightPxDesktop = input.maxHeightPxDesktop;
        this.maxHeightPxMobile = input.maxHeightPxMobile;
        this.fontColor = input.fontColor;
        this.image = input.image;
        this.buttons = input.buttons;
        this.analyticsPromotion = input.analyticsPromotion;
    }
}
