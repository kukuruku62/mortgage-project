import cn from "classnames";
import { MouseEvent, useState } from "react";
import { createPortal } from "react-dom";
import { ModalMenu } from "shared/ModalMenu/ModalMenu";
import styles from "./MenuButton.module.scss";

export const MenuButton = () => {

  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const activeStyleButton = cn(styles.burgerButton, styles.active);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalActive(!isModalActive);
  };


  return (
    <>
      <button
        onClick={handleClick}
        className={isModalActive ? activeStyleButton : styles.burgerButton}
        aria-expanded={!isModalActive}
        aria-label={`${isModalActive ? "press to close menu" : "press to open menu"}`}
        aria-haspopup="menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      {createPortal(
        <ModalMenu isModalActive={isModalActive} setIsModalActive={setIsModalActive} />,
        document.getElementById("modal-menu")!
      )}
    </>
  );
};
