import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class CMSImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    ext: string;
    size: number;
    url: string;

    constructor(input: ConstructorType<CMSImageAttributes>) {
        this.name = input.name;
        this.alternativeText = input.alternativeText;
        this.caption = input.caption;
        this.width = input.width;
        this.height = input.height;
        this.ext = input.ext;
        this.size = input.size;
        this.url = input.url;
    }
}


export class CMSImage {
    id: number;
    attributes: CMSImageAttributes;

    constructor(input: ConstructorType<CMSImage>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}


export class CMSImageItem {
    id: number;
    altText: string;
    image: CMSImage;

    constructor(input: ConstructorType<CMSImageItem>) {
        this.id = input.id;
        this.altText = input.altText;
        this.image = input.image;
    }
}

export class CMSImageEntity {
    data: CMSImage[];
    constructor(input: ConstructorType<CMSImageEntity>) {
        this.data = input.data;
    }
}
