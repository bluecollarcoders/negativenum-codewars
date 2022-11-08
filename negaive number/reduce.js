/*

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/ 

const grow = (x) => {
	var sum = 1;

	for (let nums of x ) {
		sum = sum * nums;
	}

	return sum;
}

console.log(grow([1,2,3,4]));

const growy = (x) => {
	total = x.reduce((a,b) => a * b, 1);
	return total;
}

console.log(growy([1,2,3,4]));