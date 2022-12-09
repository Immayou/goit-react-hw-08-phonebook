import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getIsLoading,
  getError,
} from '../../redux/Contacts/contactSelectors';
import { fetchContacts } from '../../redux/Contacts/operations';
import TopBox from '../../components/TopBox/TopBox';
import BottomBox from '../../components/BottomBox/BottomBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import errorImg from '../../images/error.png';
import emptyPhonebookImg from '../../images/no_contacts.png';
import {
  MainWrapper,
  ContactsTitle,
  Layout,
  NoContactsSectionTitle,
  ErrorSectionTitle,
  ErrorSectionText,
} from './Contacts.styled';

const Contacts = () => {
  const addedContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isNotContactListEmpty = addedContacts.length > 0;
  return (
    <>
      <main>
        <Layout>
          <MainWrapper>
            <TopBox>
              <ContactForm />
            </TopBox>
            {isNotContactListEmpty && (
              <BottomBox>
                <div>
                  <ContactsTitle>Contacts</ContactsTitle>
                  <Filter />
                  <ContactList />
                </div>
              </BottomBox>
            )}
            {!isNotContactListEmpty && !isLoading && (
              <BottomBox>
                <div>
                  <NoContactsSectionTitle>
                    No contacts yet!
                  </NoContactsSectionTitle>
                  <img src={emptyPhonebookImg} alt="No contacts" width={100} />
                </div>
              </BottomBox>
            )}
            {isError && !isLoading && (
              <BottomBox>
                <div>
                  <ErrorSectionTitle>
                    Sorry, something went wrong!
                  </ErrorSectionTitle>
                  <ErrorSectionText style={{ marginBottom: '10px' }}>
                    Error loading the contacts
                  </ErrorSectionText>
                  <img src={errorImg} alt="Error" width={100} />
                </div>
              </BottomBox>
            )}
          </MainWrapper>
        </Layout>
      </main>
    </>
  );
};

export default Contacts;
