import { FaRegSmile } from "react-icons/fa";
import CustomerProfile from "../CSProfile";

interface HomeProps {
  setShowChatRoom: (value: boolean) => void;
}

function CSHome({ setShowChatRoom }: HomeProps) {
  const handleClickMessage = () => {
    setShowChatRoom(true);
  };

  return (
    <section className="w-[390px] h-[610px] bg-bg-lightgray shadow-xl fixed bottom-28 rounded-2xl   right-8 ">
      <h2 className="py-8 text-3xl font-bold text-center">BALANCO</h2>
      <div className="w-11/12 mx-auto bg-white px-6 py-4 rounded-2xl">
        <div className="flex gap-x-3">
          <CustomerProfile />
          <div>
            <p className="font-bold">Blanco</p>
            <p className="text-[15px]">안녕하세요 Balanco입니다☺️</p>
            <p className="text-[15px]">
              문의사항이 있으시다면, 아래 채팅을 남겨주시면 답변해드리겠습니다
              🙌🏻
            </p>
          </div>
        </div>
        <div onClick={handleClickMessage} className="mt-4 cursor-pointer">
          <div className="bg-bg-lightgray px-4 py-3 rounded-xl  hover:bg-hover-lightgray transition text-gray-400 flex items-center justify-between ">
            <div>메시지를 입력하세요.</div>
            <FaRegSmile className="-translate-y-0.5" />
          </div>
          <div className="flex items-center justify-center mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="Iconstyled__Icon-sc-1iqwu2g-0 iCEngM"
              data-testid="bezier-react-icon"
              color="green"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="text-custom-gray text-[13px]">
              몇 분 내 답변을 받으실 수 있어요
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSHome;
