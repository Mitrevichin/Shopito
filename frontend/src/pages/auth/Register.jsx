import styles from './Auth.module.scss';
import loginImg from '../../assets/login.png';
import Card from '../../components/card/Card';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail } from '../../utils';
import { register, RESET_AUTH } from '../../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';

const initialState = {
  name: '',
  email: '',
  password: '',
  cPassword: '',
};

function Register() {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, cPassword } = formData;

  const { isLoading, isLoggedIn, isSuccess } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function registerUser(e) {
    e.preventDefault();

    // Validate fields
    if (!password || !email || !name) {
      return toast.error('All fields are required');
    }
    if (password.length < 6) {
      return toast.error('Password must be at least 6 characters');
    }
    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email');
    }
    if (password !== cPassword) {
      return toast.error('Passwords do not match!');
    }

    const userData = {
      name,
      email,
      password,
    };

    await dispatch(register(userData));
  }

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate('/');
      dispatch(RESET_AUTH());
    }
  }, [dispatch, isLoggedIn, isSuccess, navigate]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      {isLoading && <Loader />}

      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>

            <form onSubmit={registerUser}>
              <input
                type='text'
                placeholder='Name'
                required
                value={name}
                name='name'
                onChange={handleInputChange}
              />
              <input
                type='email'
                placeholder='Email'
                required
                value={email}
                name='email'
                onChange={handleInputChange}
              />
              <input
                type='password'
                placeholder='Password'
                required
                value={password}
                name='password'
                onChange={handleInputChange}
              />
              <input
                type='password'
                placeholder='Confirm password'
                required
                value={cPassword}
                name='cPassword'
                onChange={handleInputChange}
              />
              <button type='submit' className='--btn --btn-primary --btn-block'>
                Register
              </button>

              <span className={styles.register}>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
              </span>
            </form>
          </div>
        </Card>

        <div className={styles.img}>
          <img src={loginImg} alt='Login' width={400} />
        </div>
      </section>
    </>
  );
}

export default Register;
