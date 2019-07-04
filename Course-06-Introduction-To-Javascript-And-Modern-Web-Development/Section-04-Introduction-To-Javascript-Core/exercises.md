#Exercises

#### Exercise 1 (By Value, By Reference)

Question 1)

	var a = "{x : 1}";
	var b = "{x : 1}";
	console.log(a===b); //->true - because we are comparing strings and strings are compared by value
	 
	var c = b;
	b = "{x : 2}";
	console.log(c); //->"{x : 1}" - because even though strings are assigned by reference, they are immutable. When we assign c to b, we give c the value of b that cannot be changed. 
	 
	function function4(var1){
	  var1 = "{x : 5}";
	  console.log(var1); //-> "{x : 5}" - because we've created a new string
	}
	function4(c);
	console.log(c); //-> "{x : 1}" - because strings are immutable and once assigned cannot be changed. 

Question 2)


	function function5(arr){
	  arr.push(5);
	  arr = [7,8,9];
	}
	var a = [1,2,3];
	function5(a);
	console.log(a); //a = [1,2,3,5] - Because arrays are passed be reference. This means that when we update the arry inside the function, it is also updated in all other locations. 
	 
	function function6(arr){
	  arr = [7,8,9];
	  arr.push(5);
	}
	var b = [1,2,3];
	function6(b);
	console.log(b); //b = [1,2,3] - Because we create an entirely new array. This is given a new memory location and only that memory location is updated inside the function. 

Question 3)

Numbers

	var a = 1;
	var b = 2;

	function swap(first,second){
		var temp = first;
		first = second;
		second = temp;
	}

	swap(a,b);

	console.log("a = " +a); //1
	console.log("b = " +b); //2

Numbers are passed by value so this means that a copy of a and b were passed to the function hence the original values are unchanged.

Booleans

	var a = true;
	var b = false;

	function swap(first,second){
		var temp = first;
		first = second;
		second = temp;
	}

	swap(a,b);

	console.log("a = " +a); //true
	console.log("b = " +b); //false

Booleans are passed by value so this means that a copy of a and b were passed to the function hence the original values are unchanged.

Strings

	var a = "String1";
	var b = "String2";

	function swap(first,second){
		var temp = first;
		first = second;
		second = temp;
	}

	swap(a,b);

	console.log("a = " +a); //"String1"
	console.log("b = " +b); //"String2"

Strings are passed by reference however they are immutable so this means that the swap function actually created new values for these strings hence the original values are unchanged.

Arrays

var a = [1,2,3];
var b = [4,5,6];

	function swap(first, second){
	    var tmp = [];
	    var len = first.length;
	    var i;
	    for (i = 0; i < len; i++) {
	        tmp.push(first[i]);
	        first[i] = second[i];
	        second[i] = tmp[i];
	    }
	}

	swap(a,b);

	console.log("a = " +a);//4,5,6
	console.log("b = " +b);//1,2,3

Arrays are passed by reference so this means that a pointer to the actual memory location of a is passed to the function. The function updates the value so the actual values of a and b are changed even after the function is completed. 

Objects

	var a = {name: "John"};
	var b = {name: "Tom"};
	function swap(first, second){
	    var tmp = {};
	    for(var property in first){
	    	tmp[property] = first[property];
	    	first[property] = second[property];
	    	second[property] = tmp[property];
	    }
	}

	swap(a,b);

	console.log("a = " +a.name);//Tom
	console.log("b = " +b.name);//John

Objects are passed by reference so this means that a pointer to the actual memory location of a is passed to the function. The function updates the value so the actual values of a and b are changed even after the function is completed. 

###Exercise 2

Question 1)

	function scopeFunc7(){
	  a = 5;
	}
	console.log(a); //->? //ReferenceError: a is not defined - because the variable a is local to the scopeFunc7 function.

Question 2)


	(function() {
	   var a = b = 2;
	})();
	 
	console.log(b); // 2 - because the variable b is defined without the var keyword and hence it global in scope.

