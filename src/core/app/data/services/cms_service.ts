import { inject, injectable } from "inversify";
import { RestClient } from "@/src/common/network/rest/rest_client";
import type { IEnvVars } from "@/src/core/app/domain/interfaces/env_vars";
import { TYPES } from "@/src/core/app/ioc/types";
import type { IRestDataSource, RestDataSourceOptions } from "@/src/common/interfaces/rest_data_source";

@injectable()
export class CMSService implements IRestDataSource {
    private readonly cms: RestClient;

    constructor(@inject(TYPES.IEnvVars) envVars: IEnvVars) {
        this.cms = new RestClient(envVars.cmsUrl);
    }

    async get<T = unknown>(url: string, { params }: RestDataSourceOptions = {}): Promise<T> {
        const res = await this.cms.get<T>(url, {
            params
        });
        return res.data;
    }
}
