#Questions

####Question 1

*Explain the function of the `textarea` element and describe in detail the attributes it accepts and their effects of their different values.*

The `textarea` HTML tag allows a user to enter multiple lines of input. Any amount of characters can be added to a text area and these characters are usually displayed using a fixed-width font. 

Example usage:

	<textarea>This is a text area.</textarea>

This element also has a number of attributes that affect its behaviour and these are discussed below. 

1) autofocus - this attributes specifies that the text area should get focus automatically after the page has been loaded. 

2) cols - this attribute is used like this `cols="4"`. It specifies the visible width of the textarea. Our example states that the width should be 4 columns.

3) disabled - this attributes specifies that the textarea should be disabled thus preventing users from using it.

4) form - this attribute allows you to specify which form (within the same document) this textarea is associated with. If this form value is not specified, then the textarea must be a descendant of a form tag.

5) maxlength - this attribute specifies the maximum number of characters allows in the textarea.

6) name - gives the textarea a name. 

7) placeholder - this attribute allows you to enter some placeholder text to give the user a hint about what the textarea should be used for.

8) readonly - only allows users to read the textarea values. They cannot add anything to the textarea.

9) required - specifies that the textarea must be filled before proceeding. 

10) rows - this attribute is used like this `rows="4"`. It specifies the visible height of the textarea. Our example states that the height should be 4 rows/lines.

11) wrap - this attribute specifies how text should be wrapped when submitting a form. Possible values for this attribute are `wrap=hard` and `wrap=soft`.

And that's about it for the `<textarea></textarea>` element. You now know what its used for and how different attributes affect its behaviour.

####Question 2

*Describe what a "sibling selector" is. Explain how it works and give an example of its usage.*

A sibling selector in CSS allows users to select elements based on their sibling relationship with other elements. In an HTML document, sibling elements are child elements that share the same depth. A great example of sibling elements would be `<li></li>` elements that are children of a `<ul></ul>` or `<ol></ol>` element.  

There are two sibling selectors in CSS. The first is the `+` and it allows us to select the sibling that come **immediately** after the current sibling. It is used as follows:

Let's assume we have a parent `div` with some child elements that are siblings

	<div>
		<div class="test">
			I'm a div inside a parent div.
		</div>
		<p>I'm a paragraph</p>
		<p>I'm a second paragraph</p		
		<a href="#">Click me. I'm a link</a>
		<p>I'm a third paragraph</p
	</div>

If we want to select the first paragraph, we can do so like this 

	.test + p{
		color: red;
	}

This select only the first `<p></p>` sibling after the div with a class of `test`.

The second sibling selector uses the `~` sign and specifies that all siblings should be selected. Using the same HTML code from above, we can select all `p` siblings of the `test` div like this:

	.test ~ p{
		color: red;
	}

Here all the `p` sibling elements will be colored red.

And that's how you use sibling selectors in CSS.

####Question 3

*List the JavaScript keywords and describe their purpose and function.*

* break - used to jump out of a loop.
* case - used as a comparator for the item in a switch statement.
* catch - used to handle an error.
* class - used to define a class. 
* const - creates a readOnly reference to a variable.
* continue - this statement is used to skip on iteration of a loop.
* debugger - invokes available debugging functionality.
* default - used as default actions for switch and export statements.
* delete - used to delete object properties or array elements.
* do - creates a loop that executes until a condition is met.
* else - perform an action when an if statement's criteria is not met.
* export - this statement is used to export functions, objects or primitives from a file or module.
* extends - used to create a class that is a child of another class.
* finally - is used to perform an action after a try-catch block (regardless of the try-catch results).
* for - creates a loop that executes until a condition is met.
* function - used to create a function.
* if - used to test a condition.
* import - used to import functions, objects and primitives that have been exported.
* in - used to check if an object contains a property.
* instanceof - is used to test if an object is created by a certain constructor. 
* new - used to create an instance of an object.
* of - used in a for loop to iterate over property values.
* return - terminates a function and returns a value to the function caller.
* super - used to call functions on an object's parent.
* switch - used to select one of many code blocks to be executed.
* this - used to specify the object that "owns" this current piece of code.
* throw - used to create custom errors.
* try - used to execute a piece of code the perform different actions based on the outcome.
* typeof - used to find a variable's type.
* var - used to define a variable.
* void - used to evaluate a given expression and return undefined.
* while - used to create a loop that runs until a condition is met.
* with - extends the scope chain for a statement.
* yield - used to pause and resume generator functions.


