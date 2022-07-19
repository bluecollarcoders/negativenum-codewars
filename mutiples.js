/*

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

I need to a list of multiples from a integer up to another value

example would be finding the multiples of 5 up to the integer 24
To solve first I need to create an empty array to store the list



*/

const findMultiples = (integer, limit) => {
  var count = 0;
  var list = [];
  var r = Math.floor(limit / integer);

  for (let i = 0; i < r; i++) {
    list.push((count += integer));
  }
  return list;
};

console.log(findMultiples(5, 7));
