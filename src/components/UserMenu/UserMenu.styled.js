import styled from '@emotion/styled';

export const UserMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  @media screen and (min-width: 480px) {
    flex-direction: row;
    font-size: 22px;
    margin-right: 10px;
  }
`;

export const HeaderUserText = styled.p`
  display: flex;
  flex-direction: column;
  color: #000000;
  font-size: 12px;
  font-family: inherit;
  letter-spacing: 0.1ch;
  @media screen and (min-width: 480px) {
    font-size: 18px;
    margin-right: 10px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    font-size: 22px;
    margin-right: 10px;
  }
`;

export const HeaderButton = styled.button`
  display: inline-flex;
  padding: 3px 5px;
  color: #000000;
  font-size: 15px;
  font-family: inherit;
  line-height: 1.17;
  letter-spacing: 0.1ch;
  text-decoration: none;
  text-transform: uppercase;
  background: #c5dde8;
  border-radius: 12px;
  border-bottom: 2px solid gray;
  transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    letter-spacing 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    color: grey;
    background-color: #eecfba;
    letter-spacing: 0.1ch;
  }
  @media screen and (min-width: 480px) {
    font-size: 13px;
    padding: 7px 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const HeaderUser = styled.span`
  font-size: 13px;
  color: #6ca1bb;
  text-shadow: 0 2px 1px #e9eff6, -1px 3px 1px #e9eff6, -2px 5px 1px #e9eff6;
  @media screen and (min-width: 480px) {
    font-size: 19px;
  }
`;
