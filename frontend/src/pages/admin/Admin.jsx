import AdminHome from '../../components/admin/adminHome/AdminHome';
import Navbar from '../../components/admin/navbar/Navbar';
import styles from './Admin.module.scss';

function Admin() {
  return (
    <div>
      <div className={styles.admin}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.content}>
          <AdminHome />
        </div>
      </div>
    </div>
  );
}

export default Admin;
