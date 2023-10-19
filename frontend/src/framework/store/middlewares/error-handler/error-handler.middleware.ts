import { type AnyAction, type Middleware } from '@reduxjs/toolkit';
import { isRejected } from '@reduxjs/toolkit';

import { actions as appActions } from '~/app/store/app.js';
import { NotificationType } from '~/services/notification/enums/notification-type.enum.js';

import { type store } from '../../store.js';

const errorHandler: Middleware = function () {
  return function (next: typeof store.instance.dispatch) {
    return function (action: AnyAction) {
      const result: unknown = next(action);

      if (isRejected(result) && !result.meta.rejectedWithValue) {
        const message = result.error.message ?? 'Try again later';

        const type = NotificationType.ERROR;

        return next(
          appActions.notify({
            type,
            message,
          }),
        );
      }

      return result;
    };
  };
};

export { errorHandler };
