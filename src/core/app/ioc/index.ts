import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { EnvVars } from "@/src/core/app/domain/models/env_vars";
import { bindDynamicModule, decorateDep } from "./utils";
import {cmsPagesModule} from "@/src/core/cms_pages/cms_page.module";
import {cmsSettingsModule} from "@/src/core/cms_settings/cms_setting.module";
import { TagManagerService } from "@front_web_mrmilu/services";

// Third party deps
decorateDep(TagManagerService);
const locator = new Container();
locator.bind(TYPES.IEnvVars).to(EnvVars);
locator.bind<TagManagerService>(TYPES.TagManagerService).to(TagManagerService).inSingletonScope();
bindDynamicModule(TYPES.CMSService, () => import("../../../core/app/data/services/cms_service"));
locator.load(cmsPagesModule, cmsSettingsModule);

bindDynamicModule(TYPES.JSONPlaceholderService, () => import("../data/services/json_placeholder_service"));

export { locator };
