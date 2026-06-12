import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ClientSocketEvents } from '../game/src/Socket/ClientSocketEvents.ts'
import { ServerSocketEvents } from '../game/src/Socket/ServerSocketEvents.ts'
import type { PlayerSessionDTO, playerState } from "./types.ts";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const app = express();
const httpServer = createServer(app);
const port = 3000
const io = new Server(httpServer);

let userId: number = 1;
const globalState = new Map<string, playerState>();

let playersOnline: PlayerSessionDTO[] = [];

app.use(express.static(__dirname + '/public'));

//Main route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});



io.on("connection", (socket:Socket) => {
  const newPlayerId = socket.id
  
  //Listener when user enters to the MainMenu Scene
  socket.on(ClientSocketEvents.addNewPlayer, (newPlayer) => {
    newPlayer.playerId = newPlayerId;
    playersOnline.push(newPlayer);
    io.emit(ServerSocketEvents.playerCreated, newPlayer)

  })

  //Listener when all user has pressed the startbutton
  socket.on(ClientSocketEvents.initMatch, (isReady:boolean) => {
    playersOnline.some((playerOnline) => {
      if (playerOnline.playerId === newPlayerId) {
        playerOnline.isPlayerReady = isReady;
      }
    })

    globalState.set(
      newPlayerId,
      {
        id: newPlayerId,
        isAlive: true,
        x: Math.floor(Math.random() * 900) + 10,
        y: Math.floor(Math.random() * 900) + 10,
        angle: Math.floor(Math.random() * 360),
        isAddingTail:false
      }
    )


    const playerNotReadyFound = playersOnline.some((playerOnline) => playerOnline.isPlayerReady === false)
    if (playerNotReadyFound === false) {
      io.emit(ServerSocketEvents.addPlayersToGlobalState, globalState.values().toArray())

      io.emit(ServerSocketEvents.startMatch, true)
    }

  })

  //Listener to get all players connected in MainMenu
  socket.on(ClientSocketEvents.getAllPlayers, () => {
    io.emit(ServerSocketEvents.getAllPlayers, playersOnline)
  })


  //Listener to send player coordinates according to their sent input data
  socket.on(ClientSocketEvents.sendInput, (data) => {
    let playerPosition = globalState.get(newPlayerId);

    if (playerPosition) {
      if (data.input == 'right') {
        playerPosition.angle += 0.05;
      }
      else if (data.input == 'left') {
        playerPosition.angle -= 0.05;
      }

      playerPosition.x += Math.cos(playerPosition.angle) * 2;
      playerPosition.y += Math.sin(playerPosition.angle) * 2;
      globalState.set(newPlayerId, playerPosition)


    }

    io.emit("a", globalState.get(newPlayerId));

  })


  //Listener to the disconnect event
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

  return playersOnline

}


