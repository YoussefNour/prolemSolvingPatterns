// testcases
// const STRING = "aabccbb";
// const STRING = "abbbb";
// const STRING = "abccde";
// const STRING = "abcabcbb";
const STRING = "pwwkew";

const getLongestSubStringWithDistChar = str => {
	let start = 0,
		max = -Infinity;
	let map = {};
	for (let end = 0; end < str.length; end++) {
		// incrementing map attribute count
		map[str[end]] = map.hasOwnProperty(str[end]) ? ++map[str[end]] : 1;
		Object.entries(map).find(v => {
			if (v[1] > 1) {
				map[v[0]]--;
				start++;
			}
		});
		// getting max substring length
		max = Math.max(max, end - start + 1);
	}
	return max;
};

console.log(getLongestSubStringWithDistChar(STRING));
