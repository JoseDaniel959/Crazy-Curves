import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ClientSocketEvents } from '../game/src/Socket/ClientSocketEvents.ts'
import { ServerSocketEvents } from '../game/src/Socket/ServerSocketEvents.ts'
import type { PlayerSessionDTO, playerState } from "./types.ts";
import { updatePlayerState } from "./PhysicsFunctions.ts"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const app = express();
const httpServer = createServer(app);
const port = 3000
const io = new Server(httpServer);

const globalState = new Map<string, playerState>();

let playersOnline: PlayerSessionDTO[] = [];

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
    playersOnline.push(newPlayer);
    io.emit(ServerSocketEvents.playerCreated, newPlayer)

  })

  //Listener when all user has pressed the startbutton
  socket.on(ClientSocketEvents.initMatch, (isReady: boolean) => {
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
        isAddingTail: false,
        tailTime: 250,
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

  //Listener to update player selection component
  socket.on(ClientSocketEvents.updatePlayerSelection, (newPlayerSelection: Partial<PlayerSessionDTO>) => {
    playersOnline = playersOnline.map((playerOnline: PlayerSessionDTO) => {
      if (playerOnline.playerId === newPlayerSelection.playerId && newPlayerSelection.playerSelectionDTO) {
        playerOnline.playerSelectionDTO = newPlayerSelection.playerSelectionDTO
        io.emit(ServerSocketEvents.newPlayerSelection, playerOnline)
        console.log("mando este jugador al frontend")
        console.log(playersOnline)
      }
      return playerOnline
    })

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


