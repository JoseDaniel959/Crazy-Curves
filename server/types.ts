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

export type playerState = {
    id: string,
    isAlive: boolean;
    x: number,
    y: number,
    angle: number,
    isAddingTail: boolean
}