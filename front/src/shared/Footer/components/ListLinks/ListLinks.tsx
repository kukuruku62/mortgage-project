import { Link } from "react-router-dom";
import { IListLinksProps } from "types/Footer";
import cn from "classnames";
import styles from "./ListLinks.module.scss";

export const ListLinks = ({ title, items, classNameProp }: IListLinksProps) => {
  return (
    <div className={cn(styles.container, classNameProp)}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <ul className={styles.list} role="list">
        {items.map(({ text, link, id }) => (
          <li className={styles.item} key={id}>
            {link ? (
              <Link to={link} target="_blank" rel="noopener noreferrer" >
                <p>{text}</p>
              </Link>
            ) : (
              <p>{text}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
