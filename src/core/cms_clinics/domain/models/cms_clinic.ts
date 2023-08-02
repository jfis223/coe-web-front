import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

class CMSClinicLocationDetailsPhotoItem {
  url: string;
  width: number;
  height: number;
  html_attributions: string[];

  constructor(input: ConstructorType<CMSClinicLocationDetailsPhotoItem>) {
    this.url = input.url;
    this.width = input.width;
    this.height = input.height;
    this.html_attributions = input.html_attributions;
  }
}

class CMSClinicLocationDetails {
  photos: CMSClinicLocationDetailsPhotoItem[];

  constructor(input: ConstructorType<CMSClinicLocationDetails>) {
    this.photos = input.photos;
  }
}

class CMSClinicLocation {
  lat: number;
  lng: number;
  place_id: string;
  description: string;
  details: CMSClinicLocationDetails;

  constructor(input: ConstructorType<CMSClinicLocation>) {
    this.lat = input.lat;
    this.lng = input.lng;
    this.place_id = input.place_id;
    this.description = input.description;
    this.details = input.details;
  }
}

class CMSClinicPhone {
  id: number;
  phone: string;

  constructor(input: ConstructorType<CMSClinicPhone>) {
    this.id = input.id;
    this.phone = input.phone;
  }
}

class CMSClinicAttributes {
  name: string;
  address: string;
  email: string;
  phones: CMSClinicPhone[];
  location: CMSClinicLocation;
  createdAt: Date;
  updatedAt: Date;

  constructor(input: ConstructorType<CMSClinicAttributes>) {
    this.name = input.name;
    this.address = input.address;
    this.email = input.email;
    this.phones = input.phones;
    this.location = input.location;
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
  }
}

export class CMSClinic {
  id: string;
  attributes: CMSClinicAttributes;

  constructor(input: ConstructorType<CMSClinic>) {
    this.id = input.id;
    this.attributes = input.attributes;
  }
}
