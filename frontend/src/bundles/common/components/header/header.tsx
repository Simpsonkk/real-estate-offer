import { AppRoute } from '../../enums/app-route.enum.js';
import { getValidClassNames } from '~/bundles/common/helpers/helpers.js';
import {
  useAppDispatch,
  useAppSelector,
  useLocation,
} from '~/bundles/common/hooks/hooks.js';

import styles from './styles.module.scss';
import { Link } from '../components.js';
import { actions as authActions } from '~/bundles/auth/store/auth.js';

const Header: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(({ auth }) => auth.currentUser);

  const handleSignOut = () => dispatch(authActions.signOut());
  return (
    <header className={styles.header}>
      {location.pathname === AppRoute.ROOT && !currentUser && (
        <>
          <Link to={AppRoute.SIGN_IN}>
            <button
              className={getValidClassNames(styles.button, styles.logInButton)}
            >
              Log In
            </button>
          </Link>
          <Link to={AppRoute.SIGN_UP}>
            <button
              className={getValidClassNames(styles.button, styles.signUpButton)}
            >
              Sign Up
            </button>
          </Link>
        </>
      )}
      {location.pathname === AppRoute.ROOT && currentUser && (
        <button
          onClick={handleSignOut}
          className={getValidClassNames(styles.button, styles.signUpButton)}
        >
          Sign Out
        </button>
      )}
    </header>
  );
};

export { Header };
