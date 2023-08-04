import type { ConstructorType } from "@/src/common/interfaces/constructor_type";
import type { CMSVideo } from "@/src/core/cms_blocks/domain/models/items/cms_video";

export class CMSLink {
  id: number;
  text: string;
  showAsButton: boolean;
  targetBlank: boolean;
  link: string;

  constructor(input: ConstructorType<CMSLink>) {
    this.id = input.id;
    this.text = input.text;
    this.showAsButton = input.showAsButton;
    this.targetBlank = input.targetBlank;
    this.link = input.link;
  }
}

export class CMSLinkList {
  id: number;
  links: CMSLink[];
  constructor(input: ConstructorType<CMSLinkList>) {
    this.id = input.id;
    this.links = input.links;
  }
}

export class CMSVideoLinkList {
  id: number;
  video: CMSVideo;
  title: string;
  isMain: boolean;
  constructor(input: ConstructorType<CMSVideoLinkList>) {
    this.id = input.id;
    this.video = input.video;
    this.title = input.title;
    this.isMain = input.isMain;
  }
}
