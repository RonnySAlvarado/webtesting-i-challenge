const enhancer = require("./enhancer.js");
// test away!

describe("the enhancer", () => {
  describe("the repair function", () => {
    it("should restore the durability", () => {
      // arrange
      const longsword = {};

      // act
      const result = enhancer.repair(longsword);

      // assert
      expect(result).toBe(100);
    });
  });
});
