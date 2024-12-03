import './AddProduct.scss';
import Loader from '../../../components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import ProductForm from '../productForm/ProductForm';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  getBrands,
  getCategories,
} from '../../../redux/features/categoryAndBrand/categoryAndBrandSlice';
import { createProduct } from '../../../redux/features/product/productSlice';

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
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [description, setDescription] = useState('');

  const { name, category, brand, quantity, color, price, regularPrice } =
    product;
  const { isLoading } = useSelector(state => state.product);
  const { categories, brands } = useSelector(state => state.category);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
  }, [dispatch]);

  // Filtered Brands based on selected Categoty
  function filterBrands(selectedCategory) {
    const newBrands = brands.filter(
      brand => brand.category === selectedCategory
    );
    setFilteredBrands(newBrands);
  }

  useEffect(() => {
    filterBrands(category);
  }, [category]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setProduct(prevProducts => ({ ...prevProducts, [name]: value }));
  }

  function generateSKU(category) {
    const letter = category.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = `${letter} - ${number}`;
    return sku;
  }

  async function saveProduct(e) {
    e.preventDefault();

    const formData = {
      name,
      sku: generateSKU(category),
      category,
      brand,
      color,
      quantity: Number(quantity),
      regularPrice,
      price,
      description,
      //images
    };

    // console.log(formData);
    await dispatch(createProduct(formData));

    // navigate('admin/all-products');
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
          filteredBrands={filteredBrands}
          description={description}
          setDescription={setDescription}
        />
      </div>
    </section>
  );
}

export default AddProduct;
