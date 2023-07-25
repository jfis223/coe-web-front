/* eslint-disable @typescript-eslint/no-explicit-any */
import type {IntlStateViewModel} from "@/src/ui/view_models/intl_state";
import { createStore, useStore } from "zustand";
import { immer } from "zustand/middleware/immer";

export const intlProvider = createStore<IntlStateViewModel>()(
    immer((set) => ({
        locale: 'es',
        setLocale(newLocale: string) {
            set((state) => {
                state.locale = newLocale;
            });
        }
    }))
);

export function useIntlProvider(): IntlStateViewModel;
export function useIntlProvider<T>(selector: (state: IntlStateViewModel) => T, equals?: (a: T, b: T) => boolean): T;
export function useIntlProvider(selector?: any, equals?: any) {
    return useStore(intlProvider, selector, equals);
}
