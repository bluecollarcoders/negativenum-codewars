/*
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

I need to sort through a list of words 
then see if the letters in the words === word 
if the words and word do not match return an empty array
if they do match return the word

So the output looks like this 'word' >>> dwro

first I would reassign the word parameter to word.split('').sort().join('')
to split each letter in the word
then I would create an empty array to push the anagram into the new array
I would then loop over the words list 
I then would use some logic 
if words[i].split('').sort().join('') === word
push that into new array 
if not return empty
*/

const anagrams = (word, words) => {
  word = word.split("").sort().join("");
  var result = [];
  for (key of words) {
    if (key.split("").sort().join("") === word) result.push(key);
  }
  return result;
};

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
