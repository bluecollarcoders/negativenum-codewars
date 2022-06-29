/*

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

I'm writing a function that returns both the highest 
How do I acheive this?
create 2 variables 
loop over one and find the min 
then return results

*/

const minMax = (arr) => {
  var min = arr[0];
  var max = arr[0];
  for (let i of arr) {
    if (i > max) max = i;
    if (i < min) min = i;
  }
  return [min, max];
};

console.log(minMax(100, 101, 5, 5, 1, 1));
