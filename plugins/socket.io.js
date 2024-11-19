import io from 'socket.io-client';

export default (context, inject) => {
  const socket = io(process.env.SOCKET, {
    transports: ["websocket", "polling"],
    withCredentials: true,
  });
  inject('socket', socket);
};
