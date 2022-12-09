import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/Auth/authSelectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};
