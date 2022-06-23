/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

I need to take two strings and include only letters a - z
return a new sorted string

testcase longest(a,b) >>> "adjlk"
a = "adklsllkskjlskklsk"
b = "skdkdkfkdkskdfjkslk"
create a empty array


*/

const longest = (s1, s2) => {
  var store = [];
  var union = s1.concat(s2);
  var separate = union.split("").sort();

  for (let i of separate) {
    if (!store.includes(i)) {
      store.push(i);
    }
  }
  return store.join("");
};
console.log(longest("aretheyhere", "yestheyarehere"));
