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
    try {
      activePlayer.getBoard().placeShip(starting, ending);
    } catch {
      return;
    }
    if (
      activePlayer.getBoard().allShips >= 5 &&
      waitingPlayer.getBoard().allShips >= 5
    ) {
      boardsFilled = true;
    }
    changeActivePlayer();
  };
  const playRound = (coordinates) => {
    // if (boardsFilled[0] === false || boardsFilled[2] === false) return;
    if (gameOver) throw new Error("game over");
    if (boardsFilled === false) throw new Error("not all ships placed");
    waitingPlayer.receiveAttack(coordinates);
    if (waitingPlayer.allSunk()) {
      activePlayer.isWinner = true;
      gameOver = true;
    }
    changeActivePlayer();
  };
  const getActivePlayer = () => activePlayer;
  return {
    playRound,
    playPlaceRound,
    getActivePlayer,
  };
}
