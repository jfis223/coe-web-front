import { Expose, Type } from "class-transformer";
import type { DataModel } from "@/src/common/interfaces/data_model";
import type { ClassConstructor } from "class-transformer";
import {toDomain, listToDomain} from "@/src/common/utils/class-transformer";
import {StrapiResponse} from "@/src/core/app/domain/models/strapi_response";

export interface StrapiData<T = unknown> {
    data: T[];
}

class StrapiPaginationDataModel {
    @Expose() page!: number;
    @Expose() pageSize!: number;
    @Expose() pageCount!: number;
    @Expose() total!: number;
}

class StrapiMetaDataModel {
    @Expose() @Type(() => StrapiPaginationDataModel) pagination!: StrapiPaginationDataModel;
}

export class StrapiResponseDataModel<T> {
    @Expose() data!: DataModel<T>[];
    @Expose() @Type(() => StrapiMetaDataModel) meta!: StrapiMetaDataModel;

    static create<T>(cls: ClassConstructor<DataModel<T>>, plain: StrapiData) {
        plain.data = listToDomain(cls, plain.data);
        return toDomain(StrapiResponseDataModel, plain) as StrapiResponseDataModel<T>;
    }

    toDomain() {
        return new StrapiResponse({
            data: this.data.map((r) => r.toDomain()),
            meta: this.meta
        });
    }
}
