import type common from "../../../public/locales/es-ES/common.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
    };
  }
}
