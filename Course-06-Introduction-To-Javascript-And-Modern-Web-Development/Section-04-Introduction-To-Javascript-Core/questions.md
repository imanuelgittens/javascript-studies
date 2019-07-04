#Questions

##3 Questions for Review

#### Question 4)

*Variable comparisons, argument passing, or variable assignment happen by value or by reference. Use 3 examples (of comparisons, function argument-passing, variable assignment) to explain the difference between values and references.*

In JavaScript, whenever we compare, pass as arguments or assign primitive types (Numbers, Booleans, Strings), the operations are done **by value**. This means that whenever we pass, reference or assign one variable to another, a copy is made and stored in that second variable. Let's explore the concept of **by value** by using an example:

Let's say we have the following:

	var a = 3;

We see that `a` is assigned a primitive type (a number). Behind the scenes, the variable `a` is created and it points to a location in memory that holds the value 3. Remember that primitive types are operated on **by value** and we'll explore what that means by doing:

*Variable assignment*

	var b = a; 

Here the variable `b` is created and it points to a **different** memory location other than `a` however the VALUE of a (3) is copied to that memory location hence b = 3. 

*Argument Passing*

	function addTen(x){
		x = x + 10;
		console.log(x);
	}

	addTen(b); //13
	console.log(b); //3

In this example we passed the variable `b` to the function addTen. We see however the `b` is still unchanged after the function runs and this is because a separate copy of the VALUE of `b` was used inside the function and hence `b` was left unchanged. 

*Comparison*

	a === b; //true

This results as true because the VALUES are compared. a = 3 and b = 3 to we ask the question is 3 strictly equal to 3? And the answer is yes or true. 

Conversely, whenever we compare, pass as arguments or assign Object types (Objects, Functions, Arrays), the operations are done by **reference**. This means that whenever we pass, reference or assign one variable to another, we use that variable's memory location. Let's explore the concept of by reference by using an example:

Let's say we have the following:

var a = {
	name: "Tom"
};

We see that `a` is assigned an Object type (an Object). Behind the scenes, the variable a is created and it points to a location in memory that holds the object ({name:"Tom"}). Remember that object types are operated on by reference and we'll explore what that means by doing:

*Variable assignment*

var b = a; 

Here the variable b is created and it points to the same location in memory as a. It **references** a's memory location and sets b to point to it. So b is equal to ({name:"Tom"}).

*Argument Passing*

	function updateName(obj){
	    obj.name = "John";
	    console.log(obj);
	}

	updateName(b); //{name:John}
	console.log(b); //{name:John}

In this example we passed the variable b to the function updateName. We see that that in this example **b is changed** after the function is run and this is because a reference to the actual memory location of the b variable was passed to the function. The object in this memory location was updated so now it shows the name as John both inside and outside the function. 


Comparison

a === b; //true

This results as true because the variables a and b point to the same location in memory and thus have the same value. 

Understanding when and how variables are interacted with in JavaScript is very important to fully understanding how the language works. Make sure to go through the above examples and try some on your own as well to gain a deeper understanding of **by value** and **by reference**.  

#### Question 5)

*Describe the function of the `this` keyword and use at least one example to demonstrate how it works.*

In JavaScript, the `this` keyword can have many different values but always refers to the **Object** that is used to invoke some code. Let's see how this works:

	console.log(this);//Window

We see that if we just print `this` to console, the result is `Window`. This `Window` refers to the the Global JavaScript object and is the parent of all objects in JavaScript. Hence the Window object is used to invoke this `console.log()` code. If we use the `this` keyword inside a function function however, it then refers to the object used to invoke that function as seen below:

	var letter = {
		a: 10,
		getA: function(){
			return this.a;
		}
	}

	console.log(letter.getA()); //10 - Because we use the letter object to invoke the getA function, the function searches the letter object to find a variable called a. It finds the variable and prints it to the screen. 

When using the `this` keyword, it is very important to understand that it simply points to the Object that invokes some code. There are many situations where it gives some unexpected values so let's explore the results of the `this` keyword in different situations. 

1)

	function(){
		console.log(this); // Window - simply invoking a function causes this to point to the global object
	}

	a();

2)

	var b = function(){
		console.log(this); //Window - when defining a function expression, this points to the global object
	}

	b();

3)

	var c = {
		name: "John Doe",
		print: function(){
			console.log(this); //Object - points to the containing object c
		}
	}

	c.print();

4)

	var c = {
		name: "John Doe",
		print: function(){
			console.log(this); //Object - points to the containing object c
		}

		var setName = function(newName){
			this.name = newName; // when a function is inside a function, the this keyword points to the global object. This causes some confusion.
		}
		setName("John Dillan");
		console.log(this); //Object - points to the containing object c [No Change]. The setName function updated the name property on the GLOBAL object because the this keyword points to the GLOBAL object when it is used in a function that is inside another function. 
	}

	c.print();

In conclusion, I'd like to reiterate that the `this` keyword is simply a pointer to the Object that invoked some code. It is also important that you learn the special cases where the value of `this` may not be what you expect as we saw above. 

#### Question 7)

*Describe what JavaScript variable hoisting is and its significance in how and where variables should be declared. Use at least one example to demonstrate variable hoisting.*

To understand what hoisting in JavaScript is, we must first understand what the JavaScript engine does when running your code. Before your code is run, the engine creates what is known as an **Execution Context**. The execution context is created in two phases and in the first phase (the creation phase) the JavaScript Engine creates the following -

1. The Global Object
2. 'this'
3. Outer Environment
4. Sets up the memory space for variables and functions

The last point above represents what is known as hoisting. Let's look at a few examples to demonstrate how this works. 

Example 1)

	var a = 10;
	function b(){
		console.log(11);
	}

	b();
	console.log(a);

The expected output from this code is `11` followed by `10` and that's exactly what we get.

**Output**

	11
	10

But what happens if we change our code just a bit:

Example 2)

	b();
	console.log(a);

	var a = 10;
	function b(){
		console.log(11);
	}

Here we call the function and try to print the variable **before** defining them. In most languages, we would expect this code to fail but look at what happens when we run it.

**Output**

	11
	undefined

We see that the function will run as normal however when we try to print `a`, it gave us the value of `undefined` and the reason this happened is because of hoisting. As we mentioned above, before your code is run, JavaScript creates an Execution Context and it it contains the space in memory for **ALL** variables and functions. When it creates this memory space, it stores the functions and all the code inside them however it stores all variables with the value of `undefined`. This is why we saw the above output, because when the execution context was created, the `b` function was stored but `a` was stored as undefined. We then run this code line by line and it prints `11` to the console because the entire `b` function was run however it printed `undefined` for the `a` variable because `a` was not properly defined but its memory was set up with an initial value of `undefined`. Let's look at one more example.

Example 3)

	
	function b(){
		console.log(11);
	}
	b(); 

	console.log(a)
	var a = 10;
	console.log(a);

**Output**

	11
	undefined
	10

Here we change our code a bit but it still shows hoisting in action. First the memory space for the function `b` and the variable `a` is setup. Remember that all variables are initially set to `undefined`. When the code is run line by line, the function `b` is executed then we try to print `a` and get `undefined` which we now know is expected. We then properly define `a` and when we try to print is again we get `10`. 

Now that you have a better understanding of how hoisting works, I'd like to recommend that its ALWAYS better to define variables and functions **before** accessing them. This way you reduce the likelihood of getting unexpected results such as `undefined` when writing your code. 


