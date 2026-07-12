export type playerSelectionDTO = {
    spaceshipTexture: string;
    tailTexture: string;
}

export type PlayerSessionDTO = {
    playerId: string;
    playerName: string;
    playerSelectionDTO: playerSelectionDTO;
}

export type playerStateDTO = {
    playerId: string;
    playerName: string;
    isPlayerReady: boolean;
    playerSelection: playerSelectionDTO,
    playerSession: PlayerSessionDTO,
    isAlive: boolean;
    x: number,
    y: number,
    angle: number,
    isAddingTail: boolean
    tailTime: number;
}

