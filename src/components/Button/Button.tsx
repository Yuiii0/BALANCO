import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "white" | "black";
}

function Button({
  color = "white",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="border border-gray-800 py-4 px-12 lg-max:px-6 lg-max:py-3.5 text-[15px] sm-max:text-sm font-semibold w-full bg-white transition hover:bg-black hover:text-white rounded-sm active:bg-black active:text-white data-[color=black]:text-white data-[color=black]:bg-black  data-[color=black]:hover:bg-white data-[color=black]:hover:text-black data-[color=black]:active:text-black data-[color=black]:active:bg-white"
      data-color={color}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
