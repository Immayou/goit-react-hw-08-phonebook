import { useSelector } from 'react-redux';
import {
  getContacts,
  getIsLoading,
} from '../../redux/Contacts/contactSelectors';
import { getFilterValue } from '../../redux/Contacts/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { Spinner } from '../Spinner/Spinner';
import featherImg from '../../images/feather_logo.png';
import { NoMatchesSectionTitle } from '../ContactList/ContactList.styled';

const ContactList = () => {
  const addedContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const enteredFilterValue = useSelector(getFilterValue);

  const normalizeFilter = enteredFilterValue.toLowerCase();
  const visibleContacts = addedContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
  const noMatches = visibleContacts.length === 0;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id} item={contact} />
          ))}
        </ul>
      )}
      {noMatches && (
        <div>
          <NoMatchesSectionTitle>Ooops... No matches!</NoMatchesSectionTitle>
          <img src={featherImg} alt="Error" width={100} />
        </div>
      )}
    </>
  );
};

export default ContactList;
