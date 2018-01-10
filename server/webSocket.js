const WebSocket = require('ws');

const onMessage = (ws, wss, data) => {
  // if not JSON stringified error handle
  const message = JSON.parse(data); // do something with data from client
  console.log('recieved from client', data);
  ws.send(JSON.stringify(message));

  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      // send a message to all the other clients connected
      client.send(`recieved message: ${JSON.stringify(message)} from another client`);
    }
  });
};

const onConnect = (ws, wss) => {
  ws.on('message', data => onMessage(ws, wss, data));
};

module.exports = {
  onConnect,
};
