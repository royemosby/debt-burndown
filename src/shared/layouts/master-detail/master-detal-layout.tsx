import { Header, DebtCard } from '@/shared/components';
import { Debt } from '@/features/home/home';
import styles from './master-detail.module.scss';

export function MasterDetailLayout({ debts, children }: { debts: Debt[]; children?: any }) {
  return (
    <>
      <Header />
      <div className={styles.masterDetails}>
        <ul className="master">
          {debts.map(debt => (
            <DebtCard key={debt.name} debt={debt} />
          ))}
        </ul>
        <div className="detail">
          <h2>Detailed view</h2>
        </div>
      </div>
    </>
  );
}
