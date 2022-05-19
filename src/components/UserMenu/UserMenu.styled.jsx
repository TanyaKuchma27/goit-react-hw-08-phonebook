import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;  
`;

export const Name = styled.span`  
  margin-right: 12px;
  margin-left: 12px;
`;

export const Button = styled.button`  
  background: #2196f3;  
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  color: #ffffff;
  padding: 5px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: fit-content;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    opacity: 1;
  }
`;