import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

class StrapiPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;

    constructor(input: ConstructorType<StrapiPagination>) {
        this.page = input.page;
        this.pageSize = input.pageSize;
        this.pageCount = input.pageCount;
        this.total = input.total;
    }
}

class StrapiMeta {
    pagination: StrapiPagination;

    constructor(input: ConstructorType<StrapiMeta>) {
        this.pagination = input.pagination;
    }
}

export class StrapiResponse<T> {
    data: T[];
    meta: StrapiMeta;

    get hasResults() {
        return this.meta.pagination.total > 0;
    }
    get nextPage() {
        return this.meta.pagination.page < this.meta.pagination.pageCount && this.meta.pagination.page + 1;
    }
    get hasNextPage() {
        return this.meta.pagination.page !== this.meta.pagination.pageCount;
    }

    constructor(input: Omit<ConstructorType<StrapiResponse<T>>, "hasResults" | "nextPage" | "hasNextPage">) {
        this.data = input.data;
        this.meta = input.meta;
    }

    copy() {
        return new StrapiResponse(this);
    }
}
