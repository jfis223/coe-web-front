import type {ConstructorType} from "@/src/common/interfaces/constructor_type";
import type {CMSImageEntity} from "@/src/core/cms_blocks/domain/models/items/cms_image";

export class CMSTeamMember {
    id: string;
    attributes: CMSAttributes;

    constructor(input: ConstructorType<CMSTeamMember>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}

export class CMSAttributes {
    name: string;
    position: string;
    biography: string;
    isFounder: boolean;
    image: CMSImageEntity;

    constructor(input: ConstructorType<CMSAttributes>) {
        this.name = input.name;
        this.position = input.position;
        this.biography = input.biography;
        this.isFounder = input.isFounder;
        this.image = input.image;
    }
}
