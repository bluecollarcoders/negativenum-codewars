// jaden case

String.prototype.toJadenCase = function () {
  //   assign 'this' keyword to a variable and split string into an array
  var result = this.split(" ");

  //   loop through the array changing first character of each item uppercase & adding it to the remaing letters in each item
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
  }
  //   return items joined back together in a string
  return result.join(" ");
};
