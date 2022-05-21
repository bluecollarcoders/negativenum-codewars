const noSpace = (x) => {
  //   test case noSpace('a a aaa'), 'aaaaa'
  return (x = x.replace(/\s+/g, ""));
};

// refactor
const noSpaces = (x) => {
  // assign a variable with empty string
  var result = "";
  for (var index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      result += x[index];
    }
  }
  return result;
};
