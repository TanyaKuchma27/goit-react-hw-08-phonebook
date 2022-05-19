import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useCreateContactMutation, useFetchContactsQuery} from 'redux/contactsAPI';
import { Spinner } from 'components/Spinner';
import { FaUser, FaPhoneAlt, FaPlus } from 'react-icons/fa';
import { Form, Field, Icon, Input, Wrapper, Button } from './ContactForm.styled';

export const ContactForm = () => {
    const [addNewContact, { isLoading }] = useCreateContactMutation();
    const { data: contacts } = useFetchContactsQuery();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleNumberChange = e => {
        setNumber(e.target.value);
    };

    const formReset = () => {
        setName('');
        setNumber('');
    }
    
    const addContact = (name, number) => {
        const normalizedName = name.toLowerCase();

        if (contacts && contacts.find(contact =>
            contact.name.toLowerCase() === normalizedName)) {
            toast.error(`${name} is already in contacts`);
            return;
        };
        
        toast.success('Contact added!');
            
        return addNewContact({ name, number });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addContact(name, number);
        formReset();
    }
    
    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Field>
                <Icon><FaUser size={ 22}/></Icon>
                <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
            </Field>
            <Field>
                <Icon><FaPhoneAlt size={ 22}/></Icon>
                <Input
                    type="tel"
                    placeholder="Number"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Field>
            <Wrapper>
                <Icon><FaPlus size={22} /></Icon>
                <Button type="submit">
                    {isLoading ? <Spinner size="36" /> : 'Add contact'}
                </Button>
            </Wrapper>             
        </Form>
    )
}