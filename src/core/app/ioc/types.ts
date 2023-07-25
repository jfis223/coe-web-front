// Symbol key should be with the name of the abstraction but the symbol itself should be the name of the implementation

export const TYPES = {
  CMSService: Symbol("CMSService"),
  ICMSPagesRepository: Symbol("ICMSPagesRepository"),
  GetCMSPagesUseCase: Symbol("GetCMSPagesUseCase"),
  ICMSSettingsRepository: Symbol("ICMSSettingsRepository"),
  GetCMSSettingUseCase: Symbol("GetCMSSettingUseCase"),
  GetCMSPageBySlugUseCase: Symbol("GetCMSPageBySlugUseCase"),

  TagManagerService: Symbol("TagManagerService"),
  JSONPlaceholderService: Symbol("JSONPlaceholderService"),
  IEnvVars: Symbol("IEnvVars")
};
