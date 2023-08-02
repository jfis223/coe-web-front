import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import { settingsProvider } from "@/src/ui/providers/settings.provider";
import type { GetCMSClinicsUseCase } from "@/src/core/cms_clinics/domain/use_cases/get_cms_clinics_use_case";

export default async function getCMSClinicsController() {
  const getCMSClinicsUseCase = await locator.get<IocProvider<GetCMSClinicsUseCase>>(TYPES.GetCMSClinicsUseCase)();
  const clinics = await getCMSClinicsUseCase.execute();
  settingsProvider.getState().setClinics(clinics.data);
}
