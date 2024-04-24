import { MdOutlineErrorOutline } from "react-icons/md";

interface ErrorComponentProps {
  message?: string;
}

function ErrorComponent({ message = "Error" }: ErrorComponentProps) {
  return (
    <div className="flex justify-center items-center flex-col pt-20">
      <MdOutlineErrorOutline className="text-6xl mb-1" />
      <span className="font-bold text-lg">{message}</span>
    </div>
  );
}

export default ErrorComponent;
