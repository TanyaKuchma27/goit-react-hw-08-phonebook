import { Link } from 'react-router-dom';

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
  },  
};

export default function NotFoundView() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        404 Page is not found :(, go to{' '}
        <Link to="/"> Homepage</Link>
      </h1>
    </div>
  );
};