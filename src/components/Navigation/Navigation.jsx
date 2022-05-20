import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSlice';
import { Link } from './Navigation.styled';

export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
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