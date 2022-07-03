/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
first create an empty array
loop over the parameter - 1 to get the last index 
make the condition if the parameter is greater than or equal to 0 
decrement over the loop 
then push items into the array
*/
const reverseList = (list) => {
  var newStore = [];
  for (let i = list.length - 1; i >= 0; i--) {
    j = list[i];
    newStore.push(j);
  }
  return newStore;
};

console.log(reverseList([1, 2, 3, 4]));
