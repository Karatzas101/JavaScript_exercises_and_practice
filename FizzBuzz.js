// How do you play FizzBuzz?
// A group of students sit in a circle and start counting up.
// ...
// Then we add the twists:

//    1) If a number is divisible by 3, the student says “fizz” rather than the number.
//    2) If a number is divisible by 5, they say “buzz” rather than the number.
//    3) If a number is divisible by both, they say “fizz buzz”.


var output = []
var count = 1;

 function fizzBuzz() {
	while (count <= 100) {
     		if (count % 3 === 0 && count % 5 === 0) {
         	output.push("FizzBuzz");
     			} else if (count % 5 === 0) {
         		output.push("Buzz");
     			} else if (count % 3 === 0) {
         		output.push("Fizz");
     			} else {
         		output.push(count);
     }
     count++;
 }
     console.log(output);
}

 fizzBuzz();