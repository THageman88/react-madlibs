const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it should add commas to numbers", () => {
    expect(addCommas(1000)).toBe("1,000");
    expect(addCommas(-1000)).toBe("-1,000");
    expect(addCommas(14000000)).toBe("14,000,000")
  });
});


