const descendingOrder = (n) => {
  //   convert number toSring()
  var convert = n.toString();

  //   split parameter
  var newNum = convert.split("");

  //   sort reverse
  var reverse = newNum.sort((a, b) => b - a);
  //   Convert string back to integer
  return Number(reverse.join(""));
};
