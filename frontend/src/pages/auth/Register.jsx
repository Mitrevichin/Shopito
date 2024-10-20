import styles from './Auth.module.scss';
import loginImg from '../../assets/login.png';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  cPassword: '',
};

function Register() {
  const [formData, setFormData] = useState('initialState');
  const { name, email, password, cPassword } = formData;

  function registerUser() {}

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
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
              type='text'
              placeholder='Email'
              required
              value={email}
              name={email}
              onChange={handleInputChange}
            />
            <input
              type='password'
              placeholder='Password'
              required
              value={password}
              name={password}
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='Confirm password'
              required
              value={cPassword}
              name='cPassword'
              onChange={handleInputChange}
            />
            <button className='--btn --btn-primary --btn-block'>
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
  );
}

export default Register;
