import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/users/`;

// Register User
async function register(userData) {
  const res = await axios.post(API_URL + 'register', userData);
  console.log(res);

  return res.data;
}

const authService = {
  register,
};

export default authService;
