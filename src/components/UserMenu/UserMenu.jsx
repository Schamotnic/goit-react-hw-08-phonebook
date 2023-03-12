import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { MainHead } from './UserMenu.styled';
import Button from '@mui/material/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    fontWeight: 700,
    marginRight: 12,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  console.log(name);
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
      <MainHead>Your Phonebook</MainHead>
    </div>
  );
}
