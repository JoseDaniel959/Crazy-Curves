import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {ClientSocketEvents} from '../game/src/Socket/ClientSocketEvents.ts'
import {ServerSocketEvents} from '../game/src/Socket/ServerSocketEvents.ts'
console.log(ClientSocketEvents.getAllPlayersFromServer)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const app = express();
const httpServer = createServer(app);
const port = 3000
const io = new Server(httpServer);
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on("connection", (socket) => {
  console.log("entro a conection")
  socket.on(ClientSocketEvents.newPlayer, () => {
    console.log("escuché")
    io.emit(ServerSocketEvents.getAllPlayers,getAllPlayers())
  })
});

httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

const getAllPlayers = () => {
  let playersOnline: string[] = [];
  io.sockets.sockets.keys().forEach(function (value, index) {
    var player = value;
    playersOnline.push(player);
  });
  return playersOnline;

}


