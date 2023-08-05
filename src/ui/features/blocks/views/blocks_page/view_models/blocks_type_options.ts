export const BlocksTypeOptions = [
  "blocks.accordion",
  "blocks.gallery",
  "blocks.icon-text-list",
  "blocks.slider",
  "blocks.team",
  "blocks.text",
  "blocks.video",
  "blocks.clinics",
  "blocks.contact-form",
  "blocks.contact-links",
  "blocks.full-width-image"
] as const;
export type BlocksTypeOptions = (typeof BlocksTypeOptions)[number];
