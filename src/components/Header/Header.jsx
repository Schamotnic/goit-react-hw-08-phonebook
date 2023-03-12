import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
