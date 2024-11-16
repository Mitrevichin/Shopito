import './Category.scss';
import CategoryList from './CategoryList';
import CreateCategory from './CreateCategory';

function Category() {
  return (
    <div>
      <section>
        <div className='container coupon'>
          <CreateCategory />
          <CategoryList />
        </div>
      </section>
    </div>
  );
}

export default Category;
