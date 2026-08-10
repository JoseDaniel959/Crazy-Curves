import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ClientSocketEvents } from '../game/src/Socket/ClientSocketEvents.ts'
import { ServerSocketEvents } from '../game/src/Socket/ServerSocketEvents.ts'
import type { playerStateDTO } from "./types.ts";
import { updatePlayerState } from "./PhysicsFunctions.ts"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const app = express();
const httpServer = createServer(app);
const port = 3000
const io = new Server(httpServer);

const globalState = new Map<string, playerStateDTO>();

app.use(express.static(__dirname + '/public'));

//Main route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});



io.on("connection", (socket: Socket) => {
  const newPlayerId = socket.id

  //Listener when user enters to the MainMenu Scene
  socket.on(ClientSocketEvents.addNewPlayer, (newPlayer) => {
    newPlayer.playerId = newPlayerId;
    globalState.set(newPlayerId, newPlayer)
    io.emit(ServerSocketEvents.playerCreated, newPlayer)

  })

  //Listener when all user has pressed the startbutton
  socket.on(ClientSocketEvents.initMatch, (isReady: boolean) => {

    let playerState = globalState.get(newPlayerId);
    if (playerState) {
      playerState.isPlayerReady = true;
      globalState.set(newPlayerId, {
        ...playerState,
        isPlayerReady: isReady,
        isAlive: true,
        x: Math.floor(Math.random() * 900) + 10,
        y: Math.floor(Math.random() * 900) + 10,
        angle: Math.floor(Math.random() * 360),
        isAddingTail: false,
        tailTime: 250,
      })
    }



    let playerNotReadyFound = false;
    for (const [key, playerStateDTO] of globalState) {
      if (playerStateDTO.isPlayerReady === false) {
        playerNotReadyFound = true
        break;
      }
    }
    if (playerNotReadyFound === false) {
      io.emit(ServerSocketEvents.startMatch, true)
      console.log(globalState)
    }

  })

  //Listener to get all players connected in MainMenu
  socket.on(ClientSocketEvents.getAllPlayers, () => {
    io.emit(ServerSocketEvents.getAllPlayers,[...globalState.values()])
  })

  //Listener to update player selection component
  socket.on(ClientSocketEvents.updatePlayerSelection, (newPlayerSelection) => {


    let playerStateDTO = globalState.get(newPlayerId);
    if (playerStateDTO) {
      globalState.set(newPlayerId, {
        ...playerStateDTO,
        playerSelection: newPlayerSelection?.playerSelectionDTO
      })
    }
    io.emit(ServerSocketEvents.newPlayerSelection, globalState.get(newPlayerId))
  })

  //Listener to send player coordinates according to their sent input data
  socket.on(ClientSocketEvents.sendInput, (data) => {
    let playerState = globalState.get(newPlayerId);
    if (playerState) {
      const newPlayerState = updatePlayerState(playerState, data);
      globalState.set(newPlayerId, newPlayerState)

    }
    io.emit(ServerSocketEvents.updatePlayerCoordinates, globalState.get(newPlayerId));

  })


  //Listener to the disconnect event
  socket.on('disconnect', (socket) => {
    console.log("se desconeto", newPlayerId)
    globalState.delete(newPlayerId)
    io.emit(ServerSocketEvents.removePlayerFromMenu, newPlayerId);
    io.emit(ServerSocketEvents.getAllPlayers, globalState);
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


