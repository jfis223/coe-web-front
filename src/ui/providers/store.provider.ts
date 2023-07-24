/* eslint-disable @typescript-eslint/no-explicit-any */
import type {StoreStateViewModel} from "@/src/ui/view_models/store_state";
import { createStore, useStore } from "zustand";
import { immer } from "zustand/middleware/immer";
import {DEFAULT_STORE, STORES} from "@/src/common/constants";

export const storeProvider = createStore<StoreStateViewModel>()(
    immer((set) => ({
        store: DEFAULT_STORE,
        setStore(newStore: string) {
            set((state) => {
                state.store = newStore;
            });
        },
        isValidStore(store: string) {
            return STORES.includes(store)
        }
    }))
);

export function useStoreProvider(): StoreStateViewModel;
export function useStoreProvider<T>(selector: (state: StoreStateViewModel) => T, equals?: (a: T, b: T) => boolean): T;
export function useStoreProvider(selector?: any, equals?: any) {
    return useStore(storeProvider, selector, equals);
}
