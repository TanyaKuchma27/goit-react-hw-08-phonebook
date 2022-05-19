import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  color: #212121;
  
  &.active {
    color: #2196f3;
  }
`;