####Question 4

*Describe how to make different comparisons between JavaScript values (like greater-than, less-than, etc).*

In JavaScript there are several ways in which values can be compared.  We will go through each of the comparison operators in detail for you to get a better idea of what they do and how they are used. 

1) Equality(==) - this operator converts the two operands being compared to the same type then compares them to see if they are equal. Some example outputs from this comparator include:
	
	1  == 1 //true
	"1" == 1 // true
	0 == false //true

We see that even though the operands are of different types, when we compare them, they return true.

2) Inequality(!=) - this operator converts the two operands being compared to the same type then checks if they are **not** equal. Some example outputs  from this comparator include:

	1 != 1 //false
	false != 0 //false
	"1" != 1 //false

Since the operands are converted to the same type before comparing, all these statements return false.

3) Identity or Strict Equality (===) - this operator compares two operands without any type conversion i.e they must be of the same type and have the same value. Some example outputs from this comparator include:

	"1" === 1 //false
	1 === 1 //true
	false === 0 //false

4) Non Identity or Strict Inequality (!==) - this operator compares two operands without any type conversion i.e. they must not be of the same type and must not have the same values. Some example outputs from this comparator include:

	"1" !== 1 //true
	"1" !== "1" //false
	false !== 0 //true

5) Greater than (>) - this operator returns true if the operand to it's left is greater than the operand to it's right. Some example outputs from this comparator include:

	5 > 3 //true
	1 > 4 //false

6) Greater than or Equal to (>=) - this operator returns true if the operand to it's left is greater than or equal to the operand to it's right. Some example outputs from this comparator include:

	3 >= 3 //true
	10 >= 9 //true
	2 >= 3 //false

7) Less than (<) - this operator returns true if the operand to it's left is less than the operand to it's right. Some example outputs from this comparator include:

	5 < 3 //false
	1 < 4 //true

8) Less than or Equal to (<=) - this operator returns true if the operand to it's left is less than or equal to the operand to it's right. Some example outputs from this comparator include:

	3 <= 3 //true
	10 <= 9 //false
	2 <= 3 //true

You now know about JavaScript's comparison operators and how they work. 

####Question 5

*Explain what a self-invoking function is and describe the use of such a function, including a demonstration.* 

A self invoking function is a function that is called immediately. It is built in such a way that the user does not have to explicitly call the function, it just runs automatically.  Let's compare a regular funtion to a self invoking function to get a better understand of how these self invoking fucntions work.

In JavaScript, we write a function like this:

	function hello(){
		console.log("Hello");
	}

However, this function will not be executed unless we **call** it like this:

	hello() //the () calls signals that the function should be run or called.

It is the same when we assign a function to a varible

	var hello = function(){
		console.log("Hello");
	}

We must still call the function like this:

	hello();

With self invoking functions however, we do not need to call them. Let's see how they are written:

	(function(){
		console.log("Hello")
	})()				

Notice that we add the `()` to the end of the function. Written this way, the function is executed immediately without the need for calling hence we say it is a self invoking function. 

####Question 6

*Describe what closures are and use at least two examples to demonstrate how they work.*


Closures are a very important feature of the JavaScript language and are responsible for ensuring that functions always have access to the variables that they require in order to run properly. Closures are one of the most advanced and confusing topics in JavaScript so they are best explained using an example. 

Let's explore the following function.

	function hello(greeting){
		return function(name){
			console.log(greeting + " " + name);
		}
	}

We see that this `hello` function (outer function) returns another anonymous function (inner function). We want to use this hello function so we can do this:

	var talk = hello("Yo");// We have run the hello function with "Yo" as a paramter.

Since our function returns a function, the `talk` variable is now:

	var talk = function(name){
			console.log(greeting + " " + name);
		};

We can now run this function like so:
	
	talk("Mark"); // returns "Yo Mark"

Something unexpected happens here however because the inner function that was returned still printed "Yo" as the `greeting` even though only the `name` parameter was passed to it. This `greeting` variable should have disappeared after calling the `hello` function. This is where closures come in. They ensure that the inner function still has a reference to the variables of the outer function, even though the outer function has finished executing. 

