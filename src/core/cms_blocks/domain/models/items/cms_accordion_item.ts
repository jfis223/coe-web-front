import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type { CMSImageItem } from "@/src/core/cms_blocks/domain/models/items/cms_image";
import type { CMSVideoLinkList } from "@/src/core/cms_blocks/domain/models/items/cms_link";

export class CMSAccordionItem {
  id: number;
  content: string;
  uniqueInUruguay: boolean;
  title: string;
  linkList?: CMSVideoLinkList[];
  image?: CMSImageItem;

  constructor(input: ConstructorType<CMSAccordionItem>) {
    this.id = input.id;
    this.content = input.content;
    this.uniqueInUruguay = input.uniqueInUruguay;
    this.title = input.title;
    this.linkList = input.linkList;
    this.image = input.image;
  }
}
