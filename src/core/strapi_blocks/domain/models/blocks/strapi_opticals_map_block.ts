import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiOpticalsMapBlock {
    id: number;
    __component: "blocks.opticals-map";
    shouldHideWithCountdown: boolean;
    searchText: string;
    title: string;
    initialZoom: number;
    initialLat: number;
    initialLng: number;
    defaultType: null | "audiology" | "optics" | "clickAndCollect" | "controlMiopia";

    constructor(input: ConstructorType<StrapiOpticalsMapBlock>) {
        this.id = input.id;
        this.__component = input.__component;
        this.shouldHideWithCountdown = input.shouldHideWithCountdown;
        this.searchText = input.searchText;
        this.initialZoom = input.initialZoom;
        this.initialLat = input.initialLat;
        this.initialLng = input.initialLng;
        this.title = input.title;
        this.defaultType = input.defaultType;
    }
}
