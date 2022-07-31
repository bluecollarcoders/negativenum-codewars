/*


Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.

the fruit guy wants to replace an array of fuits ['apple', 'rottenBanna', 'apple']
it should return ['apple', 'bannana' 'apple']
if the array is [] return empty array
the returned array should be lowercase

first thing I know what to do is create a condition if bagOfFruits === null || [] 
return [] array
I then need to loop over the bagoffruits parameter 
I'll write another condition if bagoffruits includes rotten 
remove that and tolowercase 


*/

const removeRotten = (bagOfFruits) => {
  var freshBag = [];
  if (bagOfFruits == null) {
    return [];
  }

  for (let i = 0; i < bagOfFruits.length; i++) {
    freshBag.push(bagOfFruits[i].replace(/rotten/, "").toLowerCase());
  }
  return freshBag;
};

console.log(
  removeRotten(["apple", "rottenBanana", "kiwi", "melone", "orange"])
);

/*
PHP solution

function removeRotten($fruitBasket) {
  
  if($fruitBasket == []) {
    return [];
  }
  
  $goodFruit = [];
  
  foreach($fruitBasket as $fruit) {
    $goodFruit[] = strtolower(str_replace("rotten", "",$fruit));
  }
  return $goodFruit;
  
}



*/
