// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.

if (color === 'red') {
 	console.log("Apples are red");

} else if (color === 'orange') {
	console.log("oranges are orange");
} else if (color === 'yellow') {
	console.log("mustard is yellow");
} else if (color === 'green') {
	console.log("leaves are green");
} else if (color === 'blue') {
	console.log("the sky is blue");
} else {
	console.log("I do not know anything by that color.");
}


(color === favorite) ? console.log(color + " is my favorite color!") : console.log(color + " is not my favorite color!");
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
