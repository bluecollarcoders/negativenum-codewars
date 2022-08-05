/*

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

input abc 
output bca 
c keeps its spot 

assign a variable with an empty string
I would have to split the string 'abc' >> 'a' 'b' 'c';
then I would loop over the parameter
then use a conditional statement 
if the parameter[i] === 


*/

const switcheroo = (x) => {
  var newString = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "a") {
      newString += "b";
    } else if (x[i] === "b") {
      newString += "a";
    } else {
      newString += x[i];
    }
  }
  return newString;
};

const switcherooTwo = (x) => {
  return x.replace(/[ab]/g, ($1) => {
    return $1 === "a" ? "b" : "a";
  });
};
