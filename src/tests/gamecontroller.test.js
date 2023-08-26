import Gamecontroller from "../gamecontroller";

it("gets correct active player", () => {
  const game = Gamecontroller();
  expect(game.getActivePlayer().getName()).toBe("Human");
});
