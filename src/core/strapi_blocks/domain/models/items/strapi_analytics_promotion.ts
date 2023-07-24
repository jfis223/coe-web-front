import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiAnalyticsPromotion {
    id: number;
    PromotionId?: string;
    PromotionName?: string;

    constructor(input: ConstructorType<StrapiAnalyticsPromotion>) {
        this.id = input.id;
        this.PromotionId = input.PromotionId;
        this.PromotionName = input.PromotionName;
    }
}
