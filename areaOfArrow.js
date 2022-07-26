/*

Area of an arrow
An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

arrow

a and b are integers and > 0

Write a function which returns the area of the arrow.


to solve create a variable that multiples b x h 
which is a * b 

then divide the variable by 4 
this because the rectangle has 4 sides 


*/

const arrowArea = (a, b) => {
  var sum = a * b;

  return sum / 4;
};
console.log(arrowArea(4, 2));
