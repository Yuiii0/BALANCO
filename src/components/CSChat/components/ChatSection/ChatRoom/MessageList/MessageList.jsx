function MessageList({ messageList, user }) {
  console.log("messageList,,,,", messageList);
  return (
    <div className="h-[425px] overflow-scroll scrollbar-hide">
      {messageList.map((message) => {
        return (
          <div key={message._id} className="text-sm flex ">
            {message.user.name === "system" ? (
              <div className="flex flex-col justify-start">
                <span className="text-custom-gray fs-xs px-2">Balanco</span>
                <p className="bg-hover-lightgray px-3 mb-3 py-2 rounded-lg max-w-[200px] ">
                  {message.chat}
                </p>
              </div>
            ) : (
              <div className="ml-auto">
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
