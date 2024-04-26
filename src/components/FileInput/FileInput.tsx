import { PropsWithChildren } from "react";
import { FiPaperclip } from "react-icons/fi";

interface FileInputProps {
  color?: "gray" | "black";
}

function FileInput({
  color = "gray",
  ...props
}: PropsWithChildren<FileInputProps>) {
  return (
    <div>
      <label
        htmlFor="input-file"
        className="text-custom-gray cursor-pointer data-[color=black]:text-black hover:text-gray-600 text-lg"
      >
        <FiPaperclip />
      </label>
      <input
        type="file"
        id="input-file"
        accept="images/*"
        className="hidden"
        data-color={color}
        {...props}
      />
    </div>
  );
}

export default FileInput;
