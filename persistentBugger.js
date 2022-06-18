/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

testcase is 39 >> 3
I would assign a variable with zero 
I would loop over the parameter num
modulus / num 
*/

const persistence = (num) => {
  var sum = 0;
  while (num.toString().length !== 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);
    sum++;
  }
  return sum;
};

console.log(persistence(39));
