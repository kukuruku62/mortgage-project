import cn from "classnames";
import { ReactNode } from "react";
import { RoutesEnum } from "types/Hrefs";
import { Link } from "react-router-dom";
import { CustomLinkWithIcon } from "shared/UI/CustomLink/CustomLink";
import styles from "./ActionToolbar.module.scss";

interface IActionToolbar {
  children?: ReactNode;
  classNameProp?: string;
}
// TODO: change RoutesEnum.Home to a real link

export const ActionToolbar = ({ children, classNameProp }: IActionToolbar) => {
  return (
    <>
      {children ? (
        <div className={cn(classNameProp)}>
          <span></span>
          <div>
            {children}
            <div className={styles.linksContainer}>
              <CustomLinkWithIcon to={RoutesEnum.Home} variant="rectangleWithArrow">
                Get started
              </CustomLinkWithIcon>
              <Link to={RoutesEnum.Home} className={styles.scheduleLink}>
                Schedule a time
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={cn(classNameProp)}>
          <span></span>
          <div>
            <CustomLinkWithIcon to={RoutesEnum.Home} variant="rectangleWithArrow">
              Get started
            </CustomLinkWithIcon>
            <Link to={RoutesEnum.Home} className={styles.scheduleLink}>
              Schedule a time
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
