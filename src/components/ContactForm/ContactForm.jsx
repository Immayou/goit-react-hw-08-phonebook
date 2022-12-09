import { Formik } from 'formik';
import { FaFeather } from 'react-icons/fa';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { TiPhoneOutline } from 'react-icons/ti';
import {
  getContacts,
  getIsLoading,
} from '../../redux/Contacts/contactSelectors';
import { addNewContact } from '../../redux/Contacts/operations';
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

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContactAlreadyExists = addedContacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (newContactAlreadyExists) {
      notifyErrorIfNewContactAlreadyExists(values.name);
    } else {
      dispatch(addNewContact(values));
    }
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <PhoneForm>
          <StyledContainer autoClose={2000} />
          <Title>
            <TiPhoneOutline size={40} /> Phonebook
          </Title>
          <FormLabel htmlFor={nameInputId}>Name</FormLabel>
          <InputNameField
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormLabel htmlFor={numberInputId}>Number</FormLabel>
          <InputNumberField
            id={numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormButton type="submit" disabled={isLoading}>
            <FaFeather style={{ marginRight: '5px' }} />
            <span>Add contact</span>
          </FormButton>
        </PhoneForm>
      </Formik>
    </>
  );
};

export default ContactForm;
