import { Controller, useAppForm } from '~/bundles/common/hooks/hooks.js';

import { type UserSignUpRequestDto } from '../../types/types.js';
import { userSignUpValidationSchema } from '../../validation-schemas/validation-schemas.js';
import { DEFAULT_SIGN_UP_PAYLOAD } from './constants/constants.js';
import { Link } from '~/bundles/common/components/components.js';
import { AppRoute } from '~/bundles/common/enums/app-route.enum.js';

import styles from './styles.module.scss';

type Properties = {
  onSubmit: (payload: UserSignUpRequestDto) => void;
};

const SignUpForm: React.FC<Properties> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignUpRequestDto>({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
    validationSchema: userSignUpValidationSchema,
  });

  const handleFormSubmit = (event_: React.BaseSyntheticEvent): void => {
    void handleSubmit(onSubmit)(event_);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h4 className={styles.title}>Sign up</h4>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Email</label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <input
              className={styles.input}
              onChange={onChange}
              value={value}
              type="email"
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
              placeholder="Password"
              type="password"
            />
          )}
          name="password"
          control={control}
        />
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password.message}</p>
        )}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Full name</label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <input
              className={styles.input}
              onChange={onChange}
              value={value}
              placeholder="Volodymyr Mirch"
            />
          )}
          name="fullName"
          control={control}
        />
        {errors.fullName && (
          <p className={styles.errorMessage}>{errors.fullName.message}</p>
        )}
      </fieldset>

      <button className={styles.button} type="submit">
        Sign up
      </button>

      <p className={styles.signUpText}>
        Do you have account?{' '}
        <Link className={styles.signUpLink} to={AppRoute.SIGN_IN}>
          Sign in
        </Link>
      </p>
    </form>
  );
};

export { SignUpForm };
