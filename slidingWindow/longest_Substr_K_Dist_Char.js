// let str = "araaci";
let str = "cbbebi";

const getLongesSubstrWithKDistChar = (str, k) => {
	let maxlen = 0;
	let start = 0;
	let map = {};
	for (let end = 0; end < str.length; end++) {
		if (Object.keys(map).includes(str[end])) {
			map[str[end]]++;
		} else {
			map[str[end]] = 1;
		}
		while (start < end && Object.keys(map).length > k) {
			map[str[start]]--;
			if (map[str[start]] === 0) delete map[str[start]];
			start++;
		}
		maxlen = Math.max(
			maxlen,
			end - start + 1 // Object.values(map).reduce((accu, curr) => accu + curr)
		);
	}
	return maxlen;
};

console.log(getLongesSubstrWithKDistChar(str, 3));
