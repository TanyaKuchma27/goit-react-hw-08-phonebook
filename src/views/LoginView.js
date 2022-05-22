import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { Container, Title, Form, Field, Icon, Input, Button } from './view.styled';
import {useLogInMutation} from 'redux/authAPI'

export default function LoginView() {    
  const [login] = useLogInMutation(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();    
    const logIn = await login({ email, password });     
    if (logIn?.error) {
      setPassword('');
      return toast.error('You entered the wrong email or password, please try again');
    }           
    setEmail('');
    setPassword('');
  };

  return (
    <Container>  
      <Title>Please login</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Field>
          <Icon><FaEnvelope /></Icon>
          <Input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </Field>
        <Field>
          <Icon><FaKey /></Icon>
          <Input
            type="password"
            placeholder="password"
            name="password"
            value={password}            
            pattern=".{7,}"
            title="Seven or more characters"
            onChange={handleChange}
            required
          />
        </Field> 
        <Button type="submit">Login</Button>        
      </Form>      
    </Container>
  );
}