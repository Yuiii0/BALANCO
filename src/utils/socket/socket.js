import { io } from "socket.io-client";

const socket = io("http://localhost:5001"); //연결하고싶은 BE 주소
export default socket;
