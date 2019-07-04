#Exercises	

#### Exercise 1 (Console)

1)

	console.log(5);

2)

	console.log(5);

3)

	console.log("Imanuel");


#### Exercise 2 (Statements)

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

#### Exercise 3 (Data Types)

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


#### Exercise 4 (Operators)

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
		return (a > b) ? "a greater than b" : "b greater than a";
	}

	max(4, 3);

5)

	function signTest(a, b, c){
		var result = a * b * c < 0 ? "Result is negative." : "Result is positive.";
		return result;
	}

	signTest(-4, -3, 2);

#### Exercise 5 (Control Flow)

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
		if( b < min) {min = b;}
		if( c < min) {min = c;}
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


#### Exercise 6 (Switch)

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

#### Exercise 7 (For Loop)

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

#### Exercise 8 (While Loop)

1)

	function divisible(){
		var count = 0;
		var num = 0;
		do{
			if(num % 3 === 0 && num % 5 ===0){
				num++;
			}else{
				if(num % 3 === 0 || num % 5 ===0){
				
					console.log(num);
					num++;
					count++;
				
				
				}else{
					num++;
				}
			}
			
			
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

	function sumTen(arr){
		var result = [];
		var first, j, i;
		var count = 0;
		while(count < arr.length){
			first = arr[count];
			for(j = 0; j < arr.length; j++){
				if(((first + arr[j]) === 10) && (arr.indexOf(first)) != arr.indexOf(arr[j])){
					result.push([first, arr[j]]);
				}
			}
			count++;
		}
		return result;
	}


sumTen([1,2,3,4,5,6,7,8,9]);

#### Exercise 9 (Error Handling)

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

#### Exercise 10 (Functions)

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

	function reduce(arr, cb, initial) {
	    var result = initial || arr[0],
	        i = initial ? 0 : 1,
	      len = arr.length;

	  for ( ; i < len; i++) {
	    result = cb(result, arr[i]);
	  }
	  return result;
	}

	var sum = reduce([1, 3, 6, 7], function(previous_value, current_value){
	    return previous_value + current_value;
	});
	console.log(sum);

#### Exercise 11 (Numbers in Depth)

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

	//second solution

	function toNum(numberString) {
  		return +numberString.replace(/,/g, '');
	}

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
			}for
		
		return parseFloat(result);
	}

	var num = filter("1.345.234,56", function(item){
		return item !== ",";
	});

	console.log(num);
	//end convert european number to string

	//convert number to European string 


	function numToString(num){
		var str = num.toString();
		var result = "";
		var count = 0;
		for(var i = str.length-1; i >= 0; i--){
			if(count < 3 && str.charAt(i) !== "."){
				result = str.charAt(i) + result;
				count++;
			}else{
				if(count < 3 && str.charAt(i) === "."){
					result = "," + result;
					count = 0;
				}else{
					count = 0;
					i++;
					result = "." + result;
				}
			}
		}
		return result;
	}

	numToString(3398763.89);

	//end convert number to European String

3)

	function positive(num){
		return Math.abs(num);
	}

	positive(-3.14);

4)

	function randomNumber(min, max){
		return Math.random() * (max - min) + min;
	}

	randomNumber(-10,1);

5)

	function randomNumber(min, max){
		return Math.floor(Math.random() * (max - min) + min);
	}

	randomNumber(-10,1);

6)

	function randomItem(arr){
		var index = Math.floor(Math.random() * (arr.length));
		return arr[index];
	}

	randomItem([1,2,true, "string", false, 5,"test"]);

7)

	function gcd(a, b){
		var result = 1;
		for(var i = 1; i <= Math.min(a, b); i++){
			if(a % i === 0 && b % i === 0){
				result = i;
			}
		}
		return result;
	}

	gcd(4,12);

