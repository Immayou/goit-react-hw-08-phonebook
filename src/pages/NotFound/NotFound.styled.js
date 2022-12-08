import styled from '@emotion/styled';
import HomePageWrapper from '../../images/wrapper.jpg';

export const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 100vh;
  background-image: url(${HomePageWrapper});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  :before {
    content: '';
    background-image: url(${HomePageWrapper});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    width: 80%;
    height: 50%;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-filter: blur(10px);
    filter: blur(1px);
  }
`;

export const HomePageText = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 0.3ch;
  color: #000000;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 45px;
  }
  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
`;
