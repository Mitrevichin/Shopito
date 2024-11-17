import './Brand.scss';
import BrandList from './BrandList';
import CreateBrand from './CreateBrand';

function Brand() {
  return (
    <div>
      <section>
        <div className='container coupon'>
          <CreateBrand />
          <BrandList />
        </div>
      </section>
    </div>
  );
}

export default Brand;
