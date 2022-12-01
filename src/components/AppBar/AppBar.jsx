import { Link, Outlet } from 'react-router-dom';
import { Header } from '../AppBar/AppBar.styled';

const AppBar = ({ children }) => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="registration">Register</Link>
          <Link to="login">Log in</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default AppBar;
