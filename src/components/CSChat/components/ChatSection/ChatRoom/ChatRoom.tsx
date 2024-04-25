"use client";

import FileInput from "@/components/FileInput";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import CustomerProfile from "../CSProfile";
import ChatMessage from "./ChatMessage";

interface ChattingRoomProps {
  setShowChatRoom: (value: boolean) => void;
}

function ChatRoom({ setShowChatRoom }: ChattingRoomProps) {
  const [showPicker, setShowPicker] = useState(false);
  const [message, setMessage] = useState("");
  const handleClickGoBack = () => {
    setShowChatRoom(false);
  };

  const onEmojiClick = (event: any, emojiObject: any) => {
    setMessage((prevMessage) => prevMessage + event.emoji);
    setShowPicker(false);
  };

  console.log("showPicker", showPicker);
  console.log("message", message);
  return (
    <section className="w-[390px] h-[610px]  bg-white shadow-xl fixed bottom-28 rounded-2xl   right-8 ">
      <div className="flex gap-x-8 px-4 py-4 items-center">
        <button onClick={handleClickGoBack}>
          <FaAngleLeft className="text-xl text-gray-700" />
        </button>

        <div className="flex gap-x-3">
          <CustomerProfile />
          <div>
            <p className="font-bold">Balanco</p>
            <p className="text-custom-gray text-sm ">
              몇 분 내 답변을 받으실 수 있어요
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 py-10">
        <ChatMessage message="무엇을 도와드릴까요? 🙂🙏🏻" sender="Balanco" />
        <div className="absolute bottom-4 w-11/12 left-4 ">
          <input
            className=" bg-bg-lightgray w-full px-4 py-3 outline-none rounded-xl  hover:bg-hover-lightgray transition text-gray-400"
            placeholder="메시지를 입력하세요."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <div className="absolute top-4 right-4 flex items-center gap-x-3">
            <FaRegSmile
              onClick={() => setShowPicker((prev) => !prev)}
              className=" text-custom-gray cursor-pointer text-lg hover:text-gray-600 "
            />
            <FileInput />
          </div>
          {showPicker && (
            <EmojiPicker onEmojiClick={onEmojiClick}></EmojiPicker>
          )}
        </div>
      </div>
    </section>
  );
}

export default ChatRoom;
