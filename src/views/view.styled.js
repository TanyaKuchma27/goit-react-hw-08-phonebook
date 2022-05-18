import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;  
`;

export const Title = styled.h2`
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

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
  background: dodgerblue;
  color: white;
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
    border: 2px solid dodgerblue;
  }
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