const enhancer = require("./enhancer.js");
// test away!

describe("the enhancer", () => {
  describe("the repair function", () => {
    it("should restore the durability", () => {
      // arrange
      const weapon1 = {
        name: "longsword",
        durability: 50,
        enhancement: 10
      };

      const expected = {
        name: "longsword",
        durability: 100,
        enhancement: 10
      };
      // act
      const repairedItem = enhancer.repair(weapon1);

      // assert
      expect(repairedItem).toEqual(expected);
    });
  });
});
