import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { getCategories } from '../../../redux/features/categoryAndBrand/categoryAndBrandSlice';
import Loader from '../../loader/Loader';

function CategoryList() {
  const { isLoading, categories } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
                          <FaTrash size={20} color='red' />
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
