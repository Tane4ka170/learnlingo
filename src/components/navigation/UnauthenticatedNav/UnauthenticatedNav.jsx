import LogInSvg from "../../../img/icons/log-in-01.svg";
import PropTypes from "prop-types";
import {
  LogButton,
  LogIcon,
  NavList,
  RegisterButton,
  StyledLink,
  UserList,
  UserSection,
} from "../AuthenticatedNav/AuthenticatedNav.styled";

const UnauthenticatedNav = ({ handleLoginClick, handleRegisterClick }) => {
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
            <LogButton type="button" onClick={handleLoginClick}>
              <LogIcon src={LogInSvg} alt="log in" />
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

UnauthenticatedNav.propTypes = {
  handleLoginClick: PropTypes.func.isRequired,
  handleRegisterClick: PropTypes.func.isRequired,
};
