#####1. Explain what constitutes a valid JSON document and list all of the data types allowed in JSON.

JSON documents can contain the following data types -

- Object - these are identical to object literals in JavaScript except that in the JSON object, the keynames MUST be quoted with double quotes.
- Array - identical to array literals in JavaScript
- String - A series of 0 or more characters enclosed in double quotation marks. Characters that can't be used in a string are double quotation marks, backslashes or any control characters like backspace or newline. 
- Number - positive or negative digits. 
- True - Boolean True
- False - Boolean False
- Null - Null value.

A valid JSON document must contain one or more key-value pairs between opening and closing curly braces that meet the criteria mentioned for the data types above. 


#####2. Explain what quantifiers are and describe at least 4 regular expression quantifiers.

Quantifiers in regular expression specify the number of times a character, group or character set must be present for a match to be found. SOme regular expression quantifiers include:

- `$` : matches the end of the input. For example /t$/ will match the ending `t` in goat but not match the `t` in gate. 

- `|` : matches an item or another item. `/a|b/` will match the `a` in gate and the `b` in box. 

- `*` : matches the preceeding element 0 or more times. For example, `/ab*/` will match `ab` and `abbbbb`.

- `+` : matches the preceeding character one or more times. For example `/n+/` will match for `snail` and `snnnail` but not for `sail`
  


#####3. Describe how the `querySelector` method works and give at least two examples of its usage.

The querySelector method, returns the first element that matches a a specific selector and is also a child of the document or the element that it is called on. For example, if we call the querySelector method on the document

	document.querySelector('.ace')

This will search the entire document for the first occurence of any element that has the class of "ace". Once it finds the element, the search stops. 

We can also call the querySelector method on an element that contains child to search for a child of that element that matches a particular selector.

Eg

	var menu = document.getElementById('menu');

	var contactLink = menu.querySelector('.contact');

Important- This method stops after the first element that matches the provided selector is found. The selector is the same as any CSS selector. 

#####4.The Event object has two properties called `currentTarget` and `target`. Explain the function of these properties and give one example of their usage and explain the difference between the two.

The event object has a number of proerties that are useful for figuring out which DOM element that event was called on. Two of these elements are `currentTarget` and `target`. The difference betweenn the two are subtle but can be very important depending on the context in which the event was called. Let's get to know each property a bit better - 

`currentTarget` - This property is a reference to the registered target of the event. It usually points to the same element as the `target` property however this property ALWAYS points to the element that the listener was initially registered on. 

`target` - This property is a reference to the element that triggered the current event. Generally the same as the `currentTarget` property however its value may change when event listeners as nested. 

Let's explore the difference between these two proerties by looking at some code:

	<body>
		<ul>
          <li><a href="#">Home</a></li>
		</ul>
	</body>

We know that events in JavaScript bubble to the top ost element unless we specify that they shouldn't. So when we click on the 'Home' link, the event will be created and bubble to the `li` then to the `ul` then to the `body`. We may attach a click event to any of these nodes that are parents of the link and it will fire during the bubbling phase. We can now expain the differences between the two proerties. 

`event.target` - refers to the element that the event listener originated from. FOr example, event if we attached the listener to the `ul` then event.target still point the the `a` element because that is the element that the user clicked.

`event.currentTarget - This property is a bit different. It always returns the element on which the eventListener was attached. For example, if we attached the event listener to the `ul` element, event though we clicked the `a` element, the currentTarget property will return the `ul`

And tha's it! you now have a better understanding of how these event properties work. Happy coding! 


#####5. Describe at least 4 properties on the mouse event object and explain what they are used for.

For mouse event properties are listed below: 

clientX -	This is an integer that shows the X cordinate of the mouse pointer at the time the event occured. The cordinate is relative ao the DOM element that the event occured on.


clientY -	This is an integer that shows the Y cordinate of the mouse pointer at the time the event occured. The cordinate is relative ao the DOM element that the event occured on.


ctrlKey -	This is a boolean property that shows whether or not the Ctrl key was held down when the event occured. 


shiftKey	This is a boolean property that shows whether or not the Shift key was held down when the event occured. 