Question 3)

	var arr = [];
	for(var i=0; i<5; i++){
	  arr[i] = function(){
	    console.log(i);
	  };
	}
	for(var j=0; j< arr.length; j++){
	  arr[j]();
	}

	Output
	5
	5
	5
	5
	5

This program gives the output above because the console.log() statement is not executed in the first `for` loop but in the second. If we consider what the first `for` loop does, we see that when i is 0,1,2,3 and 4, it creates a function and adds this function to that spot in the array. When i is 5, the `for` loop stops. The second for loop now runs and executes the function in each array position. Since this loop does not contain the variable `i` it uses the reference to `i` from the first for loop which is now 5 and prints the value of 5 each time the function runs. 

Question 4)

	var arr = [];
	var i;
	for(i=0; i<5; i++){
	  arr[i] = function(){
	    console.log(i);
	  };
	}
	for(i=0; i< arr.length; i++){
	  arr[i]();
	}

	Output
	0
	1
	2
	3
	4

Similarly to the above questions, this code does not run the console.log() statement in the first `for` loop. It add a function to positions 0 - 4 that prints whatever the variable `i` is. In the second for loop, the variable `i` doesn't need to be referenced from the first `for` loop because it's values are assigned again. SO this time, when the function is executed, it uses the value of `i` from the second for loop. 

Question 6)

	function getScopeFunc8(num) {
	    return function () {
	        printNum(num);
	    };
	}
	function printNum(num) {
	  console.log(num);
	}
	var scopeFunc8 = getScopeFunc8(5);
	scopeFunc8(); //5 - the printNum function has access to the num variable passed to getScopeFunc8 which in thi scase is 5
	printNum(6); //6 - this function simply prints the value passed to it.
	scopeFunc8(); //-5 - the printNum function has access to the num variable passed to getScopeFunc8 which in thi scase is 5

Question 7)

	var a = 5;
	scopeFunc9();
	function scopeFunc9(){
	    console.log(a); //undefined - because the variable `a` is hoisted when the function runs and its value is set to undefined. 
	    if (false)
	    {
	        var a = 123;  
	    }
	}

Question 8)

	var scopeFunc10;
	console.log(typeof scopeFunc10); //-function - because functions are hoisted in their entirety before the code is actually executed. 
	function scopeFunc10() {
	   console.log(5);
	}
	console.log(typeof scopeFunc10); //-function - because functions are hoisted in their entirety before the code is actually executed.

Question 9)

	console.log(typeof scopeFunc11); //-function - before the code is executed, the functions are hoisted in their entirety to we get this result before the code even runs
	var scopeFunc11 = 7;
	function scopeFunc11() {
	   console.log(5);
	}
	console.log(typeof scopeFunc11); //number - initially the variable called scopeFunc11 would be set to undefined however when we executed the code it is properly defined as a number hence we get this result after it is defined properly

Question 10)

	for (var i = 0; i < 5; i++) {
	   //some logic
	}
	console.log(i); //->5

`i` is defined in the global scope so when the loop stops, `i` is 5 and that is printed to the console. 

#### Exercise 3

Question 1)

	var obj = {
	    a : 6,
	    print: function () {
	        console.log(this.a); 
	    }
	};
	var obj1 = {
	    a : 7,
	    print: null
	};
	obj.print(); //->6
	obj1.print = obj.print;
	obj1.print.call(obj);//->6


Question 2)

	var name = 'John Doe';
	 
	var person = {
	   name: 'Johnny Doe',
	   details: {
	      name: 'Jonathan Doe',
	      print: function() {
	         return this.name;
	      }
	   }
	};
	 
	console.log(person.details.print()); // Jonathan Doe - The object that invokes this function is the details object. 
 
	var detailsPrint = person.details.print;
	console.log(detailsPrint()); //John Doe - The variable definition does not invoke the function it simply defines it. The function is invoked in the global scope hence it prints 'John Doe'.

