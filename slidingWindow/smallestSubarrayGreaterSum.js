// let arr = [2, 1, 5, 2, 3, 2]; // 7 = 2
// let arr = [2, 1, 5, 2, 8]; //7 =1
let arr = [3, 4, 1, 1, 6]; // 8 = 3

const getMinSubarrWithGreaterSum = (array, minSum) => {
	let start = 0,
		end = 0,
		sum = 0,
		minLenght = Infinity;
	while (end < array.length) {
		sum += array[end++];
		while (start < end && sum >= minSum) {
			minLenght = Math.min(minLenght, end - start);
			sum -= array[start++];
		}
	}
	return minLenght === Infinity ? undefined : minLenght;
};

console.log(getMinSubarrWithGreaterSum(arr, 8));
