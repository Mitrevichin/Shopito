import { useDispatch, useSelector } from 'react-redux';
import './ViewProducts.scss';
import { selectIsLoggedIn } from '../../../redux/features/auth/authSlice';
import { useEffect } from 'react';
import { getProducts } from '../../../redux/features/product/productSlice';

function ViewProducts() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading } = useSelector(state => state.product);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProducts());
    }
  }, [dispatch, isLoggedIn]);

  return <div>View</div>;
}

export default ViewProducts;
