import { ReactNode } from "react";

type Sizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface ITitleProps {
  children?: ReactNode;
  variant: Sizes;
  classNameProp: string;
  addText?: string;
}

export const Title = ({ children, variant, classNameProp, addText, ...props }: ITitleProps) => {

  const Tag = `${variant}` satisfies keyof JSX.IntrinsicElements;

  return (
    <>
      {addText ? (
        <div className={classNameProp}>
          <Tag {...props}>{children}</Tag>
          <p>{addText}</p>
        </div>
      ) : (
        <Tag {...props}>{children}</Tag>
      )}
    </>
  );
};
