const express = require('express');
const router = require('./routes');
const http = require('http');
const WebSocket = require('ws');

const app = express();
app.use(router);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
server.on('request', app);

const onMessage = (ws, data) => {
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

const onConnect = (ws) => {
  ws.on('message', data => onMessage(ws, data));
};

wss.on('connection', onConnect);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`listenting on port ${PORT}`));
