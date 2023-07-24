export interface StoreStateViewModel {
    store: string;
    setStore(newStore: string): void;
    isValidStore(store: string): boolean;
}
