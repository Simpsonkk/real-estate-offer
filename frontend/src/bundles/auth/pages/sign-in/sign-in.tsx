import { useAppDispatch } from '~/bundles/common/hooks/hooks.js';

import { AuthPicture, SignInForm } from '../../components/components.js';
import { actions as authActions } from '../../store/auth.js';
import { type UserSignInRequestDto } from '../../types/user-sign-in-request-dto.js';
import { Header } from '~/bundles/common/components/components.js';

import styles from './styles.module.scss';

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (payload: UserSignInRequestDto): void => {
    void dispatch(authActions.signIn(payload));
  };

  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <AuthPicture />
        <SignInForm onSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export { SignIn };
