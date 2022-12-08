import { useState } from 'react';
import { FaFeather } from 'react-icons/fa';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { TiPhoneOutline } from 'react-icons/ti';
import { getContacts, getIsLoading } from '../../redux/contactSlice';
import { addNewContact } from '../../redux/operations';
import { notifyErrorIfNewContactAlreadyExists } from '../../notificationMessages/notificationMessages';
import {
  Title,
  PhoneForm,
  FormLabel,
  InputNameField,
  InputNumberField,
  FormButton,
  StyledContainer,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const addedContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactToAdd = {
      name,
      number,
    };

    const newContactAlreadyExists = addedContacts.find(
      ({ name }) => name.toLowerCase() === contactToAdd.name.toLowerCase()
    );

    if (newContactAlreadyExists) {
      notifyErrorIfNewContactAlreadyExists(contactToAdd.name);
    } else {
      dispatch(addNewContact(contactToAdd));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <PhoneForm onSubmit={handleSubmit}>
      <StyledContainer autoClose={2000} />
      <Title>
        <TiPhoneOutline size={40} /> Phonebook
      </Title>
      <FormLabel htmlFor={nameInputId}>Name</FormLabel>
      <InputNameField
        id={nameInputId}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleInput}
        required
      />
      <FormLabel htmlFor={numberInputId}>Number</FormLabel>
      <InputNumberField
        id={numberInputId}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleInput}
        required
      />
      <FormButton type="submit" disabled={isLoading}>
        <FaFeather style={{ marginRight: '5px' }} />
        <span>Add contact</span>
      </FormButton>
    </PhoneForm>
  );
};

export default ContactForm;
