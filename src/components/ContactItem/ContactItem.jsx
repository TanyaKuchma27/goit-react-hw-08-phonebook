import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsAPI';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Left, Number, Button } from './ContactItem.styled';
import { Spinner } from 'components/Spinner';
import { FaAddressBook, FaTrashAlt, FaPen } from 'react-icons/fa';


export const ContactItem = ({ id, name, number }) => {   
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Left>
                <FaAddressBook /> {name}:
                <Number href={`tel: ${number}`}>{number}</Number>
            </Left>  
            <div>
                <Button
                    type="button"
                    onClick={() => navigate(`/contacts/edit/${id}`)}                              
                >                
                    <FaPen />                    
                </Button>
                <Button
                    type="button"
                    onClick={() => deleteContact(id) }
                    disabled={isDeleting}
                    name="delete"
                >
                    {isDeleting ? <Spinner size={20}/> :  <FaTrashAlt />}                   
                </Button>                
            </div>            
        </Wrapper>);
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired   
}