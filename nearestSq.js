/*

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)


*/

const nearestSq = (n) => {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
};

console.log(nearestSq(10));
