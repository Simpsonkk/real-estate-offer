import { type ReactNode } from 'react';

import { Navigate } from '~/bundles/common/components/components.js';
import { AppRoute } from '~/bundles/common/enums/app-route.enum.js';
import { useAppSelector } from '~/bundles/common/hooks/hooks.js';

type Properties = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<Properties> = ({ children }) => {
  const currentUser = useAppSelector(({ auth }) => auth.currentUser);

  const hasUser = Boolean(currentUser);

  if (hasUser) {
    return children;
  }

  return <Navigate to={AppRoute.SIGN_IN} replace />;
};

export { ProtectedRoute };
