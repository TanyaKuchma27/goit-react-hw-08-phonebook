import { Container, Avatar, Name } from "./UserMenu.styled";
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import defaultAvatar from 'img/default-avatar.png';


export const UserMenu = () => {    
    const name = useSelector(authSelectors.getUsername);
    const dispatch = useDispatch();
    const avatar = defaultAvatar;


    return (
        <Container>
            <Avatar src={avatar} alt="avatar" width="32" />
            <Name>Welcome, {name}</Name>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>
                Logout
            </button>
        </Container>
    );
};

