/*
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
testcase sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

I want to look through the array going left to right to see if any integer in the array matches to total the sum if I can't find a match return undefined
I would create an empty array to push the results into
I would first need to loop through the array 
then use some conditional logic if ints[i] + ints[i] === s return newArray.push(ints[i])
*/
const sumPairs = (ints, s) => {
  // create a set to memorize the numbers that have been iterated over
  var intStore = new Set();

  // loop
  for (let i of ints) {
    // this checks to see if we have already seen the number
    if (intStore.has(s - i)) return [s - i, i];
    intStore.add(i);
  }
};

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
