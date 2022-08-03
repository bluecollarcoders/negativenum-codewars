/*

Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)


*/

const maxProduct = (numbers, size) => {
  var acc = 1;
  numbers = numbers.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < size; i++) {
    acc *= numbers[i];
  }

  return acc;
};

console.log(maxProduct([4, 3, 5], 2));
