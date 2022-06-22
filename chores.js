/*



Return an array with each students work duration in ascending order such that the last element represents the total duration of the day's work. Each integer in the return array is the sum of each students two assigned chores.





*/

const choreAssignment = (chores) => {
  chores = chores.sort((a, b) => a - b);
  var newArray = [];

  for (let i = 0; i < chores.length / 2; i++) {
    newArray.push(chores[i] + chores[chores.length - 1 - i]);
  }
  return newArray.sort((a, b) => a - b);
};
