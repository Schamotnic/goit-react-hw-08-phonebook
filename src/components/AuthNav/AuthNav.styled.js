import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;

  &.active {
    color: tomato;
  }
`;

export const NavButton = styled.button`
  display: inline-block;
  background: inherit;
  color: #fff;
  text-decoration: none;
  border-style: none;
`;
