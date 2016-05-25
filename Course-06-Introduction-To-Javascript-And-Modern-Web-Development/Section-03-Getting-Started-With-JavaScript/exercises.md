#Exercises	

####Exercise 1 (Console)

1)

	console.log(5);

2)

	console.log(5);

3)

	console.log("Imanuel");


####Exercise 2 (Statements)

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

####Exercise 3 (Data Types)

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


####Exercise 4 (Operators)

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

####Exercise 5 (Control Flow)

1)

	function leapYear(year){
		if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
			return year + " is a leap year!";
		}else{
			return year + " is not a leap year!"
		}
	}

	leapYear(2001);

2)

	function min(a, b, c){
		var min = a;
		if(b < c){
			if(b < min){
				min = b;
			}
		}else{
			if(c < min){
				min = c;
			}
		}
		return min;
	}

	min(14, 76, 94);

3)

	function printDesc(a, b, c){
	var max, min, middle;

	if(a > b && a > c){
		max = a;
	}else{
		if(b > a && b > c){
			max = b;
		}else{
			max = c;
		}
	}
	
	if(a < b && a < c){
		min = a;
		}else{
			if(b < a && b < c){
				min = b;
			}else{
				min = c;
			}
		}
		
	if(a !== max && a !== min){
		middle = a;
	}else{
		if(b !== max && b !== min){
			middle = b;
		}else{
			middle = c;
		}
	}
		
	return max + " " + middle + " " + min;
	}

	printDesc(14, 76, 94);

4)

	function min(a, b, c, d, e){
    var min = a;
    if(b < c && b < d && b < e){
        if(b < min){
            min = b;
        }
    }else{
        if(c < b && c < d && c < e){
            if(c < min){
            	min = c;
            }
        }else{
        	if(d < b && d < c && d < e){
        		if(d < min){
        			min = d;
        		}
        	}else{
        		if(e < b && e < c && e < d){
        			if(e < min){
        				min = e;
        			}
        		}
        	}
        }
    }
    return min;
	}

	min(14, 76, 94, 3, 21);


####Exercise 6 (Switch)

1) 

	var customerType = "subscribed";
	var cost = 250;
	var discount = 0.1;

	switch(customerType){
		case "subscribed":
			discount = 0.2;
			break;
			
		case "regular":
			discount = 0.1;
			break;
			
		default:
			discount = 0;
	}

	console.log("The cost of the product: " + (cost - cost * discount));

2)

	function printGradeRange(grade){
		switch(grade){
			case "A+":
				console.log("90-100");
				break;
			case "A":
				console.log("85-89");
				break;
			case "A-":
				console.log("80-84");
				break;
			case "B+":
				console.log("76-79");
				break;
			case "B":
				console.log("72-75");
				break;
			case "B-":
				console.log("68-71");
				break;
			case "C+":
				console.log("64-67");
				break;
			case "C":
				console.log("60-63");
				break;
			case "C-":
				console.log("55-59");
				break;
			case "D":
				console.log("50-54");
				break;
			case "F":
				console.log("0-49");
				break;
			default:
				console.log("Invalid Grade");
				break;
		}
	}

	printGradeRange("C");

####Exercise 7 (For Loop)

1)

	function oddEven(){
		for(var i = 25; i <=85; i++){
			if(i % 2 === 0){
				console.log(i + " is even!");
			}else{
				console.log(i + " is odd!");
			}
		}
	}

	oddEven();

2)

	function isPrime(num){
	if(num === 1){
		return false;
	}else{
		if(num === 2){
			return true;
		}else{
			for(var i = 2; i < num; i++){
				if(num % i === 0){
					return false;
				}else{
				
				}
			}
			return true;
		}
	}
	}

	isPrime(1);

3)

	function isPrime(num){
	if(num === 1){
		return false;
	}else{
		if(num === 2){
			return true;
		}else{
			for(var i = 2; i < num; i++){
				if(num % i === 0){
					return false;
				}else{
				
				}
			}
			return true;
		}
	}
}

	function printPrimes(){
		for(var i = 1; i < 500; i++){
			if(isPrime(i) || i === 2){
				console.log(i);
			}
		}
	}

	printPrimes();

4)

	function isLeap(year){
		if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
			return true;
		}else{
			return false;
		}
	}

	function printLeapYears(){
		for(var i = 1000; i < 5000; i++){
			if(isLeap(i)){
				console.log(i);
			}
		}
	}

	printLeapYears();

5)

	function checkArray(arr, item){
		var result = "Item does not exist in the array.";
		for(var i = 0; i < arr.length; i++){
			if(arr[i] === item){
				result = "Item exists in the array.";
			}
		}
		return result;
	}

	checkArray([1, false, true, "hello"], 2);

6)

	function arrProd(arr){
		var result = 1;
		for(var i = 0; i < arr.length; i++){
			result *= arr[i];
		}
		return result;
	}


	arrProd([1,2,3]);

