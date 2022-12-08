import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './SharedAppBar.styled';
import * as React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

export const SharedAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
