/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.







*/

const sumMix = (x) => {
  var total = 0;

  for (let i = 0; i < x.length; i++) {
    total += parseInt(x[i]);
  }

  return total;
};

const sumMixTwo = (x) => {
  sum = 0;
  for (let i of x) {
    sum += parseInt(i);
  }

  return sum;
};
