const noSpace = (x) => {
  //   test case noSpace('a a aaa'), 'aaaaa'
  return (x = x.replace(/\s+/g, ""));
};

// refactor
const noSpaces = (x) => {
  // assign a variable with empty string
  var string = "";

  // iterate over the x parameter
  for (let i = 0; i < x.length; i++) {
    // condition if x isnt equal to empty string sum string and x[i]
    if (x[i] !== " ") {
      string += x[i];
    }
    return string;
  }
};
