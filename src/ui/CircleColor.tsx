import { HTMLAttributes } from "react";

interface Iprops extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: Iprops) => {
  return (
    <span
      className={`rounded-full  w-5 h-5 cursor-pointer  `}
      style={{ background: color }}
      {...rest}
    />
  );
};

export default CircleColor;
