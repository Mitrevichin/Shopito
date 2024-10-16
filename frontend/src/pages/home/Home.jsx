import Slider from '../../components/slider/Slider';
import HomeInfoBox from './HomeInfoBox';
import './Home.scss';

function Home() {
  return (
    <>
      <Slider />

      <section>
        <div className='container'>
          <HomeInfoBox />
        </div>
      </section>
    </>
  );
}

export default Home;
