export type playerSelectionDTO = {
    spaceshipTexture: string;
    tailTexture: string;
}

export type PlayerSessionDTO = {
    playerId: string;
    playerName : string;
    playerSelectionDTO: playerSelectionDTO;
    isPlayerReady: boolean
}


interface PlayerSelectionInMenu {
    spaceshipTexture: string
    tailTexture: string
}

interface PlayerPositionInMap {
    id: string,
    positionX: number,
    positionY:number,
    angle: number,
}