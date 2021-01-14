import io from 'socket.io-client';
import toastr from 'toastr';

export const socketIo = () => {
  const socket = io('https://lab.lectrum.io', {
    path: '/ws',
  });

  socket.on('connect', () => {
    console.log('connected');
  });

  socket.emit('login', `ironbank:${'alex@alex'}`);

  // socket.on('login', (data) => {
  //   toastr.info(data);
  // });

  socket.on('notification', (data) => {
    const text = JSON.parse(data);
    toastr.info(text.message);
  });

  socket.on('order', (data) => {
    const text = JSON.parse(data);
    toastr.info('Выполнено!');
  });

  // console.log(socket.disconnected);
};

