import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { Container, Title, Form, Field, Icon, Input, Button } from './view.styled';

export default function LoginView() {
  const dispatch = useDispatch();
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Please login</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Field>
          <Icon><FaEnvelope /></Icon>
          <Input type="email" placeholder="email" name="email"value={email}
            onChange={handleChange}/>
        </Field>

        <Field>
          <Icon><FaKey /></Icon>
          <Input type="password" placeholder="password" name="password"value={password}
            onChange={handleChange}/>
        </Field> 
        <Button type="submit">Login</Button>        
      </Form>      
    </Container>
  );
}