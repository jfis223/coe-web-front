import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type { ICMSClinicsRepository } from "@/src/core/cms_clinics/domain/interfaces/cms_clinics_repository";

@injectable()
export class GetCMSClinicsUseCase {
  @inject(TYPES.ICMSClinicsRepository) private readonly provider!: IocProvider<ICMSClinicsRepository>;

  async execute() {
    const repository = await this.provider();
    return repository.clinics();
  }
}
