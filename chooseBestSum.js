/*
John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
testcase
chooseBestSum(163,3,[50, 55, 56, 57, 58]) >> 

*/
const chooseBestSum = (t, k, ls) =>
  ls
    .reduce(
      (r, e) =>
        r.concat(r.filter((c) => c.length < k).map((c) => c.concat([e]))),
      [[]]
    )
    .filter((c) => c.length === k)
    .map((c) => c.reduce((a, b) => a + b))
    .filter((s) => s <= t)
    .sort((a, b) => b - a)[0] || null;

console.log(chooseBestSum());
