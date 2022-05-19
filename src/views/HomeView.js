import { Container, HomeTitle } from './view.styled';
import phoneContact from 'img/phone-contact.png';

export default function HomeView() {
  return (
    <Container>
      <HomeTitle>
        <img src={phoneContact} alt="avatar" width="64" />
        Welcome to contact service
      </HomeTitle>
    </Container>
  );
};


