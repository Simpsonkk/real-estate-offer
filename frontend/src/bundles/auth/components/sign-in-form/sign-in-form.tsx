import { Controller, useAppForm } from '~/bundles/common/hooks/hooks.js';

import { type UserSignInRequestDto } from '../../types/types.js';
import { userSignInValidationSchema } from '../../validation-schemas/validation-schemas.js';
import { DEFAULT_SIGN_IN_PAYLOAD } from './constants/constants.js';
import { Link } from '~/bundles/common/components/components.js';
import { AppRoute } from '~/bundles/common/enums/app-route.enum.js';

import styles from './styles.module.scss';

type Properties = {
  onSubmit: (payload: UserSignInRequestDto) => void;
};

const SignInForm: React.FC<Properties> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignInRequestDto>({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: userSignInValidationSchema,
  });

  const handleFormSubmit = (event_: React.BaseSyntheticEvent): void => {
    void handleSubmit(onSubmit)(event_);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h4 className={styles.title}>Login</h4>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Email</label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <input
              className={styles.input}
              onChange={onChange}
              value={value}
              placeholder="Email"
            />
          )}
          name="email"
          control={control}
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Password</label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <input
              className={styles.input}
              onChange={onChange}
              value={value}
              type='password'
              placeholder="Password"
            />
          )}
          name="password"
          control={control}
        />
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password.message}</p>
        )}
      </fieldset>

      <a href="#" className={styles.forgotPasswordLink}>
        Forgot password?
      </a>
      <button className={styles.button} type="submit">
        Sign in
      </button>

      <p className={styles.signUpText}>
        Don't have account?{' '}
        <Link className={styles.signUpLink} to={AppRoute.SIGN_UP}>
          Sign up
        </Link>
      </p>
    </form>
  );
};

export { SignInForm };
