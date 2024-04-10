import PropTypes from "prop-types";
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

Navigation.propTypes = {
  handleLoginClick: PropTypes.func.isRequired,
  handleRegisterClick: PropTypes.func.isRequired,
  authUser: PropTypes.object.isRequired,
};
