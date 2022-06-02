/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

const last = (x) => {
  if (!x.trim().length) return x.split(" ");
  return x
    .split(" ")
    .sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
};

console.log(last("hey little soldier"));
