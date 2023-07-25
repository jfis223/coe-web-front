import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {ICMSPagesRepository} from "@/src/core/cms_pages/domain/interfaces/cms_pages_repository";

@injectable()
export class GetCMSPageBySlugUseCase {
    @inject(TYPES.ICMSPagesRepository) private readonly provider!: IocProvider<ICMSPagesRepository>;

    async execute(slug: string, locale: string) {
        const repository = await this.provider();
        return repository.getPageBySlug(slug, locale);
    }
}
