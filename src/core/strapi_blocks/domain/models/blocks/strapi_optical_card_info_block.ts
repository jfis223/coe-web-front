import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StrapiImageItem} from "@/src/core/strapi_blocks/domain/models/items/strapi_image";

class StrapiSchedule {
    id: number;
    text: string;

    constructor(input: ConstructorType<StrapiSchedule>) {
        this.id = input.id;
        this.text = input.text;
    }
}

export class StrapiOpticalCardInfoBlock {
    id: number;
    __component: "blocks.optical-card-info";
    title: string;
    address: string;
    lat: string;
    long: string;
    storelocator_id: string;
    phone: string;
    email: string;
    service_optical: boolean;
    service_audiology: boolean;
    service_clickandcollect: boolean;
    images: StrapiImageItem[];
    schedule: StrapiSchedule[];

    constructor(input: ConstructorType<StrapiOpticalCardInfoBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.title = input.title;
        this.address = input.address;
        this.lat = input.lat;
        this.long = input.long;
        this.storelocator_id = input.storelocator_id;
        this.phone = input.phone;
        this.email = input.email;
        this.service_optical = input.service_optical;
        this.service_audiology = input.service_audiology;
        this.service_clickandcollect = input.service_clickandcollect;
        this.images = input.images;
        this.schedule = input.schedule;
    }
}
