import type { ConstructorType } from "@/src/common/interfaces/constructor_type";

export class CMSContactLinkItem {
  id: number;
  name: string;
  email: string;

  constructor(input: ConstructorType<CMSContactLinkItem>) {
    this.id = input.id;
    this.name = input.name;
    this.email = input.email;
  }
}

export class CMSContactLinkGroup {
  id: number;
  title: string;
  contactItems: CMSContactLinkItem[];

  constructor(input: ConstructorType<CMSContactLinkGroup>) {
    this.id = input.id;
    this.title = input.title;
    this.contactItems = input.contactItems;
  }
}

export class CMSContactLinks {
  id: number;
  __component: "blocks.contact-links";
  groups: CMSContactLinkGroup[];

  constructor(input: ConstructorType<CMSContactLinks>) {
    this.id = input.id;
    this.__component = input.__component;
    this.groups = input.groups;
  }
}
