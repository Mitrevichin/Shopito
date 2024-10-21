import styles from './Auth.module.scss';
import loginImg from '../../assets/login.png';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginUser() {}

  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt='Login' width={400} />
      </div>

      <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form onSubmit={loginUser}>
            <input
              type='text'
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
  );
}

export default Login;
