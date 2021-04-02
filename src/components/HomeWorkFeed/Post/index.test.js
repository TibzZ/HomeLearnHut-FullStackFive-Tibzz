
const {
    changeFilter,
    showAllHwks,
  } = require("../Post/index.js");
  
  
  test(`This function test the filters are working`, () => {
    // We need to define filter1 as f1, filter2 as f2
    // Arrange
    // Act
    // Assert
    
    const actual = Navload({James});
    const expected = [f1, f2];
  
    expect(actual).toBe(expected);
  });
  