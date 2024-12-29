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

const productService = {
  createProduct,
  getProducts,
};

export default productService;
