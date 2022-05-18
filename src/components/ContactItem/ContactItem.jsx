import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsAPI';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Left, Button } from './ContactItem.styled';
import { Spinner } from 'components/Spinner';
import { FaTrashAlt } from 'react-icons/fa';


export const ContactItem = ({ id, name, number }) => {   
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Left>
                {name}:  {number}
            </Left>  
            <div>
                <Button
                    type="button"
                    onClick={() => deleteContact(id) }
                    disabled={isDeleting}               
                >
                    {isDeleting && <Spinner size={12} />} 
                  
                <FaTrashAlt/>
                </Button>
                <Button
                    type="button"
                    onClick={() => navigate(`/contacts/edit/${id}`)}                              
                >                
                Edit
                </Button>
            </div>            
        </Wrapper>);
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired   
}