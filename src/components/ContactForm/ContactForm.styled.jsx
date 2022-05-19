import styled from '@emotion/styled';

export const Form = styled.form` 
  width: 320px;
  margin: 0 auto; 
`;

export const Field = styled.label`
  display: flex;  
  width: 100%;
  margin-bottom: 15px;
`;

export const Icon = styled.div`
  padding: 10px;
  background: #45c01f;
  color: #ffffff;
  min-width: 50px;
  text-align: center;
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    border: 2px solid #2b9c08; 
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
  background: #2b9c08;
  font-weight: 700;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    opacity: 1;
  }
`;