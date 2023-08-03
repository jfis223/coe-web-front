export const BlocksTypeOptions = [
  "blocks.accordion",
  "blocks.gallery",
  "blocks.icon-text-list",
  "blocks.slider",
  "blocks.team",
  "blocks.text",
  "blocks.video",
  "blocks.clinics"
] as const;
export type BlocksTypeOptions = (typeof BlocksTypeOptions)[number];
