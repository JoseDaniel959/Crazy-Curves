import type { inputDTO, playerState } from "./types.ts";

export const updatePlayerState = (playerState: playerState, data: inputDTO): playerState => {
    let { deltaTime} = data;
    let newPlayerState: playerState = playerState;
    console.log(data)
    newPlayerState = updatePlayerAddingTail(newPlayerState);
    if (data.input == 'right') {
        newPlayerState.angle += 0.025;
    }
    else if (data.input == 'left') {
        newPlayerState.angle -= 0.025;
    }

    newPlayerState.x += Math.cos(newPlayerState.angle) * deltaTime * 0.15
    newPlayerState.y += Math.sin(newPlayerState.angle) * deltaTime * 0.15
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