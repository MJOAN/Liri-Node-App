// find smallest value in arr []


var smallest = [];
var smallest_index = 0;


var findSmallest = function (arr) {

	smallest = arr[0];

	for (var i = 0; i < len(arr); i++) {
		if (arr[i] < smallest)
			smallest = arr[i];
			smallest_index = i
	}
		return smallest_index;
}

var selectionSort = function(arr) {
	newArr = [];

	for (var i = 0; i < len(arr); i++) {
		smallest = findSmallest(arr)
		newArr.append(arr.pop(smallest))
	}
	return newArr;
}

selectionSort([5, 3, 6, 2, 10]);