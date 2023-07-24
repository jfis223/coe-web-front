import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { EnvVars } from "@/src/core/app/domain/models/env_vars";
import { bindDynamicModule, decorateDep } from "./utils";
import {strapiPagesModule} from "@/src/core/strapi_pages/strapi_page.module";
import {strapiSettingsModule} from "@/src/core/strapi_settings/strapi_setting.module";
import { TagManagerService } from "@front_web_mrmilu/services";

// Third party deps
decorateDep(TagManagerService);
const locator = new Container();
locator.bind(TYPES.IEnvVars).to(EnvVars);
locator.bind<TagManagerService>(TYPES.TagManagerService).to(TagManagerService).inSingletonScope();
bindDynamicModule(TYPES.StrapiService, () => import("../../../core/app/data/services/strapi_service"));
locator.load(strapiPagesModule, strapiSettingsModule);

bindDynamicModule(TYPES.JSONPlaceholderService, () => import("../data/services/json_placeholder_service"));

export { locator };
