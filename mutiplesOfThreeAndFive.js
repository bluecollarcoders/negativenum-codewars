/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.


*/

const solution = (number) => {
  /*
if we list all the natural numbers below 10 
9,8,7,6,5,4,3,2,1
that are multiples of 3 or 5
3,5,9,6
the sum of these multiples is 23

finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number X passed in . if the number is negative return 0
test case
 multiples(10) >>> 23
 nultiples(20) >>> 
 19,18,17,16,15,14,13,12,11,10
 multiples of 3 or 5 
 18,15,16,

*/
  // first assign a variable with the count of 0 to total the sum
  var count = 0;
  // run a for loop over the number, we don't use length because it's not an array and we would'nt use bracket notation because we are not looping over an array
  for (let i = 1; i < number; i++) {
    // we use some logic if the iterator modulus(remainder) 3 is equal to zero or iterator modulus (remainder) 5 is equal to 0 add one to the sum
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }
  // then return the accumalator
  return count;
};
