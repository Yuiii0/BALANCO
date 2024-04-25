function MessageList({ messageList, user }) {
  console.log("messageList,,,,", messageList);
  return (
    <div>
      {messageList.map((message, index) => {
        return (
          <div key={message._id} className="text-sm">
            {message.user.name === "system" ? (
              <div className="flex flex-col">
                <span className="text-custom-gray fs-xs px-2">Balanco</span>
                <p className="bg-hover-lightgray px-3 mb-3 text-wrap py-2 rounded-lg max-w-[200px] ">
                  {message.chat}
                </p>
              </div>
            ) : (
              <div className="flex justify-end">
                <p className="bg-bg-pink px-3 py-2 text-wrap mb-3 rounded-lg max-w-[200px]">
                  {message.chat}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;
