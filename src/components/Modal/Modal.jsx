import PropTypes from 'prop-types';
import { FaFeather } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { nanoid } from '@reduxjs/toolkit';
import { IoCloseSharp } from 'react-icons/io5';
import { getContacts } from '../../redux/contactSlice';
import { editContact } from '../../redux/operations';
import { notifyErrorIfNewContactAlreadyExists } from '../../../src/notificationMessages/notificationMessages';
import {
  Overlay,
  ModalCloseButton,
  WrapperLeft,
  WrapperRight,
} from '../Modal/Modal.styled';
import {
  Form,
  WrapperCircle,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  FormButton,
} from '../../pages/LogIn/LogIn.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onModalClose, dataContact }) => {
  const dispatch = useDispatch();
  const addedContacts = useSelector(getContacts);
  document.body.style.overflow = 'hidden';

  const [name, setName] = useState(dataContact.name);
  const [number, setNumber] = useState(dataContact.number);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

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

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  const handleEditContactFormSubmit = e => {
    e.preventDefault();
    const contactToEdit = {
      id: dataContact.id,
      name,
      number,
    };

    const editedContactAlreadyExists = addedContacts.find(
      ({ name, id }) =>
        name.toLowerCase() === contactToEdit.name.toLowerCase() &&
        contactToEdit.id !== id
    );

    const contactIsNotEdited = addedContacts.find(
      ({ name, id, number }) =>
        name.toLowerCase() === contactToEdit.name.toLowerCase() &&
        contactToEdit.id === id &&
        number === contactToEdit.number
    );

    if (editedContactAlreadyExists) {
      notifyErrorIfNewContactAlreadyExists(contactToEdit.name);
    } else if (contactIsNotEdited) {
      onModalClose();
    } else {
      dispatch(editContact(contactToEdit));
    }

    document.body.style.overflow = '';
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Form onSubmit={handleEditContactFormSubmit}>
        <ModalCloseButton type="button" onClick={onModalClose}>
          <IoCloseSharp size={40} />
        </ModalCloseButton>
        <WrapperLeft></WrapperLeft>
        <WrapperRight></WrapperRight>
        <WrapperCircle></WrapperCircle>
        <FormContent>
          <FormTitle>Edit the contact</FormTitle>
          <FormLabel htmlFor={nameInputId}>Name</FormLabel>
          <FormInput
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormLabel htmlFor={numberInputId}>Number</FormLabel>
          <FormInput
            id={numberInputId}
            type="tel"
            name="number"
            value={number}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormButton type="submit">
            <FaFeather style={{ marginRight: '5px' }} />
            <span>Ok</span>
          </FormButton>
        </FormContent>
      </Form>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};
