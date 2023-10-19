import '~/assets/css/styles.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  App,
  ProtectedRoute,
  RouterProvider,
  StoreProvider,
} from '~/bundles/common/components/components.js';

import { AppRoute } from './bundles/common/enums/enums.js';
import { store } from './framework/store/store.js';
import { Main } from './bundles/main/pages/main.js';
import { SignIn } from './bundles/auth/pages/sign-in/sign-in.js';
import { SignUp } from './bundles/auth/pages/sign-up/sign-up.js';
import { PublicRoute } from './bundles/common/components/public-route/public-route.js';
import { Estates } from './bundles/estates/pages/estates/estates.js';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <StoreProvider store={store.instance}>
      <RouterProvider
        routes={[
          {
            path: AppRoute.ROOT,
            element: <App />,
            children: [
              {
                path: AppRoute.ROOT,
                element: <Main />,
              },
              {
                path: AppRoute.SIGN_IN,
                element: (
                  <PublicRoute>
                    <SignIn />
                  </PublicRoute>
                ),
              },
              {
                path: AppRoute.SIGN_UP,
                element: (
                  <PublicRoute>
                    <SignUp />
                  </PublicRoute>
                ),
              },
              {
                path: AppRoute.ESTATES,
                element: (
                  <ProtectedRoute>
                    <Estates />
                  </ProtectedRoute>
                ),
              },
            ],
          },
          {
            path: AppRoute.NOT_FOUND,
            element: '',
          },
        ]}
      />
    </StoreProvider>
  </StrictMode>,
);
