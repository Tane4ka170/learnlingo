import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseButton, ModalContainer, ModalContent } from "./Modal.styled";
import CloseSvg from "../../img/icons/close.svg";

const modalTarget = document.getElementById("portal");

const Modal = ({ children, toggleModal }) => {
  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };
    const body = document.querySelector("body");
    body.style.position = "fixed";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.position = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <ModalContainer onMouseDown={onOverlayClick}>
      <ModalContent>
        <CloseButton onClick={toggleModal}>
          <img src={CloseSvg} alt="" />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>,
    modalTarget
  );
};

export default Modal;
