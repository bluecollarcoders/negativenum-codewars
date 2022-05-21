const sumOfDifferences = (arr) => {
  /*
    test cases
    sumOfDifferences([1,4,5]) >>> [5,4,1] 5 - 4 = 1 + 1 returns 2
    I would have to search the array from the end of the list of integers
    I would then substract the first two integers then and the remainder
    with the last integer
    */

  // use built in method to sort
  arr.sort((a, b) => b - a);

  // assign a accumlator
  var sum = 0;

  // first iterate over the array from the end
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }

  return sum;
};
