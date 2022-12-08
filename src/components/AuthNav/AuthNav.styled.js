import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderButton = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-size: 12px;
  padding: 5px;
  border-radius: 12px;
  border: 2px solid #000000;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    color: grey;
    letter-spacing: 0.29ch;
  }
  &.active {
    background-color: #c5dde8;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;

export const AuthNavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* @media screen and (min-width: 768px) {
    display: block;
    margin-left: auto;
  } */
`;
