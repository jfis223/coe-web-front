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

export interface SettingsStateViewModel {
    settings: Settings | null;
    setSettings(value: Settings): void;
}
