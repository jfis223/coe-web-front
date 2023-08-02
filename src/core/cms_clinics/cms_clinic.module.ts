import type { interfaces } from "inversify";
import { ContainerModule } from "inversify";
import { bindDynamicModule } from "@/src/core/app/ioc/utils";
import { TYPES } from "@/src/core/app/ioc/types";

export const cmsClinicModule = new ContainerModule((bind: interfaces.Bind) => {
  bindDynamicModule(TYPES.ICMSClinicsRepository, () => import("./data/repositories/cms_clinics_repository"), bind);
  bindDynamicModule(TYPES.GetCMSClinicUseCase, () => import("./domain/use_cases/get_cms_clinics_use_case"), bind);
});
