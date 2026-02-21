import { Dish } from "../db/schema";
import { getRandomDishFromDishesArray } from "../utils";

const dishes: Dish[] = [
  {
    id: "1",
    name: "Ibijumbu",
    type: "main",
  },
];

describe("getRandomDishFromDishesArray", () => {
  it("should give random dish", () => {
    const dish = getRandomDishFromDishesArray(dishes);

    expect(dish).toBe("1");
  });
});
