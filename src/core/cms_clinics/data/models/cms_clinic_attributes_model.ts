import { Expose, Type } from "class-transformer";

class CMSLocationDetailsPhotoItemAttributesModel {
  @Expose() url!: string;
  @Expose() width!: number;
  @Expose() height!: number;
  @Expose() html_attributions!: string[];
}

class CMSLocationDetailsAttributesModel {
  @Expose() @Type(() => CMSLocationDetailsPhotoItemAttributesModel) photos!: CMSLocationDetailsPhotoItemAttributesModel[];
}

class CMSLocationDetailsPhonesModel {
  @Expose() id!: number;
  @Expose() phone!: string;
}

class CMSLocationAttributesModel {
  @Expose() lat!: number;
  @Expose() lng!: number;
  @Expose() place_id!: string;
  @Expose() description!: string;
  @Expose() @Type(() => CMSLocationDetailsAttributesModel) details!: CMSLocationDetailsAttributesModel;
}

export class CMSClinicItemAttributesModel {
  @Expose() @Type(() => CMSLocationAttributesModel) location!: CMSLocationAttributesModel;
  @Expose() name!: string;
  @Expose() address!: string;
  @Expose() email!: string;
  @Expose() @Type(() => CMSLocationDetailsPhonesModel) phones!: CMSLocationDetailsPhonesModel[];
  @Expose() @Type(() => Date) createdAt!: Date;
  @Expose() @Type(() => Date) updatedAt!: Date;
}
