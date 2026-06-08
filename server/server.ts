import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ClientSocketEvents } from '../game/src/Socket/ClientSocketEvents.ts'
import { ServerSocketEvents } from '../game/src/Socket/ServerSocketEvents.ts'
import type { PlayerSessionDTO } from "./types.ts";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const app = express();
const httpServer = createServer(app);
const port = 3000
const io = new Server(httpServer);

let userId: number = 1;
let globalState: any = {}

let playersOnline: PlayerSessionDTO[] = [];

app.use(express.static(__dirname + '/public'));

//Main route
app.get('/', function (req, res) {
  console.log("entraro???")
  res.sendFile(__dirname + '/index.html');
});



io.on("connection", (socket) => {
  const newPlayerId = socket.id
  socket.on(ClientSocketEvents.addNewPlayer, (newPlayer) => {
    newPlayer.playerId = newPlayerId;
    playersOnline.push(newPlayer);
    io.emit(ServerSocketEvents.playerCreated, newPlayer)

  })

  socket.once(ClientSocketEvents.initMatch, (isReady) => {
    playersOnline.some((playerOnline) => {
      if (playerOnline.playerId === newPlayerId) {
        playerOnline.isPlayerReady = isReady;
      }
    })

    globalState[newPlayerId] = {
      x: Math.floor(Math.random() * 900) + 10,
      y: Math.floor(Math.random() * 900) + 10,
      angle: Math.floor(Math.random() * 360),
    }


    const playerNotReadyFound = playersOnline.some((playerOnline) => playerOnline.isPlayerReady === false)
    console.log("jugadores online",playersOnline)
    console.log(playerNotReadyFound)
    if (playerNotReadyFound === false) {
      io.emit(ServerSocketEvents.startMatch, true)
    }

  })

  socket.on(ClientSocketEvents.getAllPlayers, () => {
    console.log("entro")

    io.emit(ServerSocketEvents.getAllPlayers, playersOnline)
  })


  socket.on(ClientSocketEvents.sendInput, (data) => {
    let player = globalState[newPlayerId];
    console.log(globalState)

    if (data.input == 'right') {
      globalState[newPlayerId].angle += 0.05;
    }
    else if (data.input == 'left') {
      globalState[newPlayerId].angle -= 0.05;
    }

    globalState[newPlayerId].x += Math.cos(globalState[newPlayerId].angle) * 2;
    globalState[newPlayerId].y += Math.sin(globalState[newPlayerId].angle) * 2;

    io.emit("a", globalState[newPlayerId]);

  })



  socket.on('disconnect', (socket) => {
    console.log("se desconeto", newPlayerId)
    playersOnline = playersOnline.filter((playerOnline) => playerOnline.playerId !== newPlayerId)
    io.emit(ServerSocketEvents.removePlayerFromMenu, newPlayerId);
    io.emit(ServerSocketEvents.getAllPlayers, playersOnline);
  });
});

httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

const getAllPlayers = () => {
  let playersOnline: any[] = [];
  io.sockets.sockets.keys().forEach(function (value, index) {
    playersOnline.push({ playerId: value });
  });
  console.log(playersOnline)

  return playersOnline

}


