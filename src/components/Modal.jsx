import React, { createContext, useContext, useState } from "react";
import modalStyles from "./css/modal.module.css";

const modalContext = createContext();
export const useModal = () => useContext(modalContext);

export default function Modal({
  backdrop = "midium",
  isCloseToBackdrop = true,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const values = {
    isModalOpen: isOpen,
    openModal,
    closeModal,
  };

  return (
    <modalContext.Provider value={values}>
      {isOpen && (
        <div
          className={`${modalStyles.backdrop} ${
            modalStyles[`backdrop-${backdrop}`]
          }`}
          onClick={isCloseToBackdrop ? closeModal : () => {}}
        >
          {children}
        </div>
      )}
    </modalContext.Provider>
  );
}
