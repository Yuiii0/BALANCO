interface ChatMessageProps {
  message: string;
  sender?: string;
}

function ChatMessage({ message, sender }: ChatMessageProps) {
  return (
    <div>
      <div className="text-custom-gray text-sm px-2 pb-3">{sender}</div>
      <span className="bg-hover-lightgray px-4 py-3 rounded-2xl inline">
        {message}
      </span>
    </div>
  );
}

export default ChatMessage;
