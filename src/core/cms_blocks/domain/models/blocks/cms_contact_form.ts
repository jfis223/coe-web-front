import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class CMSContactForm {
  id: number;
  __component: "blocks.contact-form";
  title: string;

  constructor(input: ConstructorType<CMSContactForm>) {
    this.id = input.id;
    this.__component = input.__component;
    this.title = input.title;
  }
}
