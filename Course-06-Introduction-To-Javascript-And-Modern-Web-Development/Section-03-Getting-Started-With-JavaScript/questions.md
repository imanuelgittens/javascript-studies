#Questions

####Question 1

*Explain the function of the `textarea` element and describe in detail the attributes it accepts and their effects of their different values.*

The `textarea` HTML tag allows a user to enter multiple lines of input. Any amount of characters can be added to a text area and these characters are usually displayed using a fixed-width font. 

Example usage:

	<textarea>This is a text area.</textarea>

This element also has a number of attributes that affect its behaviour and these are discussed below. 

1) autofocus - this attributes specifies that the text area should get focus automatically after the page has been loaded. 

2) cols - this attribute is used like this `cols="4"`. It specifies the visible width of the textarea. Our example states that the width should be 4 columns.

3) disabled - this attributes specifies that the textarea should be disabled thus preveting users from using it

4) form - this attribute allows you to specify which form (within the same document) this textarea is associated with. If this form value is not specified, then the textarea must be a descendent of a form tag.

5) maxlength - this attribute specifies the maximum number of characters allows in the textarea.

6) name - gives the textarea a name. 

7) placeholder - this attribute allows you to enter some placeholder text to give the user a hint about what the textarea should be used for.

8) readonly - only allows users to read the textarea values. They cannot add anything to the textarea.

9) required - specifies that the textarea must be filled before proceeding. 

10) rows - this attribute is used like this `rows="4"`. It specifies the visible height of the textarea. Our example states that the height should be 4 rows/lines.

11) wrap - this attribute specifies how text should be wrapped when submitted a form. Possible values for this attribute are `wrap=hard` and `wrap=soft`.

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

* break - used to jump out of a loop
* case - used as a comparator for the item in a switch statement
* catch - used to handle an error
* class - used to define a class. 
* const - creates a readOnly reference to a variable.
* continue - this statement is used to skip on iteration of a loop.
* debugger - invokes available debugging functionality.
* default - used as default actions for switch and export statements.
* delete - used to delete object properties or array elements
* do - creates a loop that executes until a condition is met.
* else - perform an action when an if statement's criteria is not met.
* export - this statement is used to export functions, objects or primitives from a file or module.
* extends - used to create a class that is a child of another class.
* finally - is used to perform an action after a try-catch block (regardless of the try-catch results)
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
* throw - used to create custom errors
* try - used to execute a piece of code the perform different actions based on the outcome.
* typeof - used to find a variable's type
* var - used to define a variable.
* void - used to evaluate a given expression and return undefined
* while - used to create a loop that runs until a condition is met
* with - extends the scope chain for a statement
* yield - used to pause and resume generator functions


####Question 4

*Describe how to make different comparisons between JavaScript values (like greater-than, less-than, etc).*

In JavaScript there are several ways in which values can be compared.  We will go through each of the comparison operators in detail for you to get a better idea of what they do and how they are used. 

1) Equality(==) - this operator converts the two operands being compared to the same type then compares them to see if they are equal. Some example outputs from this comparator include
	
	1  == 1 //true
	"1" == 1 // true
	0 == false //true

We see that even though the operands are of different types, when we compare them, they return true

2) Inequality(!=) - this operator converts the two operands being compared to the same type then checks if they are **not** equal. Some example outputs  from this comparator include

	1 != 1 //false
	false != 0 //false
	"1" != 1 //false

Since the operands are converted to the same type before comparing, all these statements return false.

3) Identity or Strict Equality (===) - this operator compares two operands without any type conversion i.e they must be of the same type and have the same value. Some example outputs from this comparator include

	"1" === 1 //false
	1 === 1 //true
	false === 0 //false

4) Non Identity or Strict Inequality (!==) - this operator compares two operands without any type conversion i.e. they must not be of the same type and must not have the same values. Some example outputs from this comparator include

	"1" !== 1 //true
	"1" !== "1" //false
	false !== 0 //true

5) Greater than (>) - this operator returns true if the operand to it's left is greater than the operand to it's right. Some example outputs from this comparator include

	5 > 3 //true
	1 > 4 //false

6) Greater than or Equal to (>=) - this operator returns true if the operand to it's left is greater than or equal to the operand to it's right. Some example outputs from this comparator include

	3 >= 3 //true
	10 >= 9 //true
	2 >= 3 //false

7) Less than (<) - this operator returns true if the operand to it's left is less than the operand to it's right. Some example outputs from this comparator include

	5 < 3 //false
	1 < 4 //true

8) Less than or Equal to (<=) - this operator returns true if the operand to it's left is less than or equal to the operand to it's right. Some example outputs from this comparator include

	3 <= 3 //true
	10 <= 9 //false
	2 <= 3 //true

You now know about JavaScript's comparison operators and how they work.  