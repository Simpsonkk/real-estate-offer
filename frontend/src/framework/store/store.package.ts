import {
  type AnyAction,
  combineReducers,
  type MiddlewareArray,
  type ThunkMiddleware,
} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { reducer as appReducer } from '~/app/store/app.js';
import { authApi, reducer as authReducer } from '~/bundles/auth/store/auth.js';
import {
  estateApi,
  reducer as estateReducer,
} from '~/bundles/estates/store/estate.js';
import { AppEnvironment } from '~/bundles/common/enums/enums.js';
import { type Config } from '~/framework/config/config.js';
import { notification } from '~/services/services.js';

import { errorHandler } from './middlewares/middlewares.js';

type RootReducer = {
  app: ReturnType<typeof appReducer>;
  auth: ReturnType<typeof authReducer>;
  estate: ReturnType<typeof estateReducer>;
};

type ExtraArguments = {
  notification: typeof notification;
  authApi: typeof authApi;
  estateApi: typeof estateApi;
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  estate: estateReducer,
});

class Store {
  public instance: ReturnType<
    typeof configureStore<
      RootReducer,
      AnyAction,
      MiddlewareArray<[ThunkMiddleware<RootReducer, AnyAction, ExtraArguments>]>
    >
  >;

  public constructor(config: Config) {
    this.instance = configureStore({
      devTools: config.ENV.APP.ENVIRONMENT !== AppEnvironment.PRODUCTION,
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => [
        errorHandler,
        ...getDefaultMiddleware({
          thunk: {
            extraArgument: this.extraArguments,
          },
        }),
      ],
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      authApi,
      notification,
      estateApi,
    };
  }
}

export { type RootReducer, Store };
