import styles from './Auth.module.scss';
import loginImg from '../../assets/login.png';
import Card from '../../components/card/Card';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail } from '../../utils';
import { login, RESET_AUTH } from '../../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, isLoggedIn, isSuccess } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function loginUser(e) {
    e.preventDefault();

    if (!email || !password) {
      return toast.error('All fields are required');
    }
    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email');
    }

    const userData = {
      email,
      password,
    };

    await dispatch(login(userData));
  }

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate('/');
      dispatch(RESET_AUTH());
    }
  }, [dispatch, isLoggedIn, isSuccess, navigate]);

  return (
    <>
      {isLoading && <Loader />}

      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt='Login' width={400} />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form onSubmit={loginUser}>
              <input
                type='email'
                placeholder='Email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button className='--btn --btn-primary --btn-block'>Login</button>
              <span className={styles.register}>
                <p>Don&apos;t have an account?</p>
                <Link to='/register'>Register</Link>
              </span>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
}

export default Login;
