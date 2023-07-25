import type {ConstructorType} from "@/src/common/interfaces/constructor_type";

export class CMSVideo {
    url: string;
    provider: string;
    providerUid: string;

    constructor(input: ConstructorType<CMSVideo>) {
        this.url = input.url;
        this.provider = input.provider;
        this.providerUid = input.providerUid;
    }
}
