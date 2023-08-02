import type { CMSClinic } from "@/src/core/cms_clinics/domain/models/cms_clinic";
import type { CMSResponse } from "@/src/core/app/domain/models/cms_response";

export interface ICMSClinicsRepository {
  clinics(): Promise<CMSResponse<CMSClinic>>;
}
