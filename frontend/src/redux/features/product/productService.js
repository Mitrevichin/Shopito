import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/products`;

// Create Product
const createProduct = async formData => {
  const res = await axios.post(API_URL, formData);
  return res.data;
};

// Get Products
const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Delete Product
const deleteProduct = async id => {
  const res = await axios.delete(API_URL + id);
  return res.data;
};

// Get Product
const getProduct = async id => {
  const res = await axios.get(API_URL + id);
  return res.data;
};

const productService = {
  createProduct,
  getProducts,
  deleteProduct,
  getProduct,
};

export default productService;
