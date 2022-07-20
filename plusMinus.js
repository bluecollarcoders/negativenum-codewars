/*

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.


*/

function plusMinus(arr) {
  // Write your code here

  /**
   *
   * var postivie = 0;
   * var negative = 0;
   * var zero = 0;
   *
   * I would write some conditional logic
   * i
   *
   */

  var postive = 0;
  var negative = 0;
  var zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      postive++;
    } else if (arr[i] < 0) {
      negative++;
    } else if (arr[i] === 0) {
      zero++;
    }
  }

  var lines = (postive / arr.length).toFixed(6) + "";
  var lineTwo = (negative / arr.length).toFixed(6) + "";
  var lineThree = (zero / arr.length).toFixed(6) + "";

  console.log(lines);
  console.log(lineTwo);
  console.log(lineThree);
}

const plusMinusTwo = (arr) => {
  var positive = 0;
  var negative = 0;
  var zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else if (arr[i] === 0) {
      zero++;
    }
  }

  const lineOne = `${(positive / arr.length).toFixed(6)}`;
  const lineTwo = `${(negative / arr.length).toFixed(6)}`;
  const lineThree = `${(zero / arr.length).toFixed(6)}`;

  console.log(lineOne);
  console.log(lineTwo);
  console.log(lineThree);
};
