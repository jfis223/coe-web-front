import { Expose, Type} from "class-transformer";
import {StoreModel} from "@/src/core/app/domain/models/store/store";
import type {StoresStrings} from "@/src/core/app/domain/models/store/store_attributes";

class StoreAttributesModel {
    @Expose() store!: StoresStrings;
    @Expose() @Type(() => Date) createdAt!: Date;
    @Expose() @Type(() => Date) updatedAt!: Date;

}

class StoreIdAttributesModel {
    @Expose() id!: number;
    @Expose() @Type(() => StoreAttributesModel) attributes!: StoreAttributesModel;
}

export class StoreDataModel {
    @Expose() @Type(() => StoreIdAttributesModel) data!: StoreIdAttributesModel;

    toDomain() {
        return new StoreModel({
            data: this.data,
        });
    }
}
