/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

FUNDAMENTALS
Suggest kata description edits


*/

const consecutive = (arr, a, b) => {
  /*
    test cases
    consecutive([1,3,5,6,7], 3,7) >>> true
    consecutive([1,3,5,6,7], 4,7) >>> false
    
    I'm given a list of integers = arr[1,2,3,5,7] and two integers a and b = 3, 7
    I'm to find out if a and b appear consecutively in the arr parameter
    If appears return true
    If not return false
    
    I would have to search the arr then see if a and b appear consective
    I would search the length of the arr.[1,2,3,5,7] 
    I would use some logic if a and b appear consecutively return true 
    If it does not return false
    */

  // search arr by iterating
  for (let i of arr) {
    if (arr[i] === a && arr[i + 1] === b) {
      return true;
    }
    if (arr[i] === b && arr[i + 1] === a) {
      return true;
    }
  }
  return false;
};
