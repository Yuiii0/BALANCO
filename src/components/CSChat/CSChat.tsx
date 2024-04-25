"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import ChatSection from "./components/ChatSection/ChatSetction";

function CSChat() {
  const [showChat, setShowChat] = useState(false);

  const handleClickChat = () => {
    setShowChat((prev) => !prev);
  };

  return (
    <aside>
      <div>{showChat && <ChatSection />}</div>
      <button
        onClick={handleClickChat}
        className="bg-gray-700 z-30 fixed bottom-10 right-8 rounded-2xl -translate-y-2 w-14 h-14 flex justify-center items-center"
      >
        {showChat ? (
          <IoClose className="text-4xl text-white" />
        ) : (
          <RiCustomerService2Fill className="text-4xl text-white" />
        )}
      </button>
    </aside>
  );
}

export default CSChat;
