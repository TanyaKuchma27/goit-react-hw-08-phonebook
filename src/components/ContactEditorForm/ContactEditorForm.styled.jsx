import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Forma = styled(Form)` 
  width: 320px;
  margin: 0 auto; 
`;

export const Label = styled.label`
  display: flex;  
  width: 100%;
  margin-bottom: 15px;
`;

export const Icon = styled.div`
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
  border-radius: 5px;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    border: 2px solid dodgerblue; 
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
  background: dodgerblue;
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

export const Close = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 28px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1); 
  color: dodgerblue;  
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    opacity: 1;
  }
`;
