import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/features/auth/authSlice';
import styles from './Navbar.module.scss';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// const activeLink = ({ isActive }) => (isActive ? styles.active : '');
const activeLink = ({ isActive }) => (isActive && styles.active) || '';

function Navbar() {
  /* 
  `useSelector` automatically passes the Redux `state` into `selectUser`.useSelector handles passing the state for you! This pattern is designed to make Redux state selection easy and modular, without needing to manually pass state every time you want to retrieve data.
  */
  const user = useSelector(selectUser);
  const username = user?.name;

  return (
    <div className={styles.navbar}>
      <div className={styles.user}>
        <FaUserCircle size={40} color='#fff' />
        <h4>{username}</h4>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to='/admin/home' className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/all-products' className={activeLink}>
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/add-product' className={activeLink}>
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/category' className={activeLink}>
              Category
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/brand' className={activeLink}>
              Brand
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
