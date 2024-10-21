import styles from './Loader.module.scss';
import loaderImg from '../../assets/loader.gif';
import ReactDOM from 'react-dom';

function Loader() {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} alt='Loader' />
      </div>
    </div>,
    document.getElementById('loader')
  );
}

export function Spinner() {
  return (
    <div className='--center-all'>
      <img src={loaderImg} alt='Spinner' width={40} />
    </div>
  );
}

export default Loader;
