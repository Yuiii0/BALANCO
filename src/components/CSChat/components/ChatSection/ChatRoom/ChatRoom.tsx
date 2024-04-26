"use client";

import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import socket from "../../../../../utils/socket/socket.js";
import CustomerProfile from "../CSProfile";
import MessageInputField from "./MessageInputField";
import MessageList from "./MessageList/MessageList.jsx";

interface ChatRoomProps {
  setShowChatRoom: (value: boolean) => void;
}

function ChatRoom({ setShowChatRoom }: ChatRoomProps) {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleClickGoBack = () => {
    setShowChatRoom(false);
  };

  useEffect(() => {
    //socket이 메시지를 듣는다
    socket.on("message", (message) => {
      console.log("res", message);
      setMessageList((prev) => prev.concat(message));
    });
    askUserName();

    return () => {
      socket.off("message");
    };
  }, []);

  const askUserName = () => {
    if (!user) {
      const userName = prompt("이름 입력");
      console.log("userName", userName);
      //서버에게 말하는 함수 emit(대화 제목,보낼내용,콜백함수)
      socket.emit("login", userName, (res: any) => {
        //서버에서 ok가 오면,(닉네임이 잘오면)
        if (res?.ok) {
          setUser(res.data);
        }
      });
    }
  };
  const sendMessage = (event: any) => {
    event.preventDefault();
    socket.emit("sendMessage", message, (res: any) => {
      console.log("sendMessageRds", res);
    });
    setMessage("");
  };
  // console.log("user", user);
  // console.log("message", message);
  // console.log("messageList", messageList);
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
        {/* <ChatMessage message="무엇을 도와드릴까요? 🙂🙏🏻" sender="Balanco" /> */}
        <MessageList messageList={messageList} user={user} />
        <MessageInputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </section>
  );
}

export default ChatRoom;
