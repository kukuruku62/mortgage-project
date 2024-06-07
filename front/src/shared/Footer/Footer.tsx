import Logo from "assets/svg/logo-white.svg";
import { ListLinks } from "./components/ListLinks/ListLinks";
import { RoutesEnum } from "types/Hrefs";
import { contactsData, copyrightText, educationData, legalData, textsData } from "./components/ListLinks/data";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";



export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topPart}>
            <img src={Logo} alt="Logo new mortgage funding company" />
            <Link to={RoutesEnum.Home} className={styles.link}>
              <p>Schedule a time</p>
            </Link>
          </div>
          <span className={styles.separator}></span>
          <div className={styles.middlePart}>
            <ListLinks {...contactsData} />
            <ListLinks {...educationData} />
            <ListLinks {...legalData} />
            <ListLinks {...textsData} classNameProp={styles.text} />
          </div>
          <span className={styles.separator}></span>
          <div className={styles.lowerPart}>
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
