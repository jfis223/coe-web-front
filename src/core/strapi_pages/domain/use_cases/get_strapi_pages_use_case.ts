import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {IStrapiPagesRepository} from "@/src/core/strapi_pages/domain/interfaces/strapi_pages_repository";

@injectable()
export class GetStrapiPagesUseCase {
    @inject(TYPES.IStrapiPagesRepository) private readonly provider!: IocProvider<IStrapiPagesRepository>;

    async execute() {
        const repository = await this.provider();
        return repository.pages();
    }
}
