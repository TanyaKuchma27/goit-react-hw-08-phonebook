import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { FaUser, FaPhoneAlt, FaSave, FaTimes } from 'react-icons/fa';
import { Forma, Label, Icon, Input, Wrapper, Button, Close } from './ContactEditorForm.styled';

export const ContactEditorForm = ({
  initialValues = { name: '', number: '' },
  onSubmit
}) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  const navigate = useNavigate();
  const closeModal = () => navigate('/contacts');

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Forma autoComplete='off'>
          <Label>
            <Icon><FaUser size={22} /></Icon>
            <Input
              type="text"
              placeholder="Name"
              name="name"             
              required
            />
          </Label>
          <Label>
            <Icon><FaPhoneAlt size={22} /></Icon>
            <Input
              type="tel"
              placeholder="Number"
              name="number"              
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Wrapper>
            <Icon><FaSave size={22} /></Icon>
            <Button type="submit" disabled={isSubmitting}>
              Save changes
            </Button>
          </Wrapper>        
          
          <Close type="button" onClick={closeModal}>
            <FaTimes/>
          </Close>
        </Forma>)}
    </Formik>    
  )
}