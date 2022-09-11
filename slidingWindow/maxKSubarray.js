let arr = [2, 1, 5, 1, 3, 2];

const getMaxKSubArray = (arr, k) => {
	let nextSubArrSum = arr.reduce((accu, curr, i) =>
		i >= k ? accu : accu + curr
	);
	let maxSubArraySum = nextSubArrSum;
	let start = 0;
	let end = start + k;
	while (end < arr.length) {
		nextSubArrSum = nextSubArrSum - arr[start] + arr[end];
		if (maxSubArraySum < nextSubArrSum) maxSubArraySum = nextSubArrSum;
		start++;
		end++;
	}
	return maxSubArraySum;
};

console.log(getMaxKSubArray(arr, 3));
