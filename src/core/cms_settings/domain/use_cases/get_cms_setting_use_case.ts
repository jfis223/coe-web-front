import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type {ICMSSettingsRepository} from "@/src/core/cms_settings/domain/interfaces/cms_settings_repository";

@injectable()
export class GetCMSSettingUseCase {
    @inject(TYPES.ICMSSettingsRepository) private readonly provider!: IocProvider<ICMSSettingsRepository>;

    async execute(store: string, locale: string) {
        const repository = await this.provider();
        return repository.settings(store, locale);
    }
}
