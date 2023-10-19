import { Link } from '~/bundles/common/components/components.js';
import { AppRoute } from '~/bundles/common/enums/app-route.enum.js';

import styles from './styles.module.scss';

const Introduction: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>The chemical negatively charged</h1>
        <p className={styles.text}>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is
        </p>
        <Link to={AppRoute.ESTATES}>
          <button className={styles.button}>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export { Introduction };
