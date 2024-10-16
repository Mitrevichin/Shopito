import Slider from '../../components/slider/Slider';
import HomeInfoBox from './HomeInfoBox';
import './Home.scss';
import { productData } from '../../components/carousel/data';
import CarouselItem from '../../components/carousel/CarouselItem';
import ProductCarousel from '../../components/carousel/Carousel';

function PageHeading({ heading, btnText }) {
  return (
    <>
      <div className='--flex-between'>
        <h2 className='--fw-thin'>{heading}</h2>
        <button className='--btn'>{btnText}</button>
      </div>
      <div className='--hr'></div>
    </>
  );
}

function Home() {
  const productss = productData.map(item => (
    <div key={item.id}>
      <CarouselItem
        url={item.imageurl}
        price={item.price}
        name={item.name}
        description={item.description}
      />
    </div>
  ));

  return (
    <>
      <Slider />

      <section>
        <div className='container'>
          <HomeInfoBox />
          <PageHeading heading='Latest Products' btnText='Shop Now >>>' />
          <ProductCarousel products={productss} />
        </div>
      </section>
    </>
  );
}

export default Home;
