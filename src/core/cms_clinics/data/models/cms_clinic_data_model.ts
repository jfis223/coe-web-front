import { Expose, Type } from "class-transformer";
import { CMSClinic } from "@/src/core/cms_clinics/domain/models/cms_clinic";
import { CMSClinicItemAttributesModel } from "@/src/core/cms_clinics/data/models/cms_clinic_attributes_model";

export class CMSClinicDataModel {
  @Expose() id!: string;
  @Expose() @Type(() => CMSClinicItemAttributesModel) attributes!: CMSClinicItemAttributesModel;

  toDomain(): CMSClinic {
    return new CMSClinic({
      id: this.id,
      attributes: this.attributes
    });
  }
}
