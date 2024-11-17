import { Route, Routes } from 'react-router-dom';
import AdminHome from '../../components/admin/adminHome/AdminHome';
import Navbar from '../../components/admin/navbar/Navbar';
import styles from './Admin.module.scss';
import Category from '../../components/admin/category/Category';
import Brand from '../../components/admin/brand/Brand';
import AddProduct from '../../components/admin/addProduct/AddProduct';
import ViewProducts from '../../components/admin/viewProducts/ViewProducts';
import EditProduct from '../../components/admin/editProduct/EditProduct';

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
            <Route path='brand' element={<Brand />} />

            <Route path='add-product' element={<AddProduct />} />
            <Route path='all-products' element={<ViewProducts />} />
            <Route path='edit-product/:id' element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
