export interface Settings {
  contactFormEmail: string;
  whatsappNumber: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  whatsappFrom: string;
  whatsappTo: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CMSClinicLocationDetailsPhoto {
  url: string;
  width: number;
  height: number;
  html_attributions: string[];
}

interface CMSClinicLocationDetails {
  photos: CMSClinicLocationDetailsPhoto[];
}

interface ClinicLocation {
  lat: number;
  lng: number;
  place_id: string;
  description: string;
  details: CMSClinicLocationDetails;
}

interface ClinicPhoneItem {
  id: number;
  phone: string;
}

interface ClinicAttributes {
  location: ClinicLocation;
  name: string;
  address: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  phones: ClinicPhoneItem[];
}

export interface Clinic {
  id: number;
  attributes: ClinicAttributes;
}

export interface SettingsStateViewModel {
  settings: Settings | null;
  setSettings(value: Settings): void;
  clinics: Clinic[] | null;
  setClinics(value: Clinic[]): void;
}
