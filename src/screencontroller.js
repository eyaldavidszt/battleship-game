/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
import Gamecontroller from "./gamecontroller";

export default function Screencontroller() {
  const game = Gamecontroller();
  const DOMLengths = [4, 3, 2, 2, 1];
  const lengthIndex = 0;
  const boardsContainer = document.querySelector(".boards-container");
  const DOMboard1 = document.createElement("div");
  const DOMboard2 = document.createElement("div");
  const DOMBoards = [DOMboard1, DOMboard2];
  DOMBoards.forEach((DOMBoard) => {
    DOMBoard.classList.add("board");
  });
  boardsContainer.appendChild(DOMboard1);
  boardsContainer.appendChild(DOMboard2);

  const updateBoard = () => {
    const humanBoard = game.getHuman().getBoard().board;
    const computerBoard = game.getCPU().getBoard().board;
    const boards = [humanBoard, computerBoard];

    boards.forEach((board, boardIndex) => {
      DOMBoards[boardIndex].replaceChildren();
      board.forEach((row, rowIndex) => {
        const DOMRow = document.createElement("div");
        row.forEach((cell, cellIndex) => {
          const DOMCell = document.createElement("button");
          DOMCell.dataset.row = `${rowIndex}`;
          DOMCell.dataset.cell = `${cellIndex}`;
          if (boardIndex === 0) {
            if (cell.shipCell !== null) {
              DOMCell.style.backgroundColor = "red";
            }
          }
          if (cell.beenHit === true) {
            DOMCell.innerHTML = "&times;";
            if (cell.shipCell !== null) {
              DOMCell.style.backgroundColor = "red";
            }
          }
          DOMRow.appendChild(DOMCell);
        });
        DOMBoards[boardIndex].appendChild(DOMRow);
      });
    });
  };
  // this is the bug.
  game.getCPU().getBoard().placeShip([3, 3], [3, 5]);
  game.getCPU().getBoard().receiveAttack([3, 3]);
  game.getHuman().getBoard().placeShip([3, 3], [3, 5]);

  console.log(game.getCPU().getBoard().board);

  updateBoard();
}
