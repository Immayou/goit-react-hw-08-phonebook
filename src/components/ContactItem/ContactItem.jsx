import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiContacts } from 'react-icons/ti';
import { getIsLoading } from '../../redux/Contacts/contactSelectors';
import { removeContact } from '../../redux/Contacts/operations';
import { Modal } from '../Modal/Modal';
import {
  ContactSimpleItem,
  NameInfo,
  NumberInfo,
  ContactButton,
  ButtonBox,
} from './ContactItem.styled';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoading = useSelector(getIsLoading);

  const onRemoveContactHandler = () => {
    try {
      dispatch(removeContact(item.id));
    } catch (error) {
      console.log(error);
    }
  };

  const onEditButtonHandlerClick = e => {
    e.preventDefault();
    setIsOpenModal(true);
  };

  const onModalClose = async () => {
    setIsOpenModal(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <ContactSimpleItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TiContacts size={30} style={{ marginRight: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NameInfo>{item.name}: </NameInfo>
            <NumberInfo>{item.number}</NumberInfo>
          </div>
        </div>
        <ButtonBox>
          <ContactButton type="button" onClick={onEditButtonHandlerClick}>
            Edit
          </ContactButton>
          <ContactButton
            type="button"
            disabled={isLoading}
            onClick={onRemoveContactHandler}
          >
            {isLoading ? 'Deleting' : 'Delete'}
          </ContactButton>
        </ButtonBox>
      </ContactSimpleItem>
      {isOpenModal && <Modal onModalClose={onModalClose} dataContact={item} />}
    </>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }.isRequired
  ).isRequired,
};
