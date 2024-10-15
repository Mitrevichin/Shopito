import { Link, NavLink } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import styles from './Header.module.scss';

const activeLink = ({ isActive }) => (isActive ? styles.active : '');

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <Logo />

        <nav>
          <ul>
            <li>
              <NavLink to='/shop' className={activeLink}>
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles['header-right']}>
          <span className={styles.links}>
            <NavLink to='/login' className={activeLink}>
              Login
            </NavLink>
            <NavLink to='/register' className={activeLink}>
              Register
            </NavLink>
            <NavLink to='/order-history' className={activeLink}>
              My Order
            </NavLink>
          </span>

          <Cart />
        </div>
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

export function Cart() {
  return (
    <span className={styles.cart}>
      <Link to='/cart'>
        Cart
        <FaCartShopping size={20} />
        <p>0</p>
      </Link>
    </span>
  );
}
