import AuthenticatedNav from "./AuthenticatedNav/AuthenticatedNav";
import UnauthenticatedNav from "./UnauthenticatedNav/UnauthenticatedNav";

export const Navigation = ({
  handleLoginClick,
  handleRegisterClick,
  authUser,
}) => {
  return authUser ? (
    <AuthenticatedNav />
  ) : (
    <UnauthenticatedNav
      onClickLogin={handleLoginClick}
      onClickRegister={handleRegisterClick}
    />
  );
};
