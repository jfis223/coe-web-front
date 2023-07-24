import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class StrapiPublishDate {
    id: number;
    date: Date;
    textColor: string;

    constructor(input: ConstructorType<StrapiPublishDate>) {
        this.id = input.id;
        this.date = input.date;
        this.textColor = input.textColor;
    }
}
