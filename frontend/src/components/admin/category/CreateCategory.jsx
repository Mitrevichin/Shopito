import { useState } from 'react';
import Card from '../../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCategory,
  getCategories,
} from '../../../redux/features/categoryAndBrand/categoryAndBrandSlice';
import { toast } from 'react-toastify';
import Loader from '../../loader/Loader';

function CreateCategory() {
  const [name, setName] = useState('');

  const { isLoading } = useSelector(state => state.category);
  const dispatch = useDispatch();

  async function saveCategory(e) {
    e.preventDefault();

    if (name.length < 3) {
      return toast.error('Category must be at least 3 characters');
    }

    const formData = { name };

    try {
      // Wait for createCategory to finish before dispatching getCategories
      await dispatch(createCategory(formData)).unwrap();

      // Dispatch getCategories after category creation is successful
      dispatch(getCategories());

      setName('');
    } catch (error) {
      console.error('Error creating category:', error);
      toast.error('Error creating category');
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className='--mb2'>
        <h3>Create Category</h3>
        <p>
          Use the form to <b>Create a Category</b>
        </p>

        <Card cardClass={'card'}>
          <br />
          <form onSubmit={saveCategory}>
            <label>Category Name:</label>
            <input
              type='text'
              required
              placeholder='Category name'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <div className='--my'>
              <button className='--btn --btn-primary'>Save Category</button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default CreateCategory;
