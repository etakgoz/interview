/* https://www.hackerrank.com/challenges/2d-array?h_r=next-challenge&h_v=legacy */

var fs = require('fs');

var inputArray = fs.readFileSync('data.input', 'utf8')
			  .split('\n')
			  .map(function (line) {
			  		return line.split(' ').map(Number);
			  });


function getHourglassSum(arr, row, col) {
    var sum = 0, i, j;
    for (i = row; i < row + 3; i++) {
        if (i === row + 1) {
            j = col + 1;
            console.log("i and j are (" + i + ", " + j + ")");
            sum += arr[i][j];
        } else {
            for (j = col; j < col + 3; j++) {
                console.log("i and j are (" + i + ", " + j + ")");
                sum += arr[i][j];
            }
        }
    }
    console.log("Sum for the call (" + row + ", " + col + ") is " + sum);
    return sum;
}

(function() {
	var i = 0,
		j = 0,
		maxSum = undefined,
		tempSum = 0;


	for (; i < 4; i++) {
	    for (j = 0; j < 4; j++) {
	    	console.log("getHourglassSum with (" + i + ", " + j + ")");
	    	tempSum = getHourglassSum(inputArray, i, j);
	    	maxSum = maxSum === undefined ? tempSum : maxSum;
	        maxSum = maxSum <  tempSum ? tempSum : maxSum;
	    }
	}

	console.log("maxSum is " + maxSum);
}());