8)

	function powerOfTwo(num){
		if(num === 0){
			return true;
		}else{
			if(num == 1){
				return false;
			}else{
				while(num >= 2){
					remainder = num % 2;
					num = num / 2;
				}
				if(remainder % 2 === 0){
					return true;
				}else{
					return false;
				}
			}
		}
		
	}

	powerOfTwo(64);

9)

	function checkInt(num){
		if(num === Math.floor(num) && num === Math.ceil(num)){
			return true;
		}else{
			return false;
		}
	}

	checkInt(3.14);

10) 

	function romanNumeral(num){
		var result = "";
		var times, i;
		while(num > 0){
			if(num >= 1000){
				times = Math.floor(num/1000);
				for(i = 0; i < times; i++){
					result += "M";
				}
				num = num%1000;
			}else{
				if(num >= 500){
				times = Math.floor(num/500);
				for(i = 0; i < times; i++){
					result += "D";
				}
				num = num%500;
				}else{
					if(num >= 100){
				times = Math.floor(num/100);
				for(i = 0; i < times; i++){
					result += "C";
				}
				num = num%100;
				}else{
					if(num >= 50){
				times = Math.floor(num/50);
				for(i = 0; i < times; i++){
					result += "L";
				}
				num = num%50;
				}else{
					if(num >= 10){
				times = Math.floor(num/10);
				for(i = 0; i < times; i++){
					result += "X";
				}
				num = num%10;
				}else{
					if(num >= 5){
				times = Math.floor(num/5);
				for(i = 0; i < times; i++){
					result += "V";
				}
				num = num%5;
				}else{
					if(num >= 1){
				times = Math.floor(num/1);
				for(i = 0; i < times; i++){
					result += "I";
				}
				num = 0;
				}
				}
				}
				}
				}
				}
			}
			console.log(num);
		}
		
		return result;
		
	}

	romanNumeral(1600);

	//second (more elegant solution)

	function toRoman(num) {
	    let result = '';
	    let dictionary = [
	        { v: 1000, r: 'M' },
	        { v: 500, r: 'D' },
	        { v: 100, r: 'C' },
	        { v: 50, r: 'L' },
	        { v: 10, r: 'X' },
	        { v: 5, r: 'V' },
	        { v: 1, r: 'I' }
	    ];

	    dictionary.forEach(function(item) {
	       while (num >= item.v) {
	            result += item.r;
	            num -= item.v;
	       }
	    });
	    return result;
	}


11)

	function addMoney(a, b){
		var floatA = parseFloat(a);
		var floatB = parseFloat(b);
		
		var result = floatA + floatB;
		
		return result.toFixed(2);
	}

	addMoney("444.24", "7.12");


####  Exercise 12 (Strings in Depth)

1)

	function checkString(value){
		return value === value.toString();
	}

	checkString(true);

2)

	function stringLength(value){
		return value.length === 0;
	}

	stringLength("2");

3)

	function wordSplit(sentence){
		var str = sentence.replace(/[^a-zA-Z ]+/g, '').trim();
		var arr = str.split(/\s/);
		for(var i = 0; i < arr.length; i++){
			console.log(arr[i]);
		}
		
	}

	wordSplit("The quick brown, fox jumped? over. The lazy dog!      ");

	//second solution

	function trim(sentence) {
  		return sentence.replace(/^\s*|\s*$/g, '');
	}

4)

	function numDigits(num){
		return num.toString().length;
	}

	numDigits(23456778865);

5)

	function binaryLength(num){
		result = "";
		
		while(num > 0){
			var remainder = num%2;
			result = remainder + result;
			if(remainder === 1){
				num = num - 1;
			}
			num = num/2;
		}
		
		return result.length;
	}

	binaryLength(10000123);

6)

	function removeWhiteSpace(sentence){
		while(sentence.charAt(0) === " "){
			sentence = sentence.slice(1);
		}
		
		while(sentence.charAt(sentence.length-1) === " "){
			sentence = sentence.slice(0, -1);
		}

		return sentence;
	}

	removeWhiteSpace("   the quick brown fox  ");

