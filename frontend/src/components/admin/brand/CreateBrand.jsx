import { useEffect, useState } from 'react';
import Card from '../../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../loader/Loader';
import { getCategories } from '../../../redux/features/categoryAndBrand/categoryAndBrandSlice';

function CreateBrand() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const { isLoading, categories } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  async function saveBrand(e) {
    e.preventDefault();
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className='--mb2'>
        <h3>Create Brand</h3>
        <p>
          Use the form to <b>Create a Brand</b>
        </p>

        <Card cardClass={'card'}>
          <br />
          <form onSubmit={saveBrand}>
            <label>Brand Name:</label>
            <input
              type='text'
              required
              placeholder='Brand name'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <label>Parent Category:</label>
            <select
              name='category'
              className='form-control'
              onChange={e => setCategory(e.target.value)}
            >
              <option>Select Category</option>
              {categories.length > 0 &&
                categories.map(cat => (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
            </select>

            <div className='--my'>
              <button className='--btn --btn-primary'>Save Brand</button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default CreateBrand;
