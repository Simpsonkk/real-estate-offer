import {
  useAppDispatch,
  useAppSelector,
  useEffect,
} from '~/bundles/common/hooks/hooks.js';
import { actions as estateActions } from '../../store/estate.js';
import { EstateCard } from '../components.js';

import styles from './styles.module.scss';
import { DataStatus } from '~/bundles/common/enums/data-status.enum.js';
import { Loader } from '~/bundles/common/components/components.js';

const EstateList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(estateActions.loadEstates());
  }, []);

  const { dataStatus, estates } = useAppSelector(({ estate }) => estate);

  if (dataStatus === DataStatus.PENDING) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Open Deals</h3>
      <ul className={styles.estateList}>
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate} />
        ))}
      </ul>
    </div>
  );
};

export { EstateList };
