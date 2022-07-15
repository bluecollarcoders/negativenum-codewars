/*
DESCRIPTION:
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

I need to look through an array [6,2,1,8,10]
I need to negate the highest num and the lowest number
[6,2,1,8,10] >>> 16 I'm to ignore 10 and 1 
if the array is empty return 0 and if their is one element.

first thing to do is create an empty variable to sum the new elements
then we are to loop over the array parameter 
we write a condition 


*/

const sumArray = (array) => {
  var sum = 0;

  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  }

  array = array.sort((a, b) => {
    return a - b;
  });

  for (let i = 1; i < array.length - 1; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(sumArray([6, 2, 1, 8, 10]));
