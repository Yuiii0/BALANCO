import { forwardRef, useId } from "react";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    console.log(error);
    const id = useId();
    return (
      <div>
        <label htmlFor={id} className="text-sm text-gray-800">
          {label}
        </label>
        <input
          ref={ref}
          type="text"
          id={id}
          className={`border w-full px-6 py-3 border-gray-300 outline-none transition rounded-md ${
            error ? "focus:border-red-500" : "focus:border-black "
          }`}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
