import type {ConstructorType} from "@/src/common/interfaces/constructor_type";

class StrapiCustomerGroupAttributes {
    groupId: number;
    label: string;

    constructor(input: ConstructorType<StrapiCustomerGroupAttributes>) {
        this.groupId = input.groupId;
        this.label = input.label;
    }
}

class StrapiCustomerGroup {
    id: number;
    attributes: StrapiCustomerGroupAttributes;

    constructor(input: ConstructorType<StrapiCustomerGroup>) {
        this.id = input.id;
        this.attributes = input.attributes;
    }
}


export class StrapiCustomerGroupField {
    data: StrapiCustomerGroup;

    constructor(input: ConstructorType<StrapiCustomerGroupField>) {
        this.data = input.data;
    }
}
