#Questions

####Question 7

*Describe the Selectors API and demonstrate the use of the two methods available in this API, `querySelector` and `querySelectorAll`.*

The selectors API provides additional methods for accessing DOM elements. They allow for the fetching of references to DOM elements by using CSS selectors instead of the HTML based methods like getElementById() and getElementsByTagName(). This means that developers can now take advantage of the power and versatility of CSS selectors to access elements. It also makes JavaScript a bit easier to learn and use to anyone who is familiar with CSS. When using the selectors API, there are two main methods that you want to pay attention to and learn well. The first is `querySelector()` and the second `querySelectorAll()`. We will go through each method in detail below. 

**querySelector()**

This method access a CSS selector as its parameter and return the **first** element matching this criteria. It is important to note that this method only return the first match it finds and it returns null if no match is found. Let's see this method in action.

	<ul class="menu">
		<li>Home</li>
		<li>About Us</li>
		<li>Contact Us</li>
	</ul>

Let's say we had the above HTML code, we can store a reference to this unordered list by using the `querySelector()` method like so:

	var menu = document.querySelector('.menu');

A reference to this unordered list is now store in the variable *menu*.

**querySelectorAll()**

We've seen how `querySelector()` works, but you might ask - what is we wanted to select more than one element? Well that's where `querySelectorAll()` comes in. This method takes a CSS selector as its argument just like the previous one however it returns a NOdeList. This method is best used when you need to select all elements under a parent node. We can use the same example to see this method in action:

	<ul class="menu">
		<li>Home</li>
		<li>About Us</li>
		<li>Contact Us</li>
	</ul>

Let's say we had the above HTML code, we can store all the `li` elements using the 	querySelectorAll()` method like so:

	var menuItems = document.querySelectorAll('.menu');

A node list of all the `li` elements that are children of the list with a class of 'menu' are stored.


You now have a better understanding or the Selectors API and its main methods. Should you ever find that accessing DOM elements via `.getElementById` or `getElementsByTagName` to tedious or impractical, don't forget that the Selector API methods are available to make your life a bit easier. Happy Coding! 







Explain the different ways of inserting or removing markup into and from the DOM (such as using the `innerHTML` property or the `appendChild` or `removeChild` methods).


Explain how to dynamically create DOM nodes and demonstrate with examples.