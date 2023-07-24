export type colorsType =
  | "white"
  | "codGray"
  | "scarpaFlow"
  | "doveGray"
  | "jumbo"
  | "dustyGray"
  | "bombay"
  | "alto"
  | "gallery"
  | "catskillWhite"
  | "black"
  | "azureRadiance"
  | "bondiBlue"
  | "bridalHeath"
  | "cinnabar"
  | "fog"
  | "pattensBlue"
  | "romance"
  | "springWood"
  | "tanHide"
  | "alabaster30Alpha"
  | "cinderella20Alpha"
  | "mercury30Alpha"
  | "pampas"
  | "conch";

export const colors: Record<colorsType, string> = {
  // basic
  black: '#000000',
  codGray: '#1A1A1A',
  scarpaFlow: "#5D5D5E",
  doveGray: '#737373',
  jumbo: "#828283",
  dustyGray: "#999999",
  bombay:'#B4B4B6',
  alto: "#D9D9D9",
  gallery: "#EDEDED",
  catskillWhite: "#F5F8FA",
  pampas: "#FCFBFA",
  white: "#FFF",

  // colors
  azureRadiance: "#0084FF",
  bondiBlue: "#0092BC",
  bridalHeath: '#FFFBF6',
  cinnabar: "#EC4A4A",
  fog: "#DEDDFE",
  pattensBlue: "#E1F4FF",
  romance: "#FFFDFB",
  springWood: "#F7F3EF",
  tanHide: "#F8A85F",
  conch: "#D7DDDA",

  // colors with Alpha
  alabaster30Alpha: '#FBFBFB4D',
  cinderella20Alpha: "#FDECDD33",
  mercury30Alpha: '#E5E5E54D',
};
