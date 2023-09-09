import { DebtCard } from '../../../../shared/components';
import styles from './master-list.module.scss';

export function MasterList({ debts }) {
  return (
    <div className={styles.masterListWrapper}>
      <h2>Debts</h2>
      <ul className={styles.masterList}>
        {debts.map(debt => (
          <DebtCard key={debt.name} debt={debt} />
        ))}
      </ul>
    </div>
  );
}
