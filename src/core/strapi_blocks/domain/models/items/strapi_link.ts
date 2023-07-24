import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiLink {
    id: number;
    text?: string;
    title?: string;
    url: string;
    blank: boolean;
    styleColor?: "black" | "white";
    requestAppointment?: boolean;

    constructor(input: ConstructorType<StrapiLink>) {
        this.id = input.id;
        this.text = input.text;
        this.title = input.title;
        this.url = input.url;
        this.blank = input.blank;
        this.styleColor = input.styleColor;
        this.requestAppointment = input.requestAppointment;
    }
}
