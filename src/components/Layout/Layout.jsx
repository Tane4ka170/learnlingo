import { NavLink, Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Navigation } from "../navigation/Navigation";
import { Header, LayoutContainer, LinkLogo, List, Logo } from "./Layout.styled";
import UkraineLogo from "../../img/icons/ukraine.svg";

const Layout = ({ authUser }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen((prevState) => !prevState);
  };

  function handleLoginClick() {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
    togglePanel();
  }
  function handleRegisterClick() {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
    togglePanel();
  }

  const handleClose = () => {
    setIsPanelOpen(false);
  };
  return (
    <LayoutContainer>
      <Header>
        <List>
          <li>
            <NavLink to="/">
              <Logo src={UkraineLogo} alt="logo" />
            </NavLink>
          </li>
          <li>
            <LinkLogo to="/">LearnLingo</LinkLogo>
          </li>
        </List>
        <Navigation
          authUser={authUser}
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
        />
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />

      {/* {isPanelOpen && (
        <Modal togglePanel={togglePanel}>
          {isLoginModalOpen && <Login handleClose={handleClose} />}
          {isRegisterModalOpen && <Register handleClose={handleClose} />}
        </Modal>
      )} */}
    </LayoutContainer>
  );
};

export default Layout;
