import { Route, Routes } from 'react-router-dom';
import AdminHome from '../../components/admin/adminHome/AdminHome';
import Navbar from '../../components/admin/navbar/Navbar';
import styles from './Admin.module.scss';
import Category from '../../components/admin/category/Category';

function Admin() {
  return (
    <div>
      <div className={styles.admin}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path='home' element={<AdminHome />} />
            <Route path='category' element={<Category />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
