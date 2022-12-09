import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled(ToastContainer)`
  font-size: 20px;
  letter-spacing: 0.1ch;
  text-transform: none;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #e9eff6;
  border-radius: 50%;
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
`;

export const WrapperLeft = styled.div`
  @media screen and (min-width: 480px) {
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    background: #ffffff;
    border-radius: 20px;
    bottom: 60px;
    left: -30px;
    &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 20px;
      border-radius: 30px;
      background: white;
      top: 20px;
      left: 10px;
    }
    &:before {
      content: '';
      position: absolute;
      width: 50px;
      height: 20px;
      border-radius: 30px;
      background: white;

      top: -20px;
    }
  }
`;

export const WrapperRight = styled.div`
  @media screen and (min-width: 480px) {
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    background: #ffffff;
    border-radius: 20px;
    top: 60px;
    right: -30px;
    &:after {
      top: 20px;
      right: 10px;
      content: '';
      position: absolute;
      width: 50px;
      height: 20px;
      border-radius: 30px;
      background: white;
    }
    &:before {
      top: -20px;
      right: 0;
      content: '';
      position: absolute;
      width: 50px;
      height: 20px;
      border-radius: 30px;
      background: white;
    }
  }
`;

export const FormBox = styled(Form)`
  position: relative;
  width: 250px;
  margin: 50px auto 0 auto;
  background: white;
  border-radius: 30px;
  letter-spacing: 0.3ch;
  text-transform: uppercase;
  &:hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
      0px 4px 10px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  }
  @media screen and (min-width: 480px) {
    width: 400px;
  }
`;

export const WrapperCircle = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 80px;
    left: -55px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
  }
`;

export const FormContent = styled.div`
  padding: 10px;
  @media screen and (min-width: 480px) {
    padding: 20px;
  }
`;

export const FormTitle = styled.h3`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
`;
export const FormLabel = styled.label`
  color: #000000;
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const FormInput = styled(Field)`
  display: block;
  width: 95%;
  padding-left: 0 0 0 10px;
  margin: 0 auto 20px auto;
  background: #e9eff6;
  line-height: 40px;
  border-width: 1px;
  font-size: 14px;
  border-radius: 12px;
  transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
  @media screen and (min-width: 480px) {
    margin: 0 auto 40px auto;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 40%;
  height: 40px;
  margin: 0 auto;
  font-family: inherit;
  letter-spacing: 0.3ch;
  text-transform: uppercase;
  background: #6ca1bb;
  border-bottom: 2px solid gray;
  color: #000000;
  font-size: 15px;
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
    font-size: 15px;
  }
`;
