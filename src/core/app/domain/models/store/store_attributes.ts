import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import {STORES} from "@/src/common/constants";

const stores = [...STORES] as const;

export type StoresStrings = typeof stores;

export class StoreAttributes {
    store: StoresStrings;
    createdAt: Date;
    updatedAt: Date;

    constructor(params: ConstructorType<StoreAttributes>) {
        this.store = params.store;
        this.createdAt = params.createdAt;
        this.updatedAt = params.updatedAt;
    }
}
