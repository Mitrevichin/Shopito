import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import {
  deleteBrand,
  deleteCategory,
  getBrands,
  getCategories,
} from '../../../redux/features/categoryAndBrand/categoryAndBrandSlice';
import Loader from '../../loader/Loader';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';

function BrandList() {
  const { isLoading, brands } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const confirmDelete = slug => {
    confirmAlert({
      title: 'Delete Brand',
      message: 'Are you sure to delete this Brand?',
      buttons: [
        {
          label: 'Delete',
          onClick: () => delBrand(slug),
          className: 'delete-button',
        },
        {
          label: 'Cancel',
        },
      ],
    });
  };

  async function delBrand(slug) {
    try {
      // Wait for deleteBrand to finish
      await dispatch(deleteBrand(slug)).unwrap();

      // Fetch updated brands AFTER successful deletion
      dispatch(getBrands());
    } catch (error) {
      console.error('Error deleting brand:', error);
      toast.error('Error deleting brand');
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className='--mb2'>
        <h3>All Brandss</h3>
        <div className='table'>
          {brands.length === 0 ? (
            <p>No Brands Found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {brands.map((brand, i) => {
                  const { _id, name, slug, category } = brand;

                  return (
                    <tr key={_id}>
                      <td>{i + 1}</td>
                      <td>{name}</td>
                      <td>{category}</td>
                      <td>
                        <span>
                          <FaTrash
                            size={20}
                            color='red'
                            onClick={() => confirmDelete(slug)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default BrandList;
