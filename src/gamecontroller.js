/* eslint-disable prefer-const */
import Player from "./player";

export default function Gamecontroller(
  playerOneName = "Human",
  playerTwoName = "Robot"
) {
  let gameOver = false;
  let boardsFilled = false;
  const playerOne = Player({ name: playerOneName });
  const playerTwo = Player({ name: playerTwoName });
  let activePlayer = playerOne;
  let waitingPlayer = playerTwo;
  const changeActivePlayer = () => {
    if (activePlayer === playerOne) {
      activePlayer = playerTwo;
      waitingPlayer = playerOne;
    } else {
      activePlayer = playerOne;
      waitingPlayer = playerTwo;
    }
  };
  const playPlaceRound = (starting, ending) => {
    if (boardsFilled) throw new Error("all ships already placed");
    const oldShipCount = activePlayer.getBoard().allShips.length;
    activePlayer.getBoard().placeShip(starting, ending);
    if (
      activePlayer.getBoard().allShips.length >= 5 &&
      waitingPlayer.getBoard().allShips.length >= 5
    ) {
      boardsFilled = true;
    }
    if (activePlayer.getBoard().allShips.length > oldShipCount) {
      changeActivePlayer();
    }
  };
  const playRound = (coordinates) => {
    if (gameOver) throw new Error("game over");
    if (boardsFilled === false) throw new Error("not all ships placed");
    if (
      waitingPlayer.getBoard().board[coordinates[0]][coordinates[1]].beenHit ===
      true
    )
      return;
    waitingPlayer.getBoard().receiveAttack(coordinates);
    if (waitingPlayer.getBoard().allSunk()) {
      activePlayer.isWinner = true;
      gameOver = true;
    }
    changeActivePlayer();
  };
  const getActivePlayer = () => activePlayer;
  const getWaitingPlayer = () => waitingPlayer;

  let lastComputerHit = [];
  const computerPlayRound = () => {
    const possibleMoves = [];
    if (activePlayer !== playerTwo) return;
    if (lastComputerHit[0] + 1 < 10) {
      if (
        waitingPlayer.getBoard().board[lastComputerHit[0] + 1][
          lastComputerHit[1]
        ].beenHit !== true
      ) {
        possibleMoves.push([lastComputerHit[0] + 1, lastComputerHit[1]]);
      }
    }
    if (lastComputerHit[0] - 1 > -1) {
      if (
        waitingPlayer.getBoard().board[lastComputerHit[0] - 1][
          lastComputerHit[1]
        ].beenHit !== true
      ) {
        possibleMoves.push([lastComputerHit[0] - 1, lastComputerHit[1]]);
      }
    }
    if (lastComputerHit[1] + 1 < 10) {
      if (
        waitingPlayer.getBoard().board[lastComputerHit[0]][
          lastComputerHit[1] + 1
        ].beenHit !== true
      ) {
        possibleMoves.push([lastComputerHit[0], lastComputerHit[1] + 1]);
      }
    }
    if (lastComputerHit[1] - 1 > -1) {
      if (
        waitingPlayer.getBoard().board[lastComputerHit[0]][
          lastComputerHit[1] - 1
        ].beenHit !== true
      ) {
        possibleMoves.push([lastComputerHit[0], lastComputerHit[1] - 1]);
      }
    }
    // select random move from possibleMoves.
    if (possibleMoves.length !== 0) {
      //
      const index = Math.floor(Math.random() * possibleMoves.length);
      playRound(possibleMoves[index]);
      if (
        playerOne.getBoard().board[possibleMoves[index][0]][
          possibleMoves[index][1]
        ].shipCell !== null
      ) {
        lastComputerHit = possibleMoves[index];
      }
      return;
    }

    // else, random path (verify args)
    let keepGoing = true;
    let randX = 0;
    let randY = 0;
    while (keepGoing) {
      randX = Math.floor(Math.random() * 10);
      randY = Math.floor(Math.random() * 10);
      if (playerOne.getBoard().board[randX][randY].beenHit === false) {
        playRound([randX, randY]);
        keepGoing = false;
      }
    }
    // check if this hit scored
    if (playerOne.getBoard().board[randX][randY].shipCell !== null) {
      lastComputerHit = [randX, randY];
    }
  };
  const getHuman = () => playerOne;
  const getCPU = () => playerTwo;

  const computerPlayPlaceRound = () => {};
  //
  return {
    playRound,
    playPlaceRound,
    getActivePlayer,
    getWaitingPlayer,
    computerPlayRound,
    computerPlayPlaceRound,
    getHuman,
    getCPU,
    boardsFilled,
    gameOver,
  };
}
