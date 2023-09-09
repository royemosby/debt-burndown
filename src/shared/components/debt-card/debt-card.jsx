import styles from './debt-card.module.scss';
import * as fromAssets from './../../assets/assets';

export function DebtCard({ debt }) {
  return (
    <li className={styles.debtCard}>
      <div className={styles.icon}>
        <img src={fromAssets.creditCard} alt="" />
      </div>
      <div>
        <h2>{debt.name}</h2>
        <h3>
          {debt.startingPrinciple} at {debt.apr}
        </h3>
      </div>
    </li>
  );
}
