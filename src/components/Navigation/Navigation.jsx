import React from 'react';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { HomeLink } from '../Header/Header.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <HomeLink to="/">Home</HomeLink>
      {isLoggedIn && <HomeLink to="/contacts">Contacts</HomeLink>}
    </nav>
  );
};

export default Navigation;
