import { useNavigate, useParams } from 'react-router-dom';
import { ContactEditorForm } from 'components/ContactEditorForm';
import { Overlay, Modal } from './EditContactModal.styled';
import { useUpdateContactMutation, useFetchContactsQuery } from 'redux/contactsAPI';
import { toast } from 'react-hot-toast';

export const EditContactModal = () => {
  const { contactId } = useParams();
  const [updateContact] = useUpdateContactMutation();
  const navigate = useNavigate();
  const closeModal = () => navigate('/contacts');
  const { data: contacts } = useFetchContactsQuery();
  const contact = contacts.find(contact => contact.id === contactId);
  
  const handleUpdateContact = async fields => {
    try {
        await updateContact({ contactId, ...fields });
        toast.success('Contact edited');
        closeModal();
        
    } catch (error) {
        toast.error(error);     
    }
  };

  return (
    <Overlay>
      <Modal>
        {contact && (
          <ContactEditorForm
            initialValues={{ name: contact.name, number: contact.number }}
            btnText="Save changes"
            onSubmit={handleUpdateContact}
          />
        )}

        <button type="button" onClick={closeModal}>
          Закрыть
        </button>
      </Modal>
    </Overlay>
  );
};