7)

	function abbreviateLast(string){
		var arr = string.split(/\s/);
		arr[arr.length-1] = arr[arr.length-1].charAt(0) + ".";
		return arr.join(" ");
		
	}
	abbreviateLast("Noel Brown crust");

8)

	function maskEmail(email){
		var atIndex = email.indexOf("@");
		if(atIndex > 4){
			return email.substr(0, 5) + "..." + email.substr(atIndex);
		}else{
			return email.substr(0, 1) + "..." + email.substr(atIndex);
		}
	}

	maskEmail("nuel@gmail.com")

9)

	function camelCase(sentence){
		var result = "";
		var lower = sentence.toLowerCase();
		for(var i = 0; i < lower.length; i++){
			if(lower.charAt(i) === " "){
				result = result + lower.charAt(i+1).toUpperCase();
				i++;
			}else{
				result = result + lower.charAt(i);
			}
		}
		return result;
	}

	camelCase("The Quick Brown Fox.");

10)

	function underScore(sentence){
		var result = "";
		var lower = sentence.toLowerCase();
		for(var i = 0; i < lower.length; i++){
			if(lower.charAt(i) === " "){
				result = result + "_"
			}else{
				result = result + lower.charAt(i);
			}
		}
		return result;
	}

	underScore("The Quick Brown Fox.");

 11)

	function underCamel(sentence){
		var result = "";

		for(var i = 0; i < sentence.length; i++){
			if(sentence.charAt(i) === sentence.charAt(i).toUpperCase()){
				result = result + "_" + sentence.charAt(i).toLowerCase() ;
			}else{
				result = result + sentence.charAt(i);
			}
		}
		return result;
	}

	underCamel("theQuickBrownFox");

#### Exercise 13 (Objects in Depth)

1)

	function Course(duration, numStudents, instructorName){
		this.duration = duration;
		this.numStudents = numStudents;
		this.instructorName = instructorName;
	}

	var introToJS = new Course("7 Days", 40, "Khan");
	var introToCSS = new Course("10 Days", 40, "Rory");
	var introToHTML = new Course("5 Days", 50, "Sean");

I used a Constructor Function to create these objects since they all are courses and all have the same properties. 

2)

For this project I would create a library object with name and address properties( These would be string data types). The library object would also have a books property however, the value of this property would be an array of book objects. Each book object would have name, authorname and type properties. The last property of the library object would be "borrowers" and this will store the customer information who borrowed the book. This will be an array of customer objects. Each customer object will have a name, email address and age. 

3)

	function merge(obj1, obj2){
		var result =  {};
		for(var p in obj1){
				result[p] = obj1[p];
		}
		
		for(var property in obj2){
			result[property] = obj2[property];
		}
		
		return result;
	}

	merge({a:2, b:3, c:4}, {b:67, d:12, e:14});

	//second solution

	function merge(obj1, obj2) {
	  var result = {},
	        allKeys = Object.keys(obj1).concat(Object.keys(obj2));

	  allKeys.forEach(function(key) {
	    result[key] = (key in obj2) ? obj2[key] : obj1[key];
	  });
	  return result;
	}

4)

	function pickBy(obj, callback){
		var result = [];
		
		for(var property in obj){
			var test = callback(property);
			if(test){
				result.push(property);
			}
		}
		return result;
	}

	pickBy({"name": "mani", "age": 27, "hair": "long"}, function(prop){
		return prop === "age" || prop === "hair";
	});

5)

	function omit(obj, callback){
		var result = {};
		
		for(var property in obj){
			var test = callback(property);
			if(test){
				result[property] = obj[property];
			}
		}
		return result;
	}

	omit({"name": "mani", "age": 27, "hair": "long"}, function(prop){
		return prop !== "age" && prop !== "hair";
	});

6)

	function values(object){
		var result = [];
		for(var property in object){
			result.push(object[property]);
		}
		return result;
	}

	values({a:1, b:2, c:3});


#### Exercise 14 (Dates in Depth)

