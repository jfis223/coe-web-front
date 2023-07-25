import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

class CMSPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;

    constructor(input: ConstructorType<CMSPagination>) {
        this.page = input.page;
        this.pageSize = input.pageSize;
        this.pageCount = input.pageCount;
        this.total = input.total;
    }
}

class CMSMeta {
    pagination: CMSPagination;

    constructor(input: ConstructorType<CMSMeta>) {
        this.pagination = input.pagination;
    }
}

export class CMSResponse<T> {
    data: T[];
    meta: CMSMeta;

    get hasResults() {
        return this.meta.pagination.total > 0;
    }
    get nextPage() {
        return this.meta.pagination.page < this.meta.pagination.pageCount && this.meta.pagination.page + 1;
    }
    get hasNextPage() {
        return this.meta.pagination.page !== this.meta.pagination.pageCount;
    }

    constructor(input: Omit<ConstructorType<CMSResponse<T>>, "hasResults" | "nextPage" | "hasNextPage">) {
        this.data = input.data;
        this.meta = input.meta;
    }

    copy() {
        return new CMSResponse(this);
    }
}
