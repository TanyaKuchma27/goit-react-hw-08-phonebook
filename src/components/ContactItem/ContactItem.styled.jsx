import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  margin-right: 24px;
`;

export const Button = styled.button`

  margin-left: 8px;
  cursor: pointer;
  background-color: ${button => (button.name === 'delete' ? '#bb4343' : '#ecad5a')}; 
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: transparent;
  border-radius: 4px;
  color: #ffffff;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    opacity: 1;
  }
`;