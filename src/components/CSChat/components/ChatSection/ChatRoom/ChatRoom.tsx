import { FaAngleLeft } from "react-icons/fa6";
import CustomerProfile from "../CSProfile";

interface ChattingRoomProps {
  setShowChatRoom: (value: boolean) => void;
}

function ChatRoom({ setShowChatRoom }: ChattingRoomProps) {
  const handleClickGoBack = () => {
    setShowChatRoom(false);
  };
  return (
    <section className="w-[390px] h-[610px] bg-white shadow-xl fixed bottom-28 rounded-2xl   right-8 ">
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
      <div className="bg-bg-lightgray h-full overflow-hidden"></div>
    </section>
  );
}

export default ChatRoom;
