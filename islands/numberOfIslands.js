let markIsland = (i, j, grid, rows, cols) => {
	if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] != "1") return;
	grid[i][j] = "2";
	markIsland(i, j - 1, grid, rows, cols); // upwards
	markIsland(i + 1, j, grid, rows, cols); // right
	markIsland(i, j + 1, grid, rows, cols); // downwards
	markIsland(i - 1, j, grid, rows, cols); // left
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let islandCount = 0;
	let rows = grid.length;
	if (rows === 0) return 0;
	let cols = grid[0].length;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == "1") {
				markIsland(i, j, grid, rows, cols);
				islandCount++;
			}
		}
	}
	return islandCount;
};