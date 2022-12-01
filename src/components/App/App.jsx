import { Routes, Route } from 'react-router-dom';
import { useGetContactsQuery } from '../../redux/contactsAPISlice';
import AppBar from '../AppBar/AppBar';
import { Home } from '../../pages/Home/Home';
import { Registration } from '../../pages/Registration/Registration';
import { LogIn } from '../../pages/LogIn/LogIn';
import { Contacts } from '../../pages/Contacts/Contacts';
import TopBox from '../TopBox/TopBox';
import BottomBox from '../BottomBox/BottomBox';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Spinner } from '../Spinner/Spinner';
import errorImg from '../../images/error.png';
import emptyPhonebookImg from '../../images/no_contacts.png';
import {
  MainContent,
  ContactsTitle,
  Layout,
  NoContactsSectionTitle,
  ErrorSectionTitle,
  ErrorSectionText,
} from './App.styled';

export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const isNotContactListEmpty = data && data.length > 0;

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LogIn />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </>
  );
};

// <Layout>
//   <MainContent>
//     <TopBox>
//       <ContactForm />
//     </TopBox>
//     {isNotContactListEmpty && (
//       <BottomBox>
//         <div>
//           <ContactsTitle>Contacts</ContactsTitle>
//           <Filter />
//           <ContactList />
//         </div>
//       </BottomBox>
//     )}
//     {!isNotContactListEmpty && !error && !isLoading && (
//       <BottomBox>
//         <div>
//           <NoContactsSectionTitle>
//             No contacts yet!
//           </NoContactsSectionTitle>
//           <img src={emptyPhonebookImg} alt="No contacts" width={100} />
//         </div>
//       </BottomBox>
//     )}
//     {isLoading && (
//       <div>
//         <Spinner />
//       </div>
//     )}
//     {error && !isLoading && (
//       <BottomBox>
//         <div>
//           <ErrorSectionTitle>
//             Sorry, something went wrong!
//           </ErrorSectionTitle>
//           <ErrorSectionText style={{ marginBottom: '10px' }}>
//             Error loading the contacts
//           </ErrorSectionText>
//           <img src={errorImg} alt="Error" width={100} />
//         </div>
//       </BottomBox>
//     )}
//   </MainContent>
// </Layout>;
