import { useFetchContactsQuery} from 'redux/contactsAPI';
import { ContactItem } from 'components/ContactItem';
import { Spinner } from 'components/Spinner';
import { List, Item, Text } from './ContactList.styled';

export const ContactList = ({ contacts }) => {  
    const { isFetching } = useFetchContactsQuery();  
    
    return (
        <List>
            {isFetching && <Spinner />}
            {(contacts?.length > 0) ? (contacts.map(contact => (
                <Item key={contact.id}>
                    <ContactItem {...contact}/>                    
                </Item>
            ))) : (<Text>Contact list is empty</Text>)}
        </List>
    )       
}