import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { ContactEditorForm } from 'components/ContactEditorForm';
import { Overlay, Modal } from './EditContactModal.styled';
import { useUpdateContactMutation, useFetchContactsQuery } from 'redux/contactsAPI';
import { toast } from 'react-hot-toast';

const modalRoot = document.querySelector('#modal-root');

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

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  });

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        {contact && (
          <ContactEditorForm
            initialValues={{ name: contact.name, number: contact.number }}
            btnText="Save changes"
            onSubmit={handleUpdateContact}
          />
        )}
      </Modal>
    </Overlay>,
    modalRoot,
  );
};