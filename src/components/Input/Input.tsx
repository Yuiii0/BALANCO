"use client";
import Image from "next/image";
import { forwardRef, useId, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  showIconPath?: string;
  hideIconPath?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, showIconPath, hideIconPath, ...props }, ref) => {
    const [inputType, setInputType] = useState("password");
    const [iconPath, setIconPath] = useState(hideIconPath);

    const id = useId();

    const togglePasswordVisibility = () => {
      setInputType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
      setIconPath((prevPath) =>
        prevPath === hideIconPath ? showIconPath : hideIconPath
      );
    };

    return (
      <div>
        {label && id && (
          <label htmlFor={id} className="text-sm text-gray-800">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            id={id}
            className={` border w-full px-6 sm-max:px-3 sm-max:py-2 py-3 border-gray-300 outline-none transition rounded-md ${
              error ? "focus:border-red-500" : "focus:border-black "
            }`}
            {...props}
          />
          {iconPath && (
            <div
              onClick={togglePasswordVisibility}
              className="cursor-pointer absolute right-3 -translate-y-1/2 top-1/2"
            >
              <Image
                src={iconPath}
                alt="pw-visibility"
                width={20}
                height={20}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
