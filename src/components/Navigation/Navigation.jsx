import { useAuth } from '../../hooks/useAuth';
import { HeaderButton, HeaderBox } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderBox>
        <HeaderButton to="/">Home</HeaderButton>
        {isLoggedIn && <HeaderButton to="/contacts">Contacts</HeaderButton>}
      </HeaderBox>
    </>
  );
};
