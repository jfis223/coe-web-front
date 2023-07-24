import type {ConstructorType} from "@/src/common/interfaces/constructor_type";
import type {StrapiImageSingle} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";
import type {StrapiAnalyticsPromotion} from "@/src/core/strapi_blocks/domain/models/items/strapi_analytics_promotion";
import type {StrapiLink} from "@/src/core/strapi_blocks/domain/models/items/strapi_link";

type GridType = "grid_1x1" | "grid_2x1" | "grid_2x2" | "grid_3x1";

class StrapiGridItemBanner {
    id: string;
    grid: GridType;
    url: string;
    blank: boolean;
    image: StrapiImageSingle;
    analyticsPromotion: StrapiAnalyticsPromotion

    constructor(input: ConstructorType<StrapiGridItemBanner>) {
        this.id = input.id;
        this.grid = input.grid;
        this.url = input.url;
        this.blank = input.blank;
        this.image = input.image;
        this.analyticsPromotion = input.analyticsPromotion;
    }
}

class StrapiGridItemProduct {
    id: number;
    grid: GridType;
    sku: string;

    constructor(input: ConstructorType<StrapiGridItemProduct>) {
        this.id = input.id;
        this.grid = input.grid;
        this.sku = input.sku;
    }
}

class StrapiGridItemService {
    id: number;
    grid: GridType;
    title: string;
    subtitle: string;
    backgroundColor: string | null;
    textColor: string | null;
    background: StrapiImageSingle;
    link: StrapiLink;
    buttons: StrapiLink[];
    analyticsPromotion: StrapiAnalyticsPromotion;

    constructor(input: ConstructorType<StrapiGridItemService>) {
        this.id = input.id;
        this.grid = input.grid;
        this.title = input.title;
        this.subtitle = input.subtitle;
        this.backgroundColor = input.backgroundColor;
        this.textColor = input.textColor;
        this.background = input.background;
        this.link = input.link;
        this.buttons = input.buttons;
        this.analyticsPromotion = input.analyticsPromotion;
    }
}


export class StrapiGridItem {
    id: number;
    product: StrapiGridItemProduct | null;
    service: StrapiGridItemService | null;
    banner: StrapiGridItemBanner | null;

    constructor(input: ConstructorType<StrapiGridItem>) {
        this.id = input.id;
        this.product = input.product;
        this.service = input.service;
        this.banner = input.banner;
    }
}
