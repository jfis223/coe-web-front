import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type { CMSImageItem } from "@/src/core/cms_blocks/domain/models/items/cms_image";

export class CMSFullWidthImage {
  id: number;
  __component: "blocks.full-width-image";
  image: CMSImageItem;

  constructor(input: ConstructorType<CMSFullWidthImage>) {
    this.id = input.id;
    this.__component = input.__component;
    this.image = input.image;
  }
}
