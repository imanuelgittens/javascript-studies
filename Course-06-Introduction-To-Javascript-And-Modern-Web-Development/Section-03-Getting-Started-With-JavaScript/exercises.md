#Exercises	

####Exercise 1

1)

	console.log(5);

2)

	console.log(5);

3)

	console.log("Imanuel");


####Exercise 2

1) A statement is a combination of any or all of the following - keywords, comments, literals, variables, operators and expressions. Multiple statements make up a program. An expression is comprised of literals, variables and operators and results in some value. 

2) 

Keywords: var

Comments:

	"The formula for calculating average is: average = sum_of_all_items/total_number_of_items"

	"prints the average"

Literals: 32, 23, 26

Variables: sum, avg

Operators: +, /, =

Expressions: 

	32 + 23 + 26;

	sum / 3;

The programs has three statements. 

####Exercise 3

1) undefined

2)	Infinity

3) 

	var arr = ["banana", "apple", "orange"];
	console.log(arr[0]);
	console.log(arr[1]);
	console.log(arr[2]);

4) 

	var arr = ["banana", "apple", "orange"];
	console.log(arr[arr.length -1])


####Exercise 4

1)

	console.log(3 * 4 % 2) => 0 
	console.log(2 + 4 * 2) => 10 

As stated in the chapter, the `+` and `-` operators have the same precedence and are lowest. The `*` and `/` operators are higher than the first two and from my own experimentation, I found the the `%` operator has a higher precedence than `*` and `/`.

2)

	1 + "one" // => "1one"

When a number is added to a string, the result is a string that is a combination of the number and the string. 

	2 + true // => 3
	2 + false // => 2
	2 - true // => 1

When a boolean is a part of an expression containing a number, the number values of the booleans are used e.g. true = 1 and false = 0.

	"one" + true // => "onetrue"

Booleans and strings are concatenated to form a new string. 

	1 == true //=> true

The number one has the same value as true

3) 

	function celciusToFahrenheit(celcius){
		var result = ((9 * celcius) / 5 + 32);
		return result;
	}

	celciusToFahrenheit(32);

4)

	function max(a, b){
		var result = a > b === true ? "a greater than b" : "b greater than a";
		return result;
	}

	max(4, 3);

5)

	function signTest(a, b, c){
		var result = a * b * c < 0 ? "Result is negative." : "Result is positive.";
		return result;
	}

	signTest(-4, -3, 2);