1)

	function getDays(month, year){
		//January is 1 based
		// Day 0 is the last day of the previous month
		var d = new Date(year, month, 0);
		return d.getDate();
	}

	getDays(2,2017);

2)

	function getMonthName(date){
		var date1 = new Date(date);
		var monthNum = date1.getMonth() + 1;//month is 0 based so we add 1
		var result = "";
		switch(monthNum){
			case 1:
				result = "January";
				break;
			
			case 2:
				result = "February";
				break;
			
			case 3:
				result = "March";
				break;
				
			case 4:
				result = "April";
				break;
				
			case 5:
				result = "May";
				break;
				
			case 6:
				result = "June";
				break;
				
			case 7:
				result = "July";
				break;
				
			case 8:
				result = "August";
				break;
				
			case 9:
				result = "September";
				break;
				
			case 10:
				result = "October";
				break;
				
			case 11:
				result = "November";
				break;
				
			case 12:
				result = "December";
				break;
				
			default:
				result = "Invalid Month";
				break;
		}
		return result;
	}

	getMonthName("December 15, 1986 11:23:07");

3)

	function addMinutes(date, mins){
		var d = new Date(date);
		d.setMinutes(d.getMinutes() + mins);
		return d;
	}

	addMinutes("October 15, 1986 10:23:07", 40);

4)

	function currentDay(){
		var day = new Date(Date.now());
		var result = ""
		switch(day.getDay()){
			case 0:
				result = "Sunday";
				break;
			case 1:
				result = "Monday";
				break;
			case 2:
				result = "Tuesday";
				break;
			case 3:
				result = "Wednesday";
				break;
			case 4:
				result = "Thursday";
				break;
			case 5:
				result = "Friday";
				break;
			case 6:
				result = "Saturday";
				break;
			default:
				result = "Invalid Day";
				break;
		}
		return result;
	}

	currentDay();

5)

	function lastDay(year, month){
		var d = new Date(year, month, 0);
		var day = d.getDay();
		var result = "";
		switch(day){
			case 0:
				result = "Sunday";
				break;
				
			case 1:
				result = "Monday";
				break;
				
			case 2:
				result = "Tuesday";
				break;
				
			case 3:
				result = "Wednesday";
				break;
				
			case 4:
				result = "Thursday";
				break;
				
			case 5:
				result = "Friday";
				break;
				
			case 6:
				result = "Saturday";
				break;
				
				
			default:
				result = "Invalid Day";
				break;
		}
		
		return result;
	}

	lastDay(2016,2);


6)

	function recentDate(arr){
		var closestDate = new Date(arr[0]);
		for(var i = 0; i < arr.length; i++){
			var temp = new Date(arr[i]);
			if(temp > closestDate){
				closestDate = temp;
			}
		}
		return closestDate;
	}


	recentDate(["October 15, 1987 11:23:07", "October 15, 1986 11:23:07", "October 15, 1988 11:23:07"]);

7)

	function sortDate(arr){
		for(var i = 0; i < arr.length; i++){
			for(var j = 0; j < arr.length - i - 1; j++ ){
				var firstDate = new Date(arr[j]);
				var secondDate = new Date(arr[j+1]);
				if(firstDate > secondDate) {
			        var tmp = arr[j];  
			        arr[j] = arr[j+1]; 
			        arr[j+1] = tmp; 
		      	}
			}
		}
		
		return arr;
	}


	sortDate(["October 15, 1990 11:23:07", "October 15, 1986 11:23:07", "October 15, 1988 11:23:07"]);

	//second solution

	function sortDate(arr){	
		return arr.sort();
	}

8)

	function daysCount(){
		var year = new Date(Date.now());
		var date1 = new Date("January 01, "+ year.getFullYear());
		var date2 = new Date(Date.now());
		
		var diffInMilliSec = Math.abs(date1.getTime() - date2.getTime());
		var milliSecInDay = 24 * 60 * 60 * 1000; 
		return Math.floor(diffInMilliSec/milliSecInDay);
	}

	daysCount();

