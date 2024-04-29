"use client";

import { useAuthStore } from "@/stores/auth/authStore";
import { SocketResponse } from "@/types/Response/SocketResponse.type";
import socket from "@/utils/socket/socket";
import { memo, useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import CustomerProfile from "../CSProfile";
import MessageInputField from "./MessageInputField";
import MessageList from "./MessageList/MessageList.jsx";

interface ChatRoomProps {
  setShowChatRoom: (value: boolean) => void;
}

const ChatRoom = memo(function ChatRoom({ setShowChatRoom }: ChatRoomProps) {
  const [user, setUser] = useState(null);
  const [messageList, setMessageList] = useState<any[]>([]);

  const auth = useAuthStore();
  const handleClickGoBack = () => {
    setShowChatRoom(false);
  };
  let userName = "undefined" || auth.email;

  useEffect(() => {
    socket.emit("login", userName, (res: SocketResponse) => {
      if (res?.ok) {
        setUser(res.data);
      }
    });

    socket.on("message", (message) => {
      setMessageList((prev) => [...prev, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div className="z-50 w-[390px] h-[610px] bg-white shadow-xl fixed bottom-28 rounded-2xl right-8">
      <div className="flex gap-x-8 px-4 py-4 items-center">
        <div onClick={handleClickGoBack}>
          <FaAngleLeft className="text-xl text-gray-700" />
        </div>
        <div className="flex gap-x-3">
          <CustomerProfile />
          <div>
            <p className="font-bold">Balanco</p>
            <p className="text-custom-gray text-sm">
              몇 분 내 답변을 받으실 수 있어요
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 py-10 flex flex-col">
        <MessageList messageList={messageList} />
        <MessageInputField />
      </div>
    </div>
  );
});

export default ChatRoom;
