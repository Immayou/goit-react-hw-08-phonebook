import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { SharedAppBar } from '../SharedAppBar/SharedAppBar';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { Spinner } from '../../components/Spinner/Spinner';

const Home = lazy(() => import('../../pages/Home/Home'));
const Registration = lazy(() =>
  import('../../pages/Registration/Registration')
);
const LogIn = lazy(() => import('../../pages/LogIn/LogIn'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <Routes>
      <Route path="/" element={<SharedAppBar />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={<RestrictedRoute component={LogIn} redirectTo="/contacts" />}
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute component={Registration} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
