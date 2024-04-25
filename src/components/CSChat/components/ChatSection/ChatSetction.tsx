import { useState } from "react";
import CSHome from "./CSHome/CSHome";
import ChatRoom from "./ChatRoom";

function ChatSection() {
  const [showChatRoom, setShowChatRoom] = useState(false);

  return (
    <>
      {showChatRoom ? (
        <ChatRoom setShowChatRoom={setShowChatRoom} />
      ) : (
        <CSHome setShowChatRoom={setShowChatRoom} />
      )}
    </>
  );
}

export default ChatSection;
