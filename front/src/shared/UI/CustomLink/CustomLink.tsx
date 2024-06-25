import cn from "classnames";
import { ReactNode, ComponentType } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import styles from "./CustomLink.module.scss";

const contentComponent = {
  rectangleWithArrow: FaLongArrowAltRight,
  triangle: GoTriangleRight,
} satisfies Record<string, ComponentType>;

type CommonCustomLinkProps = {
  to: string;
  variant: keyof typeof contentComponent;
  classNameProp?: string;
};

type CustomLinkPropsWithoutAddText = CommonCustomLinkProps & {
  children: ReactNode;
  textFromQuery?: never;
  title?: never;
};

type CustomLinkPropsWithAddText = CommonCustomLinkProps & {
  textFromQuery: string | undefined;
  title?: string;
  children?: never;
};

type CustomLinkPropsWithAddTextNoTitle = CommonCustomLinkProps & {
  textFromQuery: string | undefined;
  title?: never;
  children?: never;
};

type CustomLinkProps = CustomLinkPropsWithAddText | CustomLinkPropsWithoutAddText | CustomLinkPropsWithAddTextNoTitle;

export const CustomLinkWithIcon = ({
  to,
  children,
  variant,
  classNameProp,
  textFromQuery,
  title,
}: CustomLinkProps) => {
  const Icon = contentComponent[variant];

  return (
    <>
      {(title && textFromQuery) && (
        <div className={cn(styles.mainContainer, classNameProp)}>
          <p className={styles.title}>{title}</p>
          <div className={styles.textIconContainer}>
            <a 
              href={to} target="_blank" 
              rel="noopener noreferrer" 
              className={styles[variant]}>
              <Icon />
            </a>
            <p>{textFromQuery}</p>
          </div>
        </div>
      )}

      {(textFromQuery && !title ) && (
        <div className={cn(classNameProp)}>
          <a 
            href={to} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles[variant]}>
            <Icon />
          </a>
          <p>{textFromQuery}</p>
        </div>
      )}

      {(!title && !textFromQuery) && (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(styles[variant], classNameProp)}>
          {children}
          <Icon />
        </a>
      )}
    </>
  );
};
