import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <Logo />
      </div>
    </header>
  );
}

export default Header;

export function Logo() {
  return (
    <div className={styles.logo}>
      <Link to='/'>
        <h2>
          Shop<span>Ito</span>
        </h2>
      </Link>
    </div>
  );
}
