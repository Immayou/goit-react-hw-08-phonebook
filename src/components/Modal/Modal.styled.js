import styled from '@emotion/styled';
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
