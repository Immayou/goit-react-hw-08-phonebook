import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px auto;
`;

export const FilterLabel = styled.label`
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.17;
`;

export const InputFilterField = styled.input`
  padding-left: 0 0 0 10px;
  margin-bottom: 20px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 1px;
  border-radius: 15px;
  font-size: 18px;
  transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
