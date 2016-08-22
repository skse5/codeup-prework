(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    	var names = ['James', 'Jerry', 'Joe', 'Josh'];
    // TODO: Create a log statement that will log the number of elements in the names array.
    	console.log("there are " + names.length + " names in the names array.");

    	for (var i = 0; i < names.length; i++) {
    		console.log("Name at index:" + i + " is " + names[i]);
    	}

    	console.log("ForEach loop:");

    	names.forEach(function (element, index, array) {
    		console.log("Name at index: " + index + " is " + element);
    	});
 })();
