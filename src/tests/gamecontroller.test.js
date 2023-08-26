import Gamecontroller from "../gamecontroller";

it("gets correct active player", () => {
  const game = Gamecontroller();
  expect(game.getActivePlayer().getName()).toBe("Human");
});

it("rejects a playRound if not all ships placed", () => {
  const game = Gamecontroller();
  expect(() => game.playRound([0, 2])).toThrow("not all ships placed");
});

it("returns truthy from computerPlayRound", () => {
  const game = Gamecontroller();
  expect(game.computerPlayRound).toBeTruthy();
});
