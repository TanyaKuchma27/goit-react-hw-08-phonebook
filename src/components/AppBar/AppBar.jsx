import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSlice';
import { Toaster } from 'react-hot-toast';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { Header } from './AppBar.styled';

export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <Toaster position="top-center" />
        </Header>        
    );
}