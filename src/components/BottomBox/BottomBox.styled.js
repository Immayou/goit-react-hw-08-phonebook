import styled from '@emotion/styled';

export const CoverBox = styled.section`
  width: 90%;
  margin: 0 auto;
  background-color: #6ca1bb;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  padding: 10px;
  border: 3px solid #333333;
  font-size: 2.5rem;
  border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
  letter-spacing: 0.1ch;

  @media screen and (min-width: 480px) {
    width: 400px;
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 4rem 3rem;
  }
`;
