// Symbol key should be with the name of the abstraction but the symbol itself should be the name of the implementation

export const TYPES = {
  StrapiService: Symbol("StrapiService"),
  IStrapiPagesRepository: Symbol("IStrapiPagesRepository"),
  GetStrapiPagesUseCase: Symbol("GetStrapiPagesUseCase"),
  IStrapiSettingsRepository: Symbol("IStrapiSettingsRepository"),
  GetStrapiSettingUseCase: Symbol("GetStrapiSettingUseCase"),

  MockService: Symbol("MockService"),
  TagManagerService: Symbol("TagManagerService"),
  JSONPlaceholderService: Symbol("JSONPlaceholderService"),
  IEnvVars: Symbol("IEnvVars"),
  IPostsRepository: Symbol("IPostsRepository"),
  IUsersRepository: Symbol("IUsersRepository"),
  GetUsersUseCase: Symbol("GetUsersUseCase"),
  GetPostsUseCase: Symbol("GetPostsUseCase"),
  CretePostUseCase: Symbol("CretePostUseCase")
};
