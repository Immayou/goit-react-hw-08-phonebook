import styled from '@emotion/styled';

export const ContactSimpleItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.17;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const NameInfo = styled.span`
  font-style: italic;
  font-size: 25px;
  letter-spacing: 0.1ch;
`;

export const NumberInfo = styled.span`
  font-size: 20px;
  letter-spacing: 0.1ch;
`;

export const ContactButton = styled.button`
  padding: 7px 12px;
  min-height: 25px;
  flex-shrink: 0;
  font-family: inherit;
  text-transform: uppercase;
  line-height: 1.17;
  letter-spacing: 0.1ch;
  background: #c5dde8;
  border-bottom: 2px solid gray;
  color: #000000;
  border-radius: 12px;
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
    &:not(:last-child) {
      margin-right: 7px;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  @media screen and (min-width: 480px) {
    flex-direction: row;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    font-size: 20px;
  }
`;
