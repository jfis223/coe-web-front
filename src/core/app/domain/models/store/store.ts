import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type {StoreData} from "@/src/core/app/domain/models/store/store_data";

export class StoreModel {
    data: StoreData;

    constructor(params: ConstructorType<StoreModel>) {
        this.data = params.data;
    }
}
