/*


Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

codewars kata 7kyu anki 


*/

const orderedCount = (text) => {
  var strSplit = text.split("");
  const str = [...new Set(strSplit)];

  var newArray = [];

  for (let i = 0; i <= str.length - 1; i += 1) {
    newArray.push([str[i], strSplit.filter((s) => s === str[i]).length]);
  }
  return newArray;
};
