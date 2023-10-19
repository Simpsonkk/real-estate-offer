import { type AppEnvironment } from '~/bundles/common/enums/enums.js';
import { type ValueOf } from '~/bundles/common/types/types.js';

import { type Config, type EnvironmentSchema } from './types/types.js';

class ConfigBase implements Config {
    public ENV: EnvironmentSchema;

    public constructor() {
        this.ENV = this.envSchema;
    }

    private get envSchema(): EnvironmentSchema {
        return {
            APP: {
                ENVIRONMENT: import.meta.env.VITE_APP_NODE_ENV as ValueOf<
                    typeof AppEnvironment
                >,
            },
            API: {
                ORIGIN_URL: import.meta.env.VITE_APP_API_ORIGIN_URL as string,
            },
        };
    }
}

export { ConfigBase };
