import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    ext: string;
    size: number;
    url: string;

    constructor(input: ConstructorType<StrapiImageAttributes>) {
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


export class StrapiImage {
    id: number;
    attributes: StrapiImageAttributes;

    constructor(input: ConstructorType<StrapiImage>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}


export class StrapiImageSingle {
    data: StrapiImage;

    constructor(input: ConstructorType<StrapiImageSingle>) {
        this.data = input.data;
    }
}

export class StrapiMultipleImages {
    data: StrapiImage[];

    constructor(input: ConstructorType<StrapiMultipleImages>) {
        this.data = input.data;
    }
}


export class StrapiImageItem {
    id: string;
    image: StrapiImageSingle;

    constructor(input: ConstructorType<StrapiImageItem>) {
        this.id = input.id;
        this.image = input.image;
    }
}