9)

	function age(dob){

		var date1 = new Date(dob);
		var date2 = new Date(Date.now());
		
		return date2.getFullYear() - date1.getFullYear()

	}

	age("January 08, 1990");

#### Exercise 15 (Arrays In-Depth)

1)

	function oneD(arr){
		var result = [];
		for(var i = 0; i < arr.length; i++){
			for(var j = 0; j < arr[i].length; j++){
				result.push(arr[i][j]);
			}
		}
		return result;
	}

	oneD([[1,2,4,5,6,7], [3,4,4,5,3]]);

2)

	function findItem(arr, key) {
	    var min = 0;
	    var max = arr.length - 1;
	    var guess;
	    while(min < max){
	    	guess = Math.floor((min + max) / 2);
	    	if(arr[guess] === key){
	    		return "Item is at array index " + guess;
	    	}else{
	    		if(arr[guess] < key){
	    			min = guess;
	    		}else{
	    			max = guess;
	    		}
	    	}
	    }
	    return -1;
	}

	findItem([1,2,3,4,5,6,7,8,9], 4);	

3)

	function shuffle(array) {
	    var counter = array.length;
	    while (counter > 0) {
	        var index = Math.floor(Math.random() * counter);
	        counter--;
	        var temp = array[counter];
	        array[counter] = array[index];
	        array[index] = temp;
	    }

	    return array;
	}

	shuffle(['1','2','3','4','5','6','7','8','9']);

4)

	function sort(items) {
	  var length = items.length;
	  for (var i = 0; i < length; i++) { 
	    for (var j = 0; j < (length - i - 1); j++) { 
	  
	      if(items[j] > items[j+1]) {
	     
	        var tmp = items[j];  
	        items[j] = items[j+1]; 
	        items[j+1] = tmp; 
	      }
	    }        
	  }
	  return items;
	}

	sort([1,3,5,2,6,9,8]);

5)

	function removeFalsy(arr){
		var result = [];
		for(var i = 0; i < arr.length; i++){
			if(arr[i]){
				result.push(arr[i]);
			}
		}
		return result;
	}

	removeFalsy([1,2,3,4, "", null, 0, false]);

6)

	function vectorAddition(arr1, arr2){
		var result = [];
		for(var i = 0; i < arr1.length; i++){
			result.push(arr1[i] + arr2[i]);
		}
		return result;
	}

	vectorAddition([1,2,3], [4,5,6]);

7)

	function union(arr1, arr2){
		var result = [];
		for(var i = 0; i < arr1.length; i++){
			result.push(arr1[i]);
		}
		for(var j = 0; j < arr2.length; j++){
			if(result.indexOf(arr2[j]) < 0){
				result.push(arr2[j]);
			}
		}
		return result;
	}

	union([1,2,3,4], [3,4,5,6]);

8)

	function intersection(arr1, arr2){
		var result = [];
		for(var i = 0; i < arr1.length; i++){
			if(arr2.indexOf(arr1[i]) >= 0){
				result.push(arr1[i]);
			}
		}
		return result;
	}

	intersection([3,4,6,7,8,5], [3,4,5]);

9)

	function difference(arr1, arr2){
		var result = [];
		for(var i = 0; i < arr1.length; i++){
			if(arr2.indexOf(arr1[i]) < 0){
				result.push(arr1[i]);
			}
		}
		return result;
	}

	difference([3,4,6,7,8,5], [3,4,5,6,0,4,3]);

10)

	function dropWhile(arr, callback){
		var result = arr;
		for(var i = 0; i < arr.length; i++){
			console.log(result);
			if(callback(arr[i])){
				result.splice(0,1);
				i--;
			}else{
				break;
			}
		}
		return result;
	}

	dropWhile([1,13,14,2,3,4,5,6,7,6,2,3,4,5], function(item){
		if(item != 7){
			return true;
		}else{
			return false;
		}
	})