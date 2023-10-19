import {
  Loader,
  Notifications,
  RouterOutlet,
} from '~/bundles/common/components/components.js';
import {
  useAppDispatch,
  useAppSelector,
  useEffect,
} from '~/bundles/common/hooks/hooks.js';
import { actions as authActions } from '~/bundles/auth/store/auth.js';
import { tokenService } from '~/services/services.js';
import { DataStatus } from '~/bundles/common/enums/data-status.enum.js';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const isPending = useAppSelector(
    ({ auth }) => auth.dataStatus === DataStatus.PENDING,
  );

  const token = tokenService.getToken();
  useEffect(() => {
    if (token) {
      void dispatch(authActions.loadUser());
    }
  }, [dispatch, token]);

  if (isPending && token) {
    return <Loader />;
  }

  return (
    <>
      <RouterOutlet />
      <Notifications />
    </>
  );
};

export { App };
