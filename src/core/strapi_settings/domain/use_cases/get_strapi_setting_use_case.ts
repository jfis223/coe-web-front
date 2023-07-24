import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {IStrapiSettingsRepository} from "@/src/core/strapi_settings/domain/interfaces/strapi_settings_repository";

@injectable()
export class GetStrapiSettingUseCase {
    @inject(TYPES.IStrapiSettingsRepository) private readonly provider!: IocProvider<IStrapiSettingsRepository>;

    async execute(store: string, locale: string) {
        const repository = await this.provider();
        return repository.settings(store, locale);
    }
}
