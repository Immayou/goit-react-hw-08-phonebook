import styled from '@emotion/styled';
import imgWrapper from '../../images/wrapper.jpg';

export const CoverBox = styled.section`
  width: 90%;
  padding: 10px;
  margin: 0 auto 20px auto;
  background-image: url(${imgWrapper});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  border: 3px solid #333333;
  font-size: 2.5rem;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  @media screen and (min-width: 480px) {
    width: 400px;
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 4rem 7rem;
  }
`;
