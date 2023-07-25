export type colorsType =
  | "white"
  | "black"
  | "codGray"
  | "scarpaFlow"
  | "doveGray"
  | "main"
  | "secondary"
  | "variant"

export const colors: Record<colorsType, string> = {
  // basic
  black: '#000000',
  codGray: '#1A1A1A',
  scarpaFlow: "#5D5D5E",
  doveGray: '#737373',

  // colors
  main: "#225589",
  secondary: "#228A60",
  variant: "#7DADDD",
  white: "#ffffff"
};
