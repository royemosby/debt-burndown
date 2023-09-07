import { Header, DebtCard } from '@/shared/components';
import { Debt } from '@/features/home/home';
import styles from './master-detail.module.scss';
import { Details } from './details/details';
import { MasterList } from './master-list/master-list';

export function MasterDetailLayout({ debts, children }) {
  return (
    <>
      <Header />
      <div className={styles.masterDetails}>
        <MasterList debts={debts} />
        <Details />
      </div>
    </>
  );
}
