import styled from '@emotion/styled';

export const Form = styled.form` 
  width: 320px;
  margin: 0 auto;  
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;  
  margin-bottom: 15px;
`;

export const Text = styled.span`
  margin-bottom: 4px;
  font-size: 20px;
  color: #212121;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    border: 2px solid dodgerblue;
  }
`;