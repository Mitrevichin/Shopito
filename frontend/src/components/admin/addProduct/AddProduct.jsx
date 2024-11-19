import './AddProduct.scss';
import Loader from '../../../components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import ProductForm from '../productForm/ProductForm';
import { useEffect, useState } from 'react';
import { getCategories } from '../../../redux/features/categoryAndBrand/categoryAndBrandSlice';

const initialState = {
  name: '',
  category: '',
  brand: '',
  quantity: '',
  color: '',
  price: '',
  regularPrice: '',
};

function AddProduct() {
  const [product, setProduct] = useState(initialState);
  const { name, category, brand, quantity, color, price, regularPrice } =
    product;
  const { isLoading } = useSelector(state => state.product);
  const { categories, brands } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setProduct(prevProducts => ({ ...prevProducts, [name]: value }));
  }
  async function saveProduct(e) {
    e.preventDefault();
    console.log(product);
  }

  return (
    <section>
      {isLoading && <Loader />}
      <div className='container'>
        <h3 className='--mt'>Add New Product</h3>
        <ProductForm
          saveProduct={saveProduct}
          product={product}
          handleInputChange={handleInputChange}
          categories={categories}
          isEditing={false}
        />
      </div>
    </section>
  );
}

export default AddProduct;
