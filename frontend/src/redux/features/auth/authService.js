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

// Logout User
async function logout() {
  const res = await axios.get(API_URL + 'logout');
  return res.data.message;
}

// Get Login Status
async function getLoginStatus() {
  const res = await axios.get(API_URL + 'getLoginStatus');
  return res.data;
}

// Get User
async function getUser() {
  const res = await axios.get(API_URL + 'getUser');
  return res.data;
}

// Update User Profile
async function updateUser(userData) {
  const res = await axios.patch(API_URL + 'updateUser', userData);
  return res.data;
}

// Update User Photo
async function updatePhoto(userData) {
  const res = await axios.patch(API_URL + 'updatePhoto', userData);
  return res.data;
}

const authService = {
  register,
  login,
  logout,
  getLoginStatus,
  getUser,
  updateUser,
  updatePhoto,
};

export default authService;
