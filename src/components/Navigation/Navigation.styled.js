import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderButton = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-size: 12px;
  font-family: inherit;
  border-radius: 12px;
  padding: 5px;
  border: 2px solid #000000;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    letter-spacing 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    color: grey;
    letter-spacing: 0.28ch;
  }
  &.active {
    background-color: #c5dde8;
  }
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
    &:not(:last-of-type) {
      margin-right: 30px;
      margin-bottom: 0;
    }
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
