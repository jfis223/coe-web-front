// Symbol key should be with the name of the abstraction but the symbol itself should be the name of the implementation

export const TYPES = {
  CMSService: Symbol("CMSService"),
  ICMSPagesRepository: Symbol("ICMSPagesRepository"),
  GetCMSPagesUseCase: Symbol("GetCMSPagesUseCase"),
  ICMSSettingsRepository: Symbol("ICMSSettingsRepository"),
  GetCMSSettingUseCase: Symbol("GetCMSSettingUseCase"),
  GetCMSPageBySlugUseCase: Symbol("GetCMSPageBySlugUseCase"),
  ICMSMenusRepository: Symbol("ICMSMenusRepository"),
  GetCMSMenuBySlugUseCase: Symbol("GetCMSMenuBySlugUseCase"),
  ICMSClinicsRepository: Symbol("ICMSClinicsRepository"),
  GetCMSClinicUseCase: Symbol("GetCMSClinicUseCase"),

  TagManagerService: Symbol("TagManagerService"),
  JSONPlaceholderService: Symbol("JSONPlaceholderService"),
  IEnvVars: Symbol("IEnvVars")
};
