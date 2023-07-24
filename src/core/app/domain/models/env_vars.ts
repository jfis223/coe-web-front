import type { IEnvVars } from "../interfaces/env_vars";
import { injectable } from "inversify";

@injectable()
export class EnvVars implements IEnvVars {
  strapiUrl: string = process.env.NEXT_PUBLIC_STRAPI_URL
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}`
      : "localhost:1337";

  anotherServiceUrl: string = process.env.NEXT_PUBLIC_ANOTHER_API_URL
    ? `${process.env.NEXT_PUBLIC_ANOTHER_API_URL}${this.isProduction ? "" : "/rest"}`
    : "localhost:3000/rest/";

  get isProduction() {
    return process.env.NODE_ENV === "production";
  }
}