Let's explore another example

	function subtractor(x) {
	  return function(y) {
	    return x - y;
	  };
	}

We create a subtractor function that accepts a value and returns a function. A closure is created here and the inner function has a reference to the variables of the outer function - namely `x`.

	var sub5 = subtractor(5);
	
Here we invoke the subtractor function with a value of 5 and store it in the sub5 variable. This function returns a function so the sub5 variable now looks like this:

	var sub5 = function(y){
		return x - y;
	};

We run the sub5 function and we see that it still had a reference to the `x` variable and used it to produce a result. 

	console.log(sub5(2));  // 3

And that's what closures do, they basically ensure that these inner functions have access to variables from their parent functions by keeping a reference to those variables.

####Question 7

*Whether a variable is declared with the `var` keyword or not determines the scope of that variable. Describe how this mechanism works and give at least one example of how this works.*

**Title**: Declaring JavaScript Variables in The Right Scope

**Category**: Working with JavaScript Variables

The JavaScript language uses a concept called **scope** to determine how and where a variable can be accessed. A variable can have two scopes - local and global. If a variable is in the global scope, it can be accessed from anywhere within the program but if a variable is in the local scope, it is only accessible from within the function in which it was created. Let's look at an example to get a better understanding of variable scopes

	var arr = [1,2,3]; //global scope variable

	function test(){
		var hello = "hello"; //local scope variable
		console.log(hello);
	}


We see that the variable defined outside of the function is a global variable and the one defined inside the function is a local variable. As mentioned above, global variables can be accessed from anywhere in a program, even inside a function. This means that the following code will work.

	var arr = [1,2,3]; //global scope variable

	function test(){
		var hello = "hello"; //local scope variable
		console.log(arr); //accessed the global variable inside the function
		console.log(hello);
	}

Local variables however, can only be accessed inside the function in which it was created so the following code will not work. 

	var arr = [1,2,3]; //global scope variable

	function test(){
		var hello = "hello"; //local scope variable
		console.log(hello);
	}

	console.log(hello); //ERROR: this hello variable can only be accessed within the **test** function.

It is also important to note that in JavaScript, if you define a variable without the `var` keyword, it is **automatically placed in the global scope** no matter where it is defined. Let's look at an example:

	var arr = [1,2,3]; //global scope variable

	function(){
	    hello = "hello"; //this variable is now defined without the var keyword hence is in the global scope
		console.log(hello);
	}

	console.log(hello); // works because hello is now a global variable. 

When declaring variables in JavaScript, it is important that they be put in the right scope to allows for the right levels of access an to avoid unexpected errors in your program. 


####Question 8

*Describe how the JavaScript built-in functions `apply` and `call` work. Use examples to demonstrate how each one works.*

In order to understand how **call** and **apply** work, we must first understand that functions in JavaScript are objects as well. Like all other objects, they have access to certain methods (**call** and **apply** are two of these methods). These methods allow us to define what the `this` variable points to when executing a function. Let's look at an example:

	var person = {
		firstname: 'John',
		lastname: 'Dillon',
		getFullName: function(){
			var fullname = this.firstname + ' ' + this.lastname;
			return fullname;
		} 
	}

We set up a person object and it has a method on it called `getFullName`. The method uses the `this` keyword to point to the person object and get the firstname and lastname to return the fullname. Let's also look at this other function:

	var sayNameAge = function(age){
		console.log(this.getFullName + 'is '+ age + ' years old.');
	}

	sayNameAge(24);//error

This function produces an error because the `this` keyword points to the global object which has no method called `getFullName`. But what if there was a way to determine which object the `this` variable points to when invoking a function? This is where the **call** and **apply** methods come in. We can use them on functions to define where the `this` variable points when that function is executed. Let's look at some examples:

	sayNameAge.call(person, 24); // "John Dillon is 24 years old."

We used the `call` method on our `sayNameAge` function to make the `this` keyword point to the person object before passing in the `age` argument and it gave us the correct result. 

The `apply` method does the same thing, but we need to pass the function's arguments as an array after defining the `this` pointer:

	sayNameAge.apply(person, [24]); // "John Dillon is 24 years old."

And that's how the **call** and **apply** methods work. They allow us to define where the `this` variable points to when executing our functions.