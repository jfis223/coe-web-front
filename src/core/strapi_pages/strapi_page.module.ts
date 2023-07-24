import type { interfaces } from "inversify";
import { ContainerModule } from "inversify";
import { bindDynamicModule } from "@/src/core/app/ioc/utils";
import { TYPES } from "@/src/core/app/ioc/types";

export const strapiPagesModule = new ContainerModule((bind: interfaces.Bind) => {
    bindDynamicModule(TYPES.IStrapiPagesRepository, () => import("./data/repositories/strapi_pages_repository"), bind);
    bindDynamicModule(TYPES.GetStrapiPagesUseCase, () => import("./domain/use_cases/get_strapi_pages_use_case"), bind);
});
