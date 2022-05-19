import { Container, Name, Button } from "./UserMenu.styled";
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { FaUserCircle } from 'react-icons/fa';
import {IoExitOutline} from 'react-icons/io5';

export const UserMenu = () => {    
    const name = useSelector(authSelectors.getUsername);
    const dispatch = useDispatch();

    return (
        <Container>
            <FaUserCircle size={40} color={ '#2196f3'}/>
            <Name>Welcome, {name}</Name>
            <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
                <IoExitOutline size={ 36}/>
            </Button>
        </Container>
    );
};

