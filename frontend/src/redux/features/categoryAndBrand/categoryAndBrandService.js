import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/`;

// Create Category
const createCategory = async formData => {
  const res = await axios.post(API_URL + 'categories/createCategory', formData);
  return res.data; // return the response from the server
};

// Get Categories
const getCategories = async () => {
  const res = await axios.get(API_URL + 'categories/getCategories');
  return res.data;
};

// Delete Category
const deleteCategory = async slug => {
  const res = await axios.delete(API_URL + `categories/${slug}`);
  return res.data.message;
};

// Create Brand
const createBrand = async formData => {
  const res = await axios.post(API_URL + 'brands/createBrand', formData);
  return res.data; // return the response from the server
};

// Get Brands
const getBrands = async () => {
  const res = await axios.get(API_URL + 'brands/getBrands');
  return res.data; // return the response from the server
};

// Delete Brand
const deleteBrand = async slug => {
  const res = await axios.delete(API_URL + `brands/${slug}`);
  return res.data.message;
};

const categoryAndBrandService = {
  createCategory,
  getCategories,
  deleteCategory,
  createBrand,
  getBrands,
  deleteBrand,
};

export default categoryAndBrandService;
