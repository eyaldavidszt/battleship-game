import Ship from "../ship";

it("Initializes ship with correct length?", () => {
  const ship = Ship({ length: 3 });
  expect(ship.getLength()).toBe(3);
});

it("sinks ship when hits = length", () => {
  const ship = Ship({ length: 3 });
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
