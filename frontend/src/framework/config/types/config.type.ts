import { type ConfigBase } from './config-base.type.js';

import { type EnvironmentSchema } from './types.js';

type Config = ConfigBase<EnvironmentSchema>;

export { type Config };
