import { Container, HomeTitle } from './view.styled';
import phoneContact from 'img/phone-contact.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  img: {
    paddingRight: 10,
  }
};

const HomeView = () => (
  <Container>
    <HomeTitle>
      <img src={phoneContact} alt="avatar" width="64" style={ styles.img}/>
      Welcome to contact service     
    </HomeTitle>
  </Container>
);

export default HomeView;