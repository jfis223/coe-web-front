import { inject, injectable } from "inversify";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import { TYPES } from "@/src/core/app/ioc/types";
import type { CMSService } from "@/src/core/app/data/services/cms_service";
import { CMSResponseDataModel } from "@/src/core/app/data/models/cms_response_data_model";
import type { CMSResponse } from "@/src/core/app/domain/models/cms_response";
import type { CMSData } from "@/src/core/app/data/models/cms_response_data_model";
import type { ICMSClinicsRepository } from "@/src/core/cms_clinics/domain/interfaces/cms_clinics_repository";
import type { CMSClinic } from "@/src/core/cms_clinics/domain/models/cms_clinic";
import { CMSClinicDataModel } from "@/src/core/cms_clinics/data/models/cms_clinic_data_model";

@injectable()
export class CMSClinicsRepository implements ICMSClinicsRepository {
  @inject(TYPES.CMSService) private apiServiceProvider!: IocProvider<CMSService>;

  private readonly baseUrl = "/api/clinics";

  async clinics(): Promise<CMSResponse<CMSClinic>> {
    const service = await this.apiServiceProvider();
    const response = await service.get<CMSData<CMSClinic>>(`${this.baseUrl}`, {
      params: {
        populate: "*"
      }
    });
    return CMSResponseDataModel.create(CMSClinicDataModel, response).toDomain();
  }
}
