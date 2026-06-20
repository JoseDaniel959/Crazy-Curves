export type playerSelectionDTO = {
    playerId: string,
    spaceshipTexture: string;
    tailTexture: string;
}

export type PlayerSessionDTO = {
    playerId: string;
    playerName : string;
    playerSelectionDTO: playerSelectionDTO;
}

export type playerStateDTO = {
    id: string,
    x: number,
    y: number,
    angle: number,

}