7)

	function printLastTen(arr){
		if(arr.length <= 10){
			for(var i = 0; i < arr.length; i++){
				console.log(arr[i]);
			}
		}else{
			for(var j = arr.length - 10; j < arr.length; j++){
				console.log(arr[j]);
			}
		}
	}


	printLastTen([1,2,3,4,5,6,7,8,9,10,11,12]);

####Exercise 8 (While Loop)

1)

	function divisible(){
		var count = 0;
		var num = 0;
		do{
			if(num % 3 === 0 || num % 5 ===0){
				console.log(num);
				num++;
				count++;
			}
			num++;
		}
		while(count < 100);
	}

	divisible();

2)

	function isPrime(num){
		if(num === 1){
			return false;
		}else{
			if(num === 2){
				return true;
			}else{
				for(var i = 2; i < num; i++){
					if(num % i === 0){
						return false;
					}else{
					
					}
				}
				return true;
			}
		}
	}

	function printPrimes(){
		var num = 1;
		var count = 0;
		while(count < 500){
			if(isPrime(num)){
				console.log(num);
				num++;
				count++;
			}else{
				num++;
			}
		}
	}

	printPrimes();

3)

	function twentyLeaps(){
		var count = 0;
		var year = 1000;
		while(count < 20){
			if(isLeap(year)){
				console.log(year);
				count++;
				year++;
			}
			year++;
		}
	}

	function isLeap(year){
		if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
			return true;
		}else{
			return false;
		}
	}

	twentyLeaps();

4)

	function minMax(arr){
		var min = arr[0];
		var max = arr[0];
		var index = 1;
		while(index < arr.length){
			if(arr[index] > max){
				max = arr[index];
			}
			if(arr[index] < min){
				min = arr[index];
			}
		index++;
		}
		console.log(min + " is the smallest value and " + max + " is the largest value.");
	}

	minMax([1,2,3,4,5,6,7,8]);

5)

//ToDo

####Exercise 9 (Error Handling)

1) 

	try{
		if (Math.random() < 0.5){
	  	console.log("print success");
	}
	else{
	  throw "random error";
	}
	console.log("must print");
	}
	catch(err){
		console.log(err);
	}
	finally{
		console.log("End of Program.");
	}

2)

	try{
		if (Math.random() < 0.5){
	  console.log("print success");
	}
	else{
	  throw "print failure";
	}
	console.log("must print");
	}
	catch(err){
		console.log(err);
	}
	finally{
		console.log("End of Program.");
	}

####Exercise 10 (Functions)

1)

	function map(arr, callback){
		var result = [];
		for(var i = 0; i < arr.length; i++){
			result.push(callback(arr[i]));
		}
		return result; 
	}

	var timeFour = map([1,2,3,4], function(item){
		return item * 4;
	});

	console.log(timeFour);

2)

	function reduce(arr, callback){
		var result = 0;
		for(var i = 0; i < arr.length; i++){
			result += callback(0, arr[i]);
		}
		return result;
	}

	var sum = reduce([1, 3, 6, 7], function(previous_value, current_value){
	    return previous_value + current_value;
	});
	console.log(sum);

####Exercise 11 (Numbers in Depth)

1)

	function filter(str, callback){
		var result = "";
		//remove commas
		for(var i = 0; i < str.length; i++){
			if(callback(str.charAt(i))){
				result += str.charAt(i);
			}
		}
		return parseFloat(result);
	}

	var num = filter("1,345,234.56", function(item){
		return item !== ",";
	});

	console.log(num);

2)
	//convert European number to string
	function filter(str, callback){
		var result = "";
		var newNum = "";
		//change to US version 
		for(var i = 0; i < str.length; i++){
			if(str.charAt(i) === ","){
				newNum += ".";
			}else{
				if(str.charAt(i) === "."){
					newNum += ",";
				}else{
					newNum += str.charAt(i);
				}
			}
		}
		//remove commas
		for(var j = 0; j < newNum.length; j++){
			if(callback(newNum.charAt(j))){
				result += newNum.charAt(j);
			}
		}
		
		return parseFloat(result);
	}

	var num = filter("1.345.234,56", function(item){
		return item !== ",";
	});

	console.log(num);
	//end convert european number to string

	//convert number to European string TODO

	function convertNum(num){
	var numString = num.toString();
	counter = 1;
	var result = "";
	for(var i = numString.length; i >= 0; i--){ //start processing from the end of the string
		if(numString.charAt(i) === "."){ 
			result = "." + result;
			counter = 1;
		}else{
			if(counter <= 3 ){
				result = numString.charAt(i) + result;
				counter++;
			}else{
				result = "," + result;
				i++;
				counter = 1;
			}
		}
		
	}
	
	return result;
	}

	convertNum(3434444123654.85); //has errors need to redo

3)

	function positive(num){
		return Math.abs(num);
	}

	positive(-3.14);

4)

