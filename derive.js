/*
This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:

The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0

so the output is >> (7,8)
The function should multiply the two numbers and then substract one from the exponenet >>> 56 the exponent is 8 so now its 7
I would first change the parameters c,e 
I then would create an empty string 
I would multiple c and e >> 56 + e - 1
 nameLessVar = "";
nameLessVar = c * e;
subtract = e - 1 
return `${namelessvar}x^${subtract}`


*/

const derive = (c, e) => {
  var multiple = c * e;
  var substract = e - 1;

  return `${multiple}x^${substract}`;
};
