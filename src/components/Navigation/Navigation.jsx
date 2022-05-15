import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from './Navigation.styled';

export const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav>
            {isLoggedIn ? (
                <Link to="/contacts">Contacts</Link>
            ) : (
                <Link to="/">Home</Link>
            )}
        </nav>
    );
};