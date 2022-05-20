import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRegisterMutation } from 'redux/authAPI';
import { FaUser, FaEnvelope, FaKey } from 'react-icons/fa';
import { Container, Title, Form, Field, Icon, Input, Button } from './view.styled';

export default function RegisterView() {
  const [register] = useRegisterMutation();
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

  const handleSubmit = async e => {
    e.preventDefault();
    const reg = await register({ name, email, password });   
    if (reg?.error) {      
      return toast.error('Please, check name and email and try again');
    };  
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
            pattern=".{7,}"
            title="Seven or more characters"
            onChange={handleChange}
            required
          />
        </Field>     
        <Button type="submit">Register</Button>
      </Form> 
    </Container>
  );
}