import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import {
  deleteCategory,
  getCategories,
} from '../../../redux/features/categoryAndBrand/categoryAndBrandSlice';
import Loader from '../../loader/Loader';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';

function CategoryList() {
  const { isLoading, categories } = useSelector(state => state.category);
  const dispatch = useDispatch();

  //   const { slug } = useParams();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const confirmDelete = slug => {
    confirmAlert({
      title: 'Delete Category',
      message: 'Are you sure to delete this category?',
      buttons: [
        {
          label: 'Delete',
          onClick: () => deleteCat(slug),
          className: 'delete-button',
        },
        {
          label: 'Cancel',
        },
      ],
    });
  };

  async function deleteCat(slug) {
    try {
      // Wait for deleteCategory to finish
      await dispatch(deleteCategory(slug)).unwrap();

      // Fetch updated categories after successful deletion
      dispatch(getCategories());
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Error deleting category');
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className='--mb2'>
        <h3>All Categories</h3>
        <div className='table'>
          {categories.length === 0 ? (
            <p>No Categories Found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {categories.map((cat, i) => {
                  const { _id, name, slug } = cat;

                  return (
                    <tr key={_id}>
                      <td>{i + 1}</td>
                      <td>{name}</td>
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

export default CategoryList;
