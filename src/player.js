import Gameboard from "./gameboard";

export default function Player({ name }) {
  const isWinner = false;
  const gameboard = Gameboard();
  const getBoard = () => gameboard;
  const getName = () => name;
  const attack = (board, coords) => {
    board.receiveAttack(coords);
  };
  return {
    getName,
    getBoard,
    attack,
    isWinner,
  };
}
