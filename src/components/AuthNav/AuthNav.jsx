import { HeaderButton, AuthNavBox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavBox>
      <HeaderButton to="registration">Register</HeaderButton>
      <HeaderButton to="login">Log in</HeaderButton>
    </AuthNavBox>
  );
};
