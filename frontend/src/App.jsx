import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLoginStatus } from './redux/features/auth/authSlice';
import Profile from './pages/profile/Profile';

function App() {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  /*
    Calling getLoginStatus in the useEffect hook at the top level in App is a common practice to persist the user’s login status across page refreshes.
    
    Session Persistence: When the user refreshes the page, the Redux store (which holds user state) is cleared because it's in-memory only. By calling getLoginStatus on App mount, you immediately check if the user has a valid session token in their cookies, which helps to restore the logged-in state. 
  */
  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
