"use client";

import FileInput from "@/components/FileInput";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

interface MessageInputFieldProps {
  message: string;
  setMessage: (message: any) => void;
  sendMessage: (value: any) => void;
}

function MessageInputField({
  message,
  setMessage,
  sendMessage,
}: MessageInputFieldProps) {
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event: any, emojiObject: any) => {
    setMessage((prevMessage: any) => prevMessage + event.emoji);
    setShowPicker(false);
  };

  return (
    <form
      className="absolute bottom-4 w-11/12 left-4 bg-bg-lightgray  "
      onSubmit={sendMessage}
    >
      <input
        className="bg-bg-lightgray w-8/12 px-4 py-3 outline-none rounded-xl text-gray-400"
        placeholder="메시지를 입력하세요."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <div className="absolute top-2 right-4 flex items-center gap-x-3">
        <FaRegSmile
          onClick={() => setShowPicker((prev) => !prev)}
          className=" text-custom-gray cursor-pointer text-lg hover:text-gray-600 "
        />
        <FileInput />
        <button
          type="submit"
          disabled={message === ""}
          className="bg-lightgray px-2 py-2 rounded-lg "
        >
          <FiSend className=" text-white text-lg hover:text-gray-600 -translate-x-0.5" />
        </button>
      </div>
      {showPicker && <EmojiPicker onEmojiClick={onEmojiClick}></EmojiPicker>}
    </form>
  );
}

export default MessageInputField;
