import { useNavigate } from 'react-router-dom';
import './ProductCategory.scss';

const categories = [
  {
    id: 1,
    title: 'Gadgets',
    image: 'https://i.ibb.co/5GVkd3m/c1.jpg',
  },
  {
    id: 2,
    title: 'Womens Fashion',
    image: 'https://i.ibb.co/nQKLjrW/c2.jpg',
  },
  {
    id: 3,
    title: 'Sport Sneakers',
    image: 'https://i.ibb.co/fNkBYgr/c3.jpg',
  },
];

function Category({ title, image }) {
  const navigate = useNavigate();
  return (
    <div className='category'>
      <h3>{title}</h3>
      <img src={image} alt='Category' />
      <button className='--btn' onClick={() => navigate('/shop')}>
        {'Shop Now >>>'}
      </button>
    </div>
  );
}

function ProductCategory() {
  return (
    <div className='categories'>
      {categories.map(item => (
        <div className='--flex-center' key={item.id}>
          <Category title={item.title} image={item.image} />
        </div>
      ))}
    </div>
  );
}

export default ProductCategory;
