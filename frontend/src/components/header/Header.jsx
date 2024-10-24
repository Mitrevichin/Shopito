import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { logout, RESET_AUTH } from '../../redux/features/auth/authSlice';

const activeLink = ({ isActive }) => (isActive ? styles.active : '');

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    function fixNabar() {
      if (window.scrollY > 50) {
        setScrollPage(true);
      } else {
        setScrollPage(false);
      }
    }
    window.addEventListener('scroll', fixNabar);

    () => window.removeEventListener('scroll', fixNabar);
  }, []);

  function toggleMenu() {
    setShowMenu(showMenu => !showMenu);
  }

  function hideMenu() {
    setShowMenu(false);
  }

  async function logoutUser() {
    await dispatch(logout());
    await dispatch(RESET_AUTH());
    navigate('/login');
  }

  return (
    <header className={scrollPage ? styles.fixed : ''}>
      <div className={styles.header}>
        <Logo />

        <nav className={showMenu ? styles['show-nav'] : styles['hide-nav']}>
          <div
            className={
              showMenu
                ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                : styles['nav-wrapper']
            }
            onClick={hideMenu}
          ></div>

          <ul>
            <li className={styles['logo-mobile']}>
              <Logo />
              <FaTimes size={22} color='#fff' onClick={hideMenu} />
            </li>
            <li>
              <NavLink to='/shop' className={activeLink}>
                Shop
              </NavLink>
            </li>
          </ul>

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
              <Link to='/' onClick={logoutUser}>
                Logout
              </Link>
            </span>

            <Cart />
          </div>
        </nav>

        <div className={styles['menu-icon']}>
          <Cart />
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
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
