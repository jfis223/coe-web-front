/* eslint-disable @typescript-eslint/no-explicit-any */
import type {IsMobileStateViewModel} from "@/src/ui/view_models/is_mobile_state";
import { createStore, useStore } from "zustand";
import { immer } from "zustand/middleware/immer";
import {breakpoints} from "@/src/ui/styles/breakpoints";

export const isMobileProvider = createStore<IsMobileStateViewModel>()(
    immer((set) => ({
        isMobile: false,
        setIsMobile(value: number) {
            set((state) => {
                state.isMobile = value <= breakpoints.sm;
            });
        },
        showMobileMenu: false,
        setShowMobileMenu() {
            set((state) => {
                state.showMobileMenu = !state.showMobileMenu;
            });
        }
    }))
);

export function useIsMobileProvider(): IsMobileStateViewModel;
export function useIsMobileProvider<T>(selector: (state: IsMobileStateViewModel) => T, equals?: (a: T, b: T) => boolean): T;
export function useIsMobileProvider(selector?: any, equals?: any) {
    return useStore(isMobileProvider, selector, equals);
}
