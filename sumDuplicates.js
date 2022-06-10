/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
I'am to sum together repeating numbers in an array
I'am to look through the list of integers [2,4,2,-1,3,4,2]
find which numbers repeat [2,4]
then sum together 6 
an empty array is 0 
an array with all negative numbers is 0
First I would create two variables z with zero to sum the count and x to represent the duplicate
I would then run a  for of loop 
I would the sum variable x with iterable 
then reassign the variable z with Math.max(z,x) this is to find total of the two variables
then use a condition if the duplicate integers is less then zero return 0

*/
const maxSequence = (arr) => {
  var totalSum = 0;
  let duplicateSum = 0;

  for (let item of arr) {
    duplicateSum += item;
    totalSum = Math.max(totalSum, duplicateSum);
    if (duplicateSum < 0) duplicateSum = 0;
  }
  return totalSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
