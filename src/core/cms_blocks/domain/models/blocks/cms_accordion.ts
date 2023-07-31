import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type { CMSAccordionItem } from "@/src/core/cms_blocks/domain/models/items/cms_accordion_item";

export class CMSAccordion {
  id: number;
  __component: "blocks.accordion";
  title: string;
  items: CMSAccordionItem[];

  constructor(input: ConstructorType<CMSAccordion>) {
    this.id = input.id;
    this.__component = input.__component;
    this.title = input.title;
    this.items = input.items;
  }
}
