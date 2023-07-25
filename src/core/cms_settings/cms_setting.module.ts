import type { interfaces } from "inversify";
import { ContainerModule } from "inversify";
import { bindDynamicModule } from "@/src/core/app/ioc/utils";
import { TYPES } from "@/src/core/app/ioc/types";

export const cmsSettingsModule = new ContainerModule((bind: interfaces.Bind) => {
    bindDynamicModule(TYPES.ICMSSettingsRepository, () => import("./data/repositories/cms_settings_repository"), bind);
    bindDynamicModule(TYPES.GetCMSSettingUseCase, () => import("./domain/use_cases/get_cms_setting_use_case"), bind);
});
