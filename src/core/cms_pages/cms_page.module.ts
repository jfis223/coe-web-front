import type { interfaces } from "inversify";
import { ContainerModule } from "inversify";
import { bindDynamicModule } from "@/src/core/app/ioc/utils";
import { TYPES } from "@/src/core/app/ioc/types";

export const cmsPagesModule = new ContainerModule((bind: interfaces.Bind) => {
    bindDynamicModule(TYPES.ICMSPagesRepository, () => import("./data/repositories/cms_pages_repository"), bind);
    bindDynamicModule(TYPES.GetCMSPagesUseCase, () => import("./domain/use_cases/get_cms_pages_use_case"), bind);
});
