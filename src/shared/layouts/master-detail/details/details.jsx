import styles from './details.module.scss';

export function Details({ cardId }) {
  return (
    <div className={styles.details}>
      <h2>Detailed view</h2>
      <div>Card {cardId || '0'}</div>
    </div>
  );
}
