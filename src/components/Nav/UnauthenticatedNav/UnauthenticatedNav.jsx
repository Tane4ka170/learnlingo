import { FiLogIn } from 'react-icons/fi';
import {
  LogButton,
  NavList,
  RegisterButton,
  StyledLink,
  UserList,
  UserSection,
} from '../AuthenticatedNav/AuthenticatedNav.styled';

const UnauthenticatedNav = ({ onClickLogin, handleRegisterClick }) => {
  return (
    <>
      <NavList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/teachers">Teachers</StyledLink>
        </li>
      </NavList>
      <UserSection>
        <UserList>
          <li>
            <LogButton type="button" onClick={onClickLogin}>
              <FiLogIn size="20px" color="#F4C550" />
              Log in
            </LogButton>
          </li>
          <li>
            <RegisterButton type="button" onClick={handleRegisterClick}>
              Registration
            </RegisterButton>
          </li>
        </UserList>
      </UserSection>
    </>
  );
};

export default UnauthenticatedNav;
