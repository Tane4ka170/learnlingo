import { auth } from '../../../firebase/config';
import { signOut } from 'firebase/auth';

import {
  LogButton,
  NavList,
  StyledLink,
  UserList,
  UserSection,
} from './AuthenticatedNav.styled';
import { FiLogOut } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

export const AuthenticatedNav = () => {
  const handleLogOUt = () => {
    signOut(auth);
  };
  const location = useLocation();
  return (
    <>
      <NavList>
        <li>
          <StyledLink
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/teachers"
            className={location.pathname === '/teachers' ? 'active' : ''}
          >
            Teachers
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/favorites"
            className={location.pathname === '/favorites' ? 'active' : ''}
          >
            Favorites
          </StyledLink>
        </li>
      </NavList>
      <UserSection>
        <UserList>
          <li>
            <LogButton onClick={handleLogOUt}>
              <FiLogOut size="20px" color="#F4C550" />
              Log out
            </LogButton>
          </li>
        </UserList>
      </UserSection>
    </>
  );
};

export default AuthenticatedNav;
