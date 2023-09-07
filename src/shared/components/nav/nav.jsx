import styles from './nav.module.scss';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <ul className={styles.flexRow}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dev">Dev Sandbox</Link>
      </li>
      <li>About</li>
    </ul>
  );
}
