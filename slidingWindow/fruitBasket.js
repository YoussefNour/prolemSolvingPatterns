const Fruits = ["A", "B", "C", "A", "C"];
// const Fruits = ["A", "B", "C", "B", "B", "C"];

const getLargestFruitBasket = fruits => {
	let start = 0,
		max = -Infinity;
	let basket = {};
	for (let end = 0; end < fruits.length; end++) {
		basket[fruits[end]] = Object.keys(basket).includes(fruits[end])
			? ++basket[fruits[end]]
			: 1;
		max = Math.max(max, end - start + 1);
		while (Object.keys(basket).length > 2) {
			delete basket[fruits[start]];
			start++;
		}
	}
	return max;
};

console.log(getLargestFruitBasket(Fruits));
