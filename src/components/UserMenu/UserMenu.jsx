import { Container, Name, Button } from "./UserMenu.styled";
import { useSelector } from 'react-redux';
import { getUsername } from 'redux/authSlice';
import { useLogOutMutation } from 'redux/authAPI';
import { FaUserCircle } from 'react-icons/fa';
import {IoExitOutline} from 'react-icons/io5';

export const UserMenu = () => {    
    const name = useSelector(getUsername); 
    const [logOut] = useLogOutMutation();   

    return (
        <Container>
            <FaUserCircle size={40} color={ '#2196f3'}/>
            <Name>Welcome, {name}</Name>
            <Button type="button" onClick={() => logOut()}>
                <IoExitOutline size={ 36}/>
            </Button>
        </Container>
    );
};

