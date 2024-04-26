"use client";

import FileInput from "@/components/FileInput";
import { SocketResponse } from "@/types/Response/SocketResponse.type";
import socket from "@/utils/socket/socket";
import EmojiPicker from "emoji-picker-react";
import { FormEventHandler, useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

function MessageInputField() {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event: any) => {
    console.log(event);
    setMessage((prevMessage: string) => prevMessage + event.emoji);
    setShowPicker(false);
  };

  const sendMessage: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    socket.emit("sendMessage", message, (res: SocketResponse) => {
      console.log("sendMessageRds", res);
    });
    setMessage("");
  };

  return (
    <form
      className="absolute bottom-4  rounded-xl w-11/12 left-4 bg-bg-lightgray  "
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
