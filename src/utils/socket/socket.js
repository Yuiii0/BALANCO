import { io } from "socket.io-client";

const socket = io("http://localhost:5001", {
  reconnectionAttempts: 2,
  reconnectionDelay: 3000,
});
export default socket;
