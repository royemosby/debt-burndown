import { Nav } from '../index';
import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles.navBar}>
      <h2>Header</h2>
      <Nav></Nav>
    </div>
  );
}
