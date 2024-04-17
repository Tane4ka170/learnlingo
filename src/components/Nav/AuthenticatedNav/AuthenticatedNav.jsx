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

export const AuthenticatedNav = () => {
  const handleLogOUt = () => {
    signOut(auth);
  };

  return (
    <>
      <NavList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/teachers">Teachers</StyledLink>
        </li>
        <li>
          <StyledLink to="/favorites">Favorites</StyledLink>
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
