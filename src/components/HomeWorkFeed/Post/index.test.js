
const {
    changeFilter,
    showAllHwks,
  } = require("../Post/index.js");
  
  
  test(`This function test the filters are working`, () => {
    const actual = Navload({James});
    const expected = "Greetings, James";
  
    expect(actual).toBe(expected);
  });
  