import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2A363B;
  font-size: 18px;

  &.active {
    color: #E84A5F;
  }
`;