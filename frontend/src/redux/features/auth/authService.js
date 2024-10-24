import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/users/`;

// Register User
async function register(userData) {
  const res = await axios.post(API_URL + 'register', userData);
  return res.data;
}

// Login User
async function login(userData) {
  const res = await axios.post(API_URL + 'login', userData);
  return res.data;
}

const authService = {
  register,
  login,
};

export default authService;
