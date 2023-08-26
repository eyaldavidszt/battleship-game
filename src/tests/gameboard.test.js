import Gameboard from "../gameboard";

it("places a ship at correct coordinates and reports if all sunk?", () => {
  const board = Gameboard();
  board.placeShip([0, 0], [0, 2]);

  board.receiveAttack([0, 0]);
  board.receiveAttack([0, 1]);
  board.receiveAttack([0, 2]);

  expect(board.allSunk()).toBe(true);
});

it("places a ship at correct coordinates and reports if all sunk?", () => {
  const board = Gameboard();
  board.placeShip([2, 0], [0, 0]);

  board.receiveAttack([2, 0]);
  board.receiveAttack([1, 0]);
  board.receiveAttack([0, 0]);

  expect(board.allSunk()).toBe(true);
});

it("places multiple ships at correct coordinates and reports if all sunk?", () => {
  const board = Gameboard();
  board.placeShip([2, 0], [0, 0]);
  board.placeShip([4, 4], [4, 3]);

  board.receiveAttack([2, 0]);
  board.receiveAttack([1, 0]);
  board.receiveAttack([0, 0]);
  board.receiveAttack([4, 4]);

  expect(board.allSunk()).toBe(false);
});

it("reject bad placeShip inputs?", () => {
  const board = Gameboard();
  expect(() => board.placeShip([0, 0], [3, 2])).toThrow(
    "Ship must be straightly aligned"
  );
});

it("reject bad placeShip inputs?", () => {
  const board = Gameboard();
  expect(() => board.placeShip([1, 1], [4, 7])).toThrow(
    "Ship must be straightly aligned"
  );
});

it("reject bad length?", () => {
  const board = Gameboard();
  expect(() => board.placeShip([1, 1], [1, 9])).toThrow("Invalid ship length");
});
