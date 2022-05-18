import styled from '@emotion/styled';

export const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  max-width: 350px;
  border: 2px solid rgb(51, 4, 31);
  border-radius: 10px;
  padding: 20px;
  background-color: #e2b3b3; */
  width: 320px;
  margin: 0 auto; 
`;

export const Field = styled.label`
  /* display: flex;
  flex-direction: column;
  margin-bottom: 15px; */
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

// export const Text = styled.span`
//   margin-bottom: 4px;
//   font-size: 24px;
//   font-weight: 700;
//   color: rgb(88, 11, 34);
// `;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    border: 2px solid dodgerblue;
  }
  /* margin-top: 4px;
  height: 30px;
  padding-left: 10px;
  font-size: 20px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
  border: 1px solid rgb(88, 11, 34);
  } */
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
  /* margin: 0 auto;
  max-width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  cursor: pointer;
  background-color: rgb(88, 11, 34);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: transparent;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  text-align: center;
  letter-spacing: 0.06em;
  color: #ffffff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
  background-color: rgb(51, 4, 31);
  } */
`;