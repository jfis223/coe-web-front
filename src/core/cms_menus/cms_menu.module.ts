import type { interfaces } from "inversify";
import { ContainerModule } from "inversify";
import { bindDynamicModule } from "@/src/core/app/ioc/utils";
import { TYPES } from "@/src/core/app/ioc/types";

export const cmsMenuModule = new ContainerModule((bind: interfaces.Bind) => {
    bindDynamicModule(TYPES.ICMSMenusRepository, () => import("./data/repositories/cms_menus_repository"), bind);
    bindDynamicModule(TYPES.GetCMSMenuBySlugUseCase, () => import("./domain/use_cases/get_cms_menu_by_slug_use_case"), bind);
});
