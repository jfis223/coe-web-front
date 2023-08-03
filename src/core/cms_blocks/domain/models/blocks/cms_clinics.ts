import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class CMSClinics {
  id: number;
  __component: "blocks.clinics";
  showMap: boolean;

  constructor(input: ConstructorType<CMSClinics>) {
    this.id = input.id;
    this.__component = input.__component;
    this.showMap = input.showMap;
  }
}
