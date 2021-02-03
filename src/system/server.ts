import { loadEnvData } from '../../utils/load-env-data';
import env from '../../utils/load-env-data';
import { Server, Socket } from 'socket.io';
import { config } from '../config/system';
import { data } from '../state/store';

export const initServer = () => {
  initWs();
};

const initWs = () => {
  const io = new Server(8081, { cors: { origin: '*' } });

  io.on('connect', (socket: Socket) => {
    console.log(`connect ${socket.id}`.gray);

    socket.on('disconnect', () => {
      console.log(`disconnect ${socket.id}`);
    });
  });

  setInterval(() => {
    io.emit('post_network_data', data);
  }, config.pingInterval);

  console.log('Socket emmiter online'.bgGreen.black);
};
