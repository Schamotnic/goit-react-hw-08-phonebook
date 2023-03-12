import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { LoginForm } from './LoginPag.styled';

const styles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(authOperations.logIn(user));
    setPassword('');
    setEmail('');
  };

  return (
    <div>
      <h1> Сторінка логування</h1>
      <LoginForm onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          variant="standard"
          label="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          variant="standard"
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Enter
        </Button>
      </LoginForm>
    </div>
  );
}
