/*Given a number n, find the sum of digits in all numbers from 1 to n. 
testcase input 5
output 1 to 5 = 15 
first assign a variable with 0 to sum all the integers to given number
then loop over the parameter make sure the iterator is = to 1 
if the iterator is less then or equal to n increment by 1 
then sum all of the integers togehter

*/
const numbers = (n) => {
  var sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(numbers(5));
