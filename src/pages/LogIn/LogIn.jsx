import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { FaFeather } from 'react-icons/fa';
import { login } from '../../redux/Auth/authOperations';
import {
  ErrorNotification,
  FormBox,
  WrapperLeft,
  WrapperRight,
  WrapperCircle,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  FormPasswordInput,
  FormButton,
  Layout,
} from '../LogIn/LogIn.styled';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

const LogIn = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <>
      <main>
        <ToastContainer autoClose={3000} />
        <Layout>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            <FormBox>
              <WrapperLeft></WrapperLeft>
              <WrapperRight></WrapperRight>
              <WrapperCircle></WrapperCircle>
              <FormContent>
                <FormTitle>Let's log in</FormTitle>
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <FormInput type="text" id="email" name="email" />
                <ErrorNotification name="email" component="p" />
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormPasswordInput
                  type="password"
                  id="password"
                  name="password"
                />
                <ErrorNotification name="password" component="p" />
                <FormButton type="submit">
                  <FaFeather style={{ marginRight: '5px' }} />
                  <span>Ok</span>
                </FormButton>
              </FormContent>
            </FormBox>
          </Formik>
        </Layout>
      </main>
    </>
  );
};

export default LogIn;
