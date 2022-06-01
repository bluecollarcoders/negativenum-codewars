/*
instructions

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
////////////////////////////////
test case (1234) >>> 10011010010
so we need to turn the number into a string loop through it 
take every integer and convert it's binary equalent
////////////////////////////////
*/
const countBits = (n) => {
  sum = 0;
  var newNum = n.toString(2);
  for (let i = 0; i < newNum.length; i++) {
    if (newNum[i] === "1") {
      sum++;
    }
  }
  return sum;
};

console.log(countBits(1234));
