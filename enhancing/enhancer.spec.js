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

  describe("the success function", () => {
    it("should increase enhancement by 1 and if enhancement is 20 or more, it should not change", () => {
      const weapon2 = {
        name: "dagger",
        durability: 50,
        enhancement: 15
      };
      const weapon3 = {
        name: "bow",
        durability: 70,
        enhancement: 20
      };
      const successItem2 = {
        name: "dagger",
        durability: 50,
        enhancement: 16
      };
      const successItem3 = {
        name: "bow",
        durability: 70,
        enhancement: 20
      };

      const successWeapon2 = enhancer.succeed(weapon2);
      const successWeapon3 = enhancer.succeed(weapon3);

      expect(successWeapon2).toEqual(successItem2);
      expect(successWeapon3).toEqual(successItem3);
    });
  });
});
