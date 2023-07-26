import {locator} from "@/src/core/app/ioc";
import type {IocProvider} from "@/src/core/app/ioc/interfaces";
import type {GetCMSMenuBySlugUseCase} from "@/src/core/cms_menus/domain/use_cases/get_cms_menu_by_slug_use_case";
import {TYPES} from "@/src/core/app/ioc/types";
import {intlProvider} from "@/src/ui/providers/intl.provider";

export default async function getMenuBySlugController(slug: string) {
    const locale = intlProvider.getState().locale;
    const getCMSMenuBySlugUseCase = await locator.get<IocProvider<GetCMSMenuBySlugUseCase>>(TYPES.GetCMSMenuBySlugUseCase)();
    const menu = await getCMSMenuBySlugUseCase.execute(slug, locale);
    return menu.data[0];
}
