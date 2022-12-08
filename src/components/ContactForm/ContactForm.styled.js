import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled(ToastContainer)`
  font-size: 20px;
  letter-spacing: 0.1ch;
  text-transform: none;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.33;
  @media screen and (min-width: 480px) {
    font-size: 40px;
  }
  @media screen and (min-width: 768px) {
    font-size: 46px;
  }
`;

export const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 1.17;
  text-align: start;

  @media screen and (min-width: 480px) {
    font-size: 15px;
  }
`;

export const InputNameField = styled.input`
  padding-left: 0 0 0 10px;
  margin-bottom: 30px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 1px;
  font-size: 18px;
  border-radius: 12px;
  transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
export const InputNumberField = styled.input`
  padding-left: 0 0 0 10px;
  margin-bottom: 30px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 1px;
  border-radius: 12px;
  font-size: 18px;
  transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
export const FormButton = styled.button`
  margin: 0 auto;
  width: 40%;
  height: 40px;
  border-radius: 7px;
  font-family: inherit;
  text-transform: uppercase;
  background: #c5dde8;
  border-bottom: 2px solid gray;
  border-radius: 12px;
  color: #000000;
  line-height: 1.17;
  letter-spacing: 0.3ch;
  font-size: 12px;
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
    letter-spacing: 0.2ch;
  }
  @media screen and (min-width: 768px) {
    letter-spacing: 0.2ch;
    font-size: 15px;
  }
`;
