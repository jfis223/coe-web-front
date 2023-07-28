import {locator} from "@/src/core/app/ioc";
import type {IocProvider} from "@/src/core/app/ioc/interfaces";
import {TYPES} from "@/src/core/app/ioc/types";
import {settingsProvider} from "@/src/ui/providers/settings.provider";
import type {GetCMSSettingUseCase} from "@/src/core/cms_settings/domain/use_cases/get_cms_setting_use_case";

export default async function getCMSSettingsController() {
    const getCMSSettingsUseCase = await locator.get<IocProvider<GetCMSSettingUseCase>>(TYPES.GetCMSSettingUseCase)();
    const settings = await getCMSSettingsUseCase.execute();
    settingsProvider.getState().setSettings(settings.data.attributes);
}
