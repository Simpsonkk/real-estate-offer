import { type EstateResponseDto } from '../../types/estate-response-dto.js';

import styles from './styles.module.scss';

type Properties = {
  estate: EstateResponseDto;
};

const EstateCard: React.FC<Properties> = ({ estate }) => {
  return (
    <li className={styles.wrapper}>
      <img className={styles.picture} src={estate.image} alt={estate.name} />
      <div className={styles.details}>
        <h3 className={styles.title}>{estate.name}</h3>
        <div className={styles.description}>
          <p className={styles.price}>{estate.price.toLocaleString()} Dhs</p>
          <p className={styles.yield}>Yeld {estate.yield}%</p>
          <p className={styles.sold}>Sold {estate.sold}%</p>
        </div>
        <div className={styles.info}>
          <p className={styles.ticket}>Ticket - {estate.ticket.toLocaleString()} Dhs</p>
          <p className={styles.daysLeft}>Days left {estate.daysLeft}</p>
        </div>
      </div>
    </li>
  );
};

export { EstateCard };
