/*

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

I need to loop through array and find if the array is descending or ascending 
if it's not return no

testcase [1,2,3,7 >>>> true
first I need to create two variables 
ascending & descending assign them with the value yes
then run a for loop

*/

const isSortedAndHow = (array) => {
  var ascending = true;
  var descending = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) descending = false;
    if (array[i] < array[i - 1]) ascending = false;
  }
  return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
};

console.log(isSortedAndHow([5, 4, 3, 2, 1]));
