import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiCustomerGroupField} from "@/src/core/strapi_blocks/domain/models/items/strapi_customer_group";

export class StrapiRegisterBlock {
    id: number;
    __component: "blocks.register";
    show: boolean;
    shouldHideWithCountdown: boolean;
    displayCountdown: boolean;
    title: string;
    customer_group: StrapiCustomerGroupField;

    constructor(input: ConstructorType<StrapiRegisterBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.show = input.show;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.displayCountdown = input.displayCountdown;
        this.title = input.title;
        this.customer_group = input.customer_group;
    }
}
