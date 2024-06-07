import { ReactNode } from "react";
import cn from "classnames";
import styles from "./CustomLink.module.scss"
import { AddressLink } from "types/Hrefs";


interface CustomLinkProps {
  to: AddressLink,
  children: ReactNode,
  variant: "rectangle",
  classNameProp: string,
}



export const CustomLink = ({to, children, variant, classNameProp}: CustomLinkProps) => {

  const mainCn = cn(
    styles.base,
    styles[variant],
    classNameProp
  )

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className={mainCn}>{children}</a>
  )
}
