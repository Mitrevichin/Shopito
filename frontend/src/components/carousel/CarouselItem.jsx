import { Link } from 'react-router-dom';
import './Carousel.scss';
import { shortenText } from '../../utils';

function CarouselItem({ description, url, name, price }) {
  return (
    <div className='carouselItem'>
      <Link to='/product-details'>
        <img className='product--image' src={url} alt='Product' />
        <p className='price'>{`$${price}`}</p>
        <h4>{shortenText(name, 18)}</h4>
        <p className='--mb'>{shortenText(description, 26)}</p>
      </Link>
      <button className='--btn --btn-primary --btn-block'>Add To Cart</button>
    </div>
  );
}

export default CarouselItem;
