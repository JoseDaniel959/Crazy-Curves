import type { playerState } from "./types.ts";

export const updatePlayerState = (playerState: playerState, data: any): playerState => {
    let newPlayerState: playerState = playerState;
    newPlayerState = updatePlayerAddingTail(newPlayerState);
    if (data.input == 'right') {
        newPlayerState.angle += 0.025;
    }
    else if (data.input == 'left') {
        newPlayerState.angle -= 0.025;
    }

    newPlayerState.x += Math.cos(newPlayerState.angle) * 1;
    newPlayerState.y += Math.sin(newPlayerState.angle) * 1;

    return newPlayerState;


}

export const updatePlayerAddingTail = (playerState: playerState): playerState => {
    let randomNumber = Math.floor(Math.random() * 50)
    

    if (playerState.isAddingTail) {
        playerState.tailTime -= 1;
       playerState.isAddingTail = playerState.tailTime === 0 ? false : true;
    }
    else if (randomNumber === 1) {
        playerState.isAddingTail = true;
        playerState.tailTime = 250;
    }

    return playerState;
}