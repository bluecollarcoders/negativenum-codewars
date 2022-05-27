/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

testcase
removeList(a[2,3,4,5,6],b[4,5,6]) >>> output [2,3]

*/

const arrayDiff = (a, b) => {
  /*
    I want to look through one list then look through another list remove the duplicates then store them in a new list while keeping their order
    >>>>>>>>>   >
    [2,3,4,5,6] [2]   [3,4,5,6]
    first thing I would do is assign a variable with an empty array
    var store = [];
    then I would run a for over the a parameter 
    for(let i = 0; i < a.length; i++) {
        I would right a condition 
        if b.indexOf(a[i] < 0) {
            store.push(a[i])
        }
    }
    

    
    return store 
    
    */
  var store = [];

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) {
      store.push(a[i]);
    }
  }

  return store;
  /*
    refactor 
    let difference = a.filter(x => !b.includes(x));
    return difference
    
    */
};

console.log(arrayDiff([2, 1, 2, 4], [1]));
