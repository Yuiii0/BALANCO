import React from "react";

interface ErrorMessageProps {
  children: React.ReactNode;
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div
      className={`text-xs  px-2 mb-2 ${
        children ? "text-red-500 opacity-100" : "opacity-0"
      } h-2 `}
    >
      {children || ""}
    </div>
  );
}

export default ErrorMessage;
