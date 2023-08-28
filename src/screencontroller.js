/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
import Gamecontroller from "./gamecontroller";

export default function Screencontroller() {
  const game = Gamecontroller();
  const DOMLengths = [4, 3, 2, 2, 1];
  const DOMInstructions = [
    "Place carrier (length 5)",
    "Place battleship (length 4)",
    "Place cruiser (length 3)",
    "Place submarine (length 3",
    "Place destroyer (length 2)",
  ];
  let DOMIndex = 0;
  const DOMInstructor = document.querySelector(".instructions");
  DOMInstructor.textContent = DOMInstructions[DOMIndex];
  const boardsContainer = document.querySelector(".boards-container");
  const DOMboard1 = document.createElement("div");
  const DOMboard2 = document.createElement("div");
  const DOMBoards = [DOMboard1, DOMboard2];
  function DOMReceiveAttack(event) {
    // get dataset coordinates
    const row = parseInt(event.target.dataset.row);
    const cell = parseInt(event.target.dataset.cell);
    console.log(row, cell);
    if (game.getWaitingPlayer().getBoard().board[row][cell].beenHit === true)
      return;
    if (game.gameOver) return;
    try {
      game.playRound([row, cell]);
    } catch {
      DOMInstructor.textContent = "Game over! Player 2 wins!";
    }
    updateBoard();
    console.log(game.gameOver);

    if (game.gameOver === true) {
      // remove event listener from board.
      DOMBoards[1].removeEventListener("click", DOMReceiveAttack);
      return;
    }
    // generate random coords as long as theyre invalid...
    // eslint-disable-next-line no-constant-condition
    // while (true) {
    //   const randX = Math.floor(Math.random() * 10);
    //   const randY = Math.floor(Math.random() * 10);
    //   if (
    //     game.getWaitingPlayer().getBoard().board[randX][randY].beenHit === true
    //   ) {
    //     continue;
    //   }
    //   try {
    //     game.playRound([randX, randY]);
    //   } catch {
    //     DOMInstructor.textContent = "Game over! Human wins!";
    //   }
    //   break;
    // }
    try {
      game.computerPlayRound();
    } catch {
      DOMInstructor.textContent = "Game over! Player 1 wins!";
    }
    updateBoard();

    if (game.gameOver === true) {
      DOMBoards[1].removeEventListener("click", DOMReceiveAttack);
    }
  }
  const DOMShipPlace = (event) => {
    const row = parseInt(event.target.dataset.row);
    const cell = parseInt(event.target.dataset.cell);
    const starting = [row, cell];
    const ending = [row, cell];
    const angle = document.querySelector("#placement-angle").value;
    if (angle === "horizontal") {
      ending[1] += DOMLengths[DOMIndex];
    }
    if (angle === "vertical") {
      ending[0] += DOMLengths[DOMIndex];
    }
    for (let i = 0; i < 2; i += 1) {
      if (starting[i] > 9 || ending[i] > 9) return;
      if (starting[i] < 0 || ending[i] < 0) return;
    }
    // test here again
    if (starting[0] !== ending[0]) {
      // check every square in the path to see if bad. if bad, continue keyword
      const height = starting[1];
      for (let i = starting[0]; i <= ending[0]; i += 1) {
        if (game.getHuman().getBoard().board[i][height].shipCell !== null) {
          // eslint-disable-next-line no-continue
          return;
        }
      }
    }
    if (starting[1] !== ending[1]) {
      const x = starting[0];
      for (
        let i = Math.min(starting[1], ending[1]);
        i <= Math.max(starting[1], ending[1]);
        i += 1
      ) {
        if (game.getHuman().getBoard().board[x][i].shipCell !== null) return;
      }
    }

    game.playPlaceRound(starting, ending);
    // here make logic for new starting ending
    // I CAN DO A WHILE LOOP!
    const oldLength = game.getCPU().getBoard().allShips.length;
    while (game.getCPU().getBoard().allShips.length === oldLength) {
      const randX = Math.floor(Math.random() * 9);
      const randY = Math.floor(Math.random() * 9);
      const randAngles = ["vertical", "horizontal"];
      const randAngle = randAngles[Math.floor(Math.random() * 2)];
      const cpuStarting = [randX, randY];
      const cpuEnding = [randX, randY];
      if (randAngle === "horizontal") {
        cpuEnding[1] += DOMLengths[DOMIndex];
      }
      if (randAngle === "vertical") {
        cpuEnding[0] += DOMLengths[DOMIndex];
      }
      if (cpuEnding[0] > 9) continue;
      if (cpuEnding[1] > 9) continue;

      // check coordinate validity...
      // if angle is vertical... start[0] !== end[0]
      let count = 0;
      if (cpuStarting[0] !== cpuEnding[0]) {
        // check every square in the path to see if bad. if bad, continue keyword
        const height = cpuStarting[1];
        for (let i = cpuStarting[0]; i <= cpuEnding[0]; i += 1) {
          if (game.getCPU().getBoard().board[i][height].shipCell !== null) {
            // eslint-disable-next-line no-continue
            count += 1;
          }
        }
      }
      if (cpuStarting[1] !== cpuEnding[1]) {
        const x = cpuStarting[0];
        for (
          let i = Math.min(cpuStarting[1], cpuEnding[1]);
          i <= Math.max(cpuStarting[1], cpuEnding[1]);
          i += 1
        ) {
          if (game.getCPU().getBoard().board[x][i].shipCell !== null)
            count += 1;
        }
      }
      if (count !== 0) {
        continue;
      }

      game.playPlaceRound(cpuStarting, cpuEnding);
    }
    DOMIndex += 1;
    DOMInstructor.textContent = DOMInstructions[DOMIndex] || "";
    if (DOMIndex === 5) {
      //
      DOMBoards.forEach((board, index) => {
        board.removeEventListener("click", DOMShipPlace);
        if (index === 1) {
          board.addEventListener("click", DOMReceiveAttack);
        }
        boardsContainer.appendChild(DOMboard2);
        DOMInstructor.textContent = "Sink your opponent!";
      });
    }
    // eslint-disable-next-line no-use-before-define
    updateBoard();
  };
  DOMBoards.forEach((DOMBoard) => {
    DOMBoard.classList.add("board");
    DOMBoard.addEventListener("click", DOMShipPlace);
  });
  boardsContainer.appendChild(DOMboard1);

  function updateBoard() {
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
          // if (boardIndex === 0) {
          if (cell.shipCell !== null) {
            DOMCell.style.backgroundColor = "red";
          }
          // }
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
  }

  updateBoard();
}
