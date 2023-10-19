import { useAppDispatch } from '~/bundles/common/hooks/hooks.js';

import { AuthPicture, SignUpForm } from '../../components/components.js';
import { actions as authActions } from '../../store/auth.js';
import { type UserSignUpRequestDto } from '../../types/types.js';
import { Header } from '~/bundles/common/components/components.js';

import styles from './styles.module.scss';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (payload: UserSignUpRequestDto): void => {
    void dispatch(authActions.signUp(payload));
  };

  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <AuthPicture />
        <SignUpForm onSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export { SignUp };
