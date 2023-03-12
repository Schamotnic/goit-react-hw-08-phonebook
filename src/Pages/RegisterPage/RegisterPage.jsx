import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { TextField } from '@mui/material';
import { RegisterForm } from './RegisterPage.styled';
import Button from '@mui/material/Button';

const styles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));
    setPassword('');
    setEmail('');
    setName('');
  };

  return (
    <div>
      <h1> Сторінка реестрації</h1>
      <RegisterForm onSubmit={handleSubmit} style={styles.form}>
        <TextField
          variant="standard"
          label="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
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
          Sign Up
        </Button>
      </RegisterForm>
    </div>
  );
}
