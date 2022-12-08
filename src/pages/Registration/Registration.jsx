import { useDispatch } from 'react-redux';
import { FaFeather } from 'react-icons/fa';
import { register } from '../../redux/authOperations';
import {
  Form,
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

const Registration = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <main>
        <Layout>
          <Form onSubmit={handleSubmit}>
            <WrapperLeft></WrapperLeft>
            <WrapperRight></WrapperRight>
            <WrapperCircle></WrapperCircle>
            <FormContent>
              <FormTitle>Let's register</FormTitle>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput type="text" id="name" name="name" />
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <FormInput type="text" id="email" name="email" />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormPasswordInput
                type="password"
                id="password"
                name="password"
              />
              <FormButton type="submit">
                <FaFeather style={{ marginRight: '5px' }} />
                <span>Ok</span>
              </FormButton>
            </FormContent>
          </Form>
        </Layout>
      </main>
    </>
  );
};

export default Registration;
