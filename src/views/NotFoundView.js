import { Link } from 'react-router-dom';
import { Container, HomeTitle } from './view.styled';

export default function NotFoundView() {
  return (
    <Container>
      <HomeTitle>
        Page is not found :(, go to
        <Link to="/login">Homepage</Link>
      </HomeTitle>
    </Container>
  );
};