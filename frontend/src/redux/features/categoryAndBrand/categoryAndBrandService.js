import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/`;

// Create Category
const createCategory = async formData => {
  const res = await axios.post(API_URL + 'categories/createCategory', formData);
  return res.data; // return the response from the server
};

const categoryAndBrandService = {
  createCategory,
};

export default categoryAndBrandService;
