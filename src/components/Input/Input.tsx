import { ComponentProps, useId } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-800">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="border w-full px-6 py-3 focus:border-black outline-none transition rounded-sm border-gray-300"
        {...props}
      />
    </div>
  );
}

export default Input;
