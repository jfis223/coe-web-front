/* eslint-disable @typescript-eslint/no-explicit-any */
import type {SettingsStateViewModel} from "@/src/ui/view_models/settings_state";
import type {Settings} from "@/src/ui/view_models/settings_state";
import { createStore, useStore } from "zustand";
import { immer } from "zustand/middleware/immer";

export const settingsProvider = createStore<SettingsStateViewModel>()(
    immer((set) => ({
        settings: null,
        setSettings(value: Settings) {
            set((state) => {
                state.settings = value;
            });
        }
    }))
);

export function useSettingsProvider(): SettingsStateViewModel;
export function useSettingsProvider<T>(selector: (state: SettingsStateViewModel) => T, equals?: (a: T, b: T) => boolean): T;
export function useSettingsProvider(selector?: any, equals?: any) {
    return useStore(settingsProvider, selector, equals);
}
