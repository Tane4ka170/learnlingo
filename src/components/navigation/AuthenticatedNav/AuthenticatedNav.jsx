import LogOutSvg from "../../../img/icons/log-out.svg";
import { auth } from "../../../firebase/config";
import { signOut } from "firebase/auth";
import {
  LogButton,
  LogIcon,
  NavList,
  StyledLink,
  UserList,
  UserSection,
  Username,
} from "./AuthenticatedNav.styled";

export const AuthenticatedNav = () => {
  const currentUser = auth.currentUser;

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
          <Username>{currentUser.displayName}</Username>
          <li>
            <LogButton onClick={handleLogOUt}>
              <LogIcon src={LogOutSvg} alt="" />
            </LogButton>
          </li>
        </UserList>
      </UserSection>
    </>
  );
};

export default AuthenticatedNav;
