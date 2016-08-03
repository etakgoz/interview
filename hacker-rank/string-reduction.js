var reduceString = function (input) {
    //Enter your code here
    var i = 0,
        str = input;

    while (true) {
    	if (str === "") {
    		break;
    	}

        if (str[i] === str[i + 1]) {
            str = str.slice(0, i) + str.slice(i+2);
            i = 0;

            console.log("string after reduction: " + str);
            continue;
        }

        if (i++ === str.length - 1) {
            break;
        }
    }

    console.log("final string is " + str);
}

reduceString("aaabccddd");