/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

testcase [0,1,2] >> 1 

I'm to look through an array to find a integer either odd or even and extract it
I would use a filter method 

*/
const findOutlier = (integers) => {
  var even = [];
  var odd = [];

  for (let int of integers) {
    if (int % 2 === 0) even.push(int);
    else odd.push(int);
  }
  if (even.length == 1) return even[0];
  else return odd[0];
};

console.log(findOutlier([2, 6, 8, 10, 3]));
