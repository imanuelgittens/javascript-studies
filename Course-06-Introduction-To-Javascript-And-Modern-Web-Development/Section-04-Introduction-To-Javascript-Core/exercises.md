#Exercises

####Exercise 1 (By Value, By Reference)

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