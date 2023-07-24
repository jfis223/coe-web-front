import type { interfaces } from "inversify";
import { ContainerModule } from "inversify";
import { bindDynamicModule } from "@/src/core/app/ioc/utils";
import { TYPES } from "@/src/core/app/ioc/types";

export const strapiSettingsModule = new ContainerModule((bind: interfaces.Bind) => {
    bindDynamicModule(TYPES.IStrapiSettingsRepository, () => import("./data/repositories/strapi_settings_repository"), bind);
    bindDynamicModule(TYPES.GetStrapiSettingUseCase, () => import("./domain/use_cases/get_strapi_setting_use_case"), bind);
});
