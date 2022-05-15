import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { getFilter, filterContact } from 'redux/filterSlice';
import { useFetchContactsQuery} from 'redux/contactsAPI';

export default function ContactsView() {
  const { data: contacts } = useFetchContactsQuery(); 
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter))
    };

    return;    
  };

  const changeFilter = e => {
    dispatch(filterContact(e.target.value));
  }; 

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>        
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={ visibleContacts }/>      
      <Toaster position="top-center" />
    </>
  );
}