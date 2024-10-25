import { useSelector } from 'react-redux';

function ShowOnLogin({ children }) {
  const { isLoggedIn } = useSelector(state => state.auth);

  if (isLoggedIn) return children;
  return null;
}

export default ShowOnLogin;

export function ShowOnLogout({ children }) {
  const { isLoggedIn } = useSelector(state => state.auth);

  if (!isLoggedIn) return children;
  return null;
}
