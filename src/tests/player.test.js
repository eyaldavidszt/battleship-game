import Player from "../player";

it("makes a player with a given name argument", () => {
  const player = Player({ name: "bob" });
  expect(player.getName()).toBe("bob");
});

it("makes a player with a gameboard", () => {
  const player = Player({ name: "bob" });
  expect(player.getBoard()).toBeTruthy();
});

it("makes a player with an attack method", () => {
  const player = Player({ name: "bob" });
  const opponent = Player({ name: "john" });
  player.attack(opponent.getBoard(), [0, 0]);
  const opponentBoard = opponent.getBoard().board;
  expect(opponentBoard[0][0].beenHit).toBe(true);
});
