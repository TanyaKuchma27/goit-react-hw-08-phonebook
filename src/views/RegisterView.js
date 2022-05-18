import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { FaUser, FaEnvelope, FaKey } from 'react-icons/fa';
import { Container, Title, Form, Field, Icon, Input, Button } from './view.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Please register</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">    
        
        <Field>
          <Icon><FaUser /></Icon>
          <Input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </Field> 
        
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
            onChange={handleChange}
            required
          />
        </Field>     

        <Button type="submit">Register</Button>
      </Form> 
    </Container>
  );
}