import { type FC, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/bundles/common/enums/app-route.enum.js';
import { useAppSelector } from '~/bundles/common/hooks/hooks.js';

type Properties = {
  children: ReactNode;
};

const PublicRoute: FC<Properties> = ({ children }) => {
  const currentUser = useAppSelector(({ auth }) => auth.currentUser);

  const hasUser = Boolean(currentUser);

  if (!hasUser) {
    return children;
  } else {
    return <Navigate to={AppRoute.ESTATES} />;
  }
};

export { PublicRoute };
