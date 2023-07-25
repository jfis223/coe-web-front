import { Expose, Type } from "class-transformer";
import type { DataModel } from "@/src/common/interfaces/data_model";
import type { ClassConstructor } from "class-transformer";
import {toDomain, listToDomain} from "@/src/common/utils/class-transformer";
import {CMSResponse} from "@/src/core/app/domain/models/cms_response";

export interface CMSData<T = unknown> {
    data: T[];
}

class CMSPaginationDataModel {
    @Expose() page!: number;
    @Expose() pageSize!: number;
    @Expose() pageCount!: number;
    @Expose() total!: number;
}

class CMSMetaDataModel {
    @Expose() @Type(() => CMSPaginationDataModel) pagination!: CMSPaginationDataModel;
}

export class CMSResponseDataModel<T> {
    @Expose() data!: DataModel<T>[];
    @Expose() @Type(() => CMSMetaDataModel) meta!: CMSMetaDataModel;

    static create<T>(cls: ClassConstructor<DataModel<T>>, plain: CMSData) {
        plain.data = listToDomain(cls, plain.data);
        return toDomain(CMSResponseDataModel, plain) as CMSResponseDataModel<T>;
    }

    toDomain() {
        return new CMSResponse({
            data: this.data.map((r) => r.toDomain()),
            meta: this.meta
        });
    }
}
