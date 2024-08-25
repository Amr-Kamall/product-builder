import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  className: string;
  onClick: () => void;
}
const Button = ({ children, className, ...rest }: Iprops) => {
  return (
    <button className={`${className} rounded-md`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
