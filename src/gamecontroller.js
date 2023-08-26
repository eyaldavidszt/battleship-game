/* eslint-disable prefer-const */
import Player from "./player";

export default function Gamecontroller(
  playerOneName = "Human",
  playerTwoName = "Robot"
) {
  let gameOver = false;
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
  const playRound = (coordinates) => {
    if (gameOver) return;
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
    getActivePlayer,
  };
}
