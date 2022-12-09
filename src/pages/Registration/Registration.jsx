import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { FaFeather } from 'react-icons/fa';
import { register } from '../../redux/Auth/authOperations';
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
  name: yup.string().min(3).max(15).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
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
                <FormTitle>Let's register</FormTitle>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput type="text" id="name" name="name" />
                <ErrorNotification name="name" component="p" />
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <FormInput type="email" id="email" name="email" />
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

export default Registration;
