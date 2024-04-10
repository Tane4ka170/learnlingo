import { useEffect } from "react";
import { ModalContainer, ModalContent } from "./Modal.styled";
import CloseSvg from "../../img/icons/close.svg";

const modalTarget = document.getElementById;
const Modal = ({ children, togglePanel }) => {
  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      togglePanel();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        togglePanel();
      }
    };
    const body = document.querySelector("body");
    body.style.position = "fixed";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.position = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePanel]);
  return (
    (
      <ModalContainer onMouseDown={onOverlayClick}>
        <ModalContent>
          <button>
            <img src={CloseSvg} alt="" />
          </button>
          {children}
        </ModalContent>
      </ModalContainer>
    ),
    modalTarget
  );
};

export default Modal;
