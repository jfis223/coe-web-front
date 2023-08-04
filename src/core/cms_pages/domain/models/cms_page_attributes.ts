import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type { CMSBlock } from "@/src/core/cms_blocks/domain/models/cms_block";

export class CMSPageAttributes {
  slug: string;
  title: string;
  description: string;
  active: boolean;
  locale: string;
  blocks: CMSBlock[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;

  constructor(input: ConstructorType<CMSPageAttributes>) {
    this.slug = input.slug;
    this.active = input.active;
    this.locale = input.locale;
    this.blocks = input.blocks;
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
    this.publishedAt = input.publishedAt;
    this.title = input.title;
    this.description = input.description;
  }
}
