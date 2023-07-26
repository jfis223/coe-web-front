import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {ICMSMenusRepository} from "@/src/core/cms_menus/domain/interfaces/cms_menus_repository";

@injectable()
export class GetCMSMenuBySlugUseCase {
    @inject(TYPES.ICMSMenusRepository) private readonly provider!: IocProvider<ICMSMenusRepository>;

    async execute(slug: string, locale: string) {
        const repository = await this.provider();
        return repository.getMenuBySlug(slug, locale);
    }
}
