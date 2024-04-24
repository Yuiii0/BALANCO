import { MdOutlineErrorOutline } from "react-icons/md";

function ErrorComponent() {
  return (
    <div className="flex justify-center items-center flex-col pt-20">
      <MdOutlineErrorOutline className="text-6xl" />
      <span className="font-bold text-lg">Error</span>
    </div>
  );
}

export default ErrorComponent;
