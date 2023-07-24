import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StoreAttributes} from "@/src/core/app/domain/models/store/store_attributes";

export class StoreData {
    id: number;
    attributes: StoreAttributes;

    constructor(params: ConstructorType<StoreData>) {
        this.id = params.id;
        this.attributes = params.attributes;
    }
}
