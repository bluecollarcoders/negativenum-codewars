/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

const digital_root = (n) => {
  /*
    I'm going to take the sum of digits of n. Condition (if that value has more than one digit), continue reducing in this way until a single-digit number is produced
    first thing I would create a variable that held zero to hold acc
    let finalTotal = 0;
    then I would use a series of methods 
    String(n).split('').map(num) => {
        finalTotal += Number(num);
    })
    return if (finalTotal > 10) {
        return digital_root(finalTotal);
    } else {
        return finalTotal;
    }
    */
  if (n < 10) return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);

  return digital_root(sum);
};
