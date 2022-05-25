/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

const moveZeros = (arr) => {
  //   first we assign a variable with zero to act as an accumlator
  var count = 0;
  // then we loop over the parameter arr
  for (let i = 0; i < arr.length; i++) {
    //     write a condition if arr[i] is not equal to zero then increment arr[count++] then reassign arr[i]
    //   so this loop goes over the arr and by passes zero and increments through the arr
    //  this preserves the order
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
    // so now the arr output goes from this >> ([false,1,0,1,2,0,1,3,"a"]) to this ([false,1,1,2,1,3,"a"])
  }

  //  we  perform another loop to move the zeros to the end of the arr
  //  to do this we use the count variable as the iterator over the arr parameter
  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }
  //   return the arr
  return arr;
};
