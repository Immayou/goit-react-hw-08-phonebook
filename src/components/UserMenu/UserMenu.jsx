import { useDispatch } from 'react-redux';
import { FaFeather } from 'react-icons/fa';
import { logOut } from '../../redux/Auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import {
  HeaderUserText,
  HeaderButton,
  HeaderUser,
  UserMenuBox,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = e => {
    dispatch(logOut());
  };

  return (
    <UserMenuBox>
      <HeaderUserText>
        <span>Welcome, </span>
        <HeaderUser>{user.email}</HeaderUser>
      </HeaderUserText>
      <HeaderButton type="button" onClick={handleLogOut}>
        <FaFeather size={'15px'} style={{ marginRight: '5px' }} />
        <span>Logout</span>
      </HeaderButton>
    </UserMenuBox>
  );
};
