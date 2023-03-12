import { NavButton, NavLink, NavWrapper } from './AuthNav.styled';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import authOperations from '../../redux/auth/auth-operations';

const AuthNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <NavWrapper>
      <NavLink to="/register">Registration</NavLink>
      {isLoggedIn ? (
        <NavButton
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </NavButton>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </NavWrapper>
  );
};

export default AuthNav;
