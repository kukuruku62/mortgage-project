import Logo from "assets/svg/logo-colored.svg";
import { Dispatch, MouseEvent, SetStateAction, useEffect, useRef } from "react";
import { RoutesEnum } from "types/Hrefs";
import { NavLink } from "react-router-dom";
import { ActionToolbar } from "shared/ActionToolbar/ActionToolbar";
import styles from "./ModalMenu.module.scss";


interface IModalMenuProps {
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

export const ModalMenu = ({ isModalActive, setIsModalActive }: IModalMenuProps) => {

  const listMenuLinks = [
    {
      id: "1",
      title: "Your teachers",
      link: RoutesEnum.Home,
    },
    {
      id: "2",
      title: "Your mortgage journey",
      link: RoutesEnum.Home,
    },
    {
      id: "3",
      title: "What our customers say",
      link: RoutesEnum.Home,
    },
    {
      id: "4",
      title: "Blog",
      link: RoutesEnum.Home,
    },
    {
      id: "5",
      title: "Ebook",
      link: RoutesEnum.Home,
    },
    {
      id: "6",
      title: "Webinar",
      link: RoutesEnum.Home,
    },
  ];

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isModalActive) {
      dialogRef.current?.show();
      document.body.classList.add(`${styles.lock}`);
    }

    if (!isModalActive) {
      document.body.classList.remove(`${styles.lock}`);
      dialogRef.current?.close();
    }
  }, [isModalActive]);

  const handleClick = (e: MouseEvent) => {
    if(e.target instanceof HTMLAnchorElement) {
      setIsModalActive(false)
    }
  }


  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <img src={Logo} alt="Logo new mortgage funding" />
          <nav>
            <ul className={styles.listLinks} onClick={handleClick}>
              {listMenuLinks.map(({ id, link, title }) => (
                <li key={id}>
                  <NavLink
                    to={link}
                    // TODO: check the class change after solving the issue with the MenuButton placement and adding other pages
                    className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ActionToolbar classNameProp={styles.menuModalToolbar} />
        </div>
      </div>
    </dialog>
  );
};
