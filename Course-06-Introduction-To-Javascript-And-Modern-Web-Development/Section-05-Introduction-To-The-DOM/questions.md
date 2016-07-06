#Questions

####Question 6


Describe the function of the `document` object and use examples to demonstrate its usage.

In JavaScript, the `document` object represents any web page loaded into the browser and serves as the main point of access to all DOM elements on that page. 

![Imgur](http://i.imgur.com/InRQXEP.jpg)

If you examine the screen shot above you will see that I did a console.log() on the document object and the result was the HTML markup for Google's home page. 

The document object is also the owner of all other objects on your web page and it contains a number of methods used to manipulate the elements on that page. Some of these methods are `getElementById()` and `createTextNode()`. We know that these are methods on the document object because they are accessed using the dot notation:

    document.getElementById();
    document.createTextNode();
    
A practical example for usage of the document object is to find an HTML element. Let's say this element had an ID of 'main-menu'. We could use the getElementById() method of the document object to find it:

    var menu = document.getElementById('main-menu');
    
![Imgur](http://i.imgur.com/0gDKNmE.jpg)

We can also see that the document object has many more methods that can be used in a similar way to the example above to perform different tasks. Feel free to open your web console in the chrome browser and type `document.` for a full list of all the methods available on the document object. 

Getting familiar with these methods and understanding that the `document` object represents any web page loaded in the browser will expand your knowledge of the document object and how to use it when building your web applications. 

####Question 7

*Describe the Selectors API and demonstrate the use of the two methods available in this API, `querySelector` and `querySelectorAll`.*

The selectors API provides additional methods for accessing DOM elements. They allow for the fetching of references to DOM elements by using CSS selectors instead of the HTML based methods like `getElementById()` and `getElementsByTagName()`. This means that developers can now take advantage of the power and versatility of CSS selectors to access HTML elements. It also makes JavaScript a bit easier to learn (and use) for anyone who is familiar with CSS. When using the selectors API, there are two main methods that you want to pay attention to, and learn well. The first is `querySelector()` and the second `querySelectorAll()`. We will go through each method in detail below. 

**querySelector()**

This method access a CSS selector as its parameter and returns the **first** element matching this criteria. It is important to note that this method only return the first match it finds and it returns null if no match is found. Let's see this method in action.

	<ul class="menu">
		<li>Home</li>
		<li>About Us</li>
		<li>Contact Us</li>
	</ul>

Let's say we had the above HTML code, we can store a reference to this unordered list by using the `querySelector()` method like so:

	var menu = document.querySelector('.menu');

A reference to this unordered list is now store in the variable *menu*.

**querySelectorAll()**

We've seen how `querySelector()` works, but you might ask - what if we wanted to select more than one element? Well that's where `querySelectorAll()` comes in. This method takes a CSS selector as its argument just like the previous one however it returns a NodeList of all elements matching the criteria. This method is best used when you need to select all elements under a parent node. We can use the same example to see this method in action:

	<ul class="menu">
		<li>Home</li>
		<li>About Us</li>
		<li>Contact Us</li>
	</ul>

Let's say we had the above HTML code, we can store all the `li` elements using the 	`querySelectorAll()` method like so:

	var menuItems = document.querySelectorAll('.menu');

A node list of all the `li` elements that are children of the list with a class of 'menu' are stored.


You now have a better understanding or the Selectors API and its main methods. Should you ever find that accessing DOM elements via `.getElementById` or `getElementsByTagName` to tedious or impractical, don't forget that the Selector API methods are available to make your life a bit easier. Happy Coding! 



####Question 8

*Explain the different ways of inserting or removing markup into and from the DOM (such as using the `innerHTML` property or the `appendChild` or `removeChild` methods).*

JavaScript allows us to dynamically create HTML markup and add it to the DOM. This powerful functionality can be used for tasks like adding or removing items from a list or showing/hiding an element with CSS classes; the list goes on. There are two main ways of adding markup to the DOM using JavaScript and we will discuss each of these methods below. 

The first way we can do this is by manipulating the nodes of the DOM. Every element that makes up the DOM is a node and JavaScript allows us to create/remove these nodes. Let's say we wanted to create an unordered list node, we would use the following code:

    var list = document.createElement('ul');
    
This unordered list node is created but not yet added to the DOM. To add or connect this list to the DOM, we need to use the node method `appendChild()`. Let's add this newly created list to the body of our HTML document.

    body.appendChild(list);
    
We now have a list but its not very useful unless it has some items, let's create a list item now:

    var listItemOne = document.createElement('li');
    
We have the list item but it doesn't contain any text (everything in the DOM is a node, even text). Let's add some text:
    
    var listItemOneText = document.creaTextNode('Home');
    
We must now append the text to the list item:

    listItemOne.appendChild(listItemOneText);
    
And finally we append this list item the unordered list:

    list.appendChild(listItemOne);
    
Conversely, to remove items from the DOM, we must use the `removeChild()` method. This is similar the previous method in that if we want to remove a node from the DOM, we simply pass it to this method. Let's remove the list item we just created:

	list.removeChild(listItemOne);

And that's it! You now know how to manipulate HTML markup in the DOM using node methods.


The second way that markup can be added/removed to the DOM is by using the `innerHTML` property. This property is used to read or define all nodes within an element. It can be used to add markup or delete markup in the DOM. Let's see how we add markup:

Assume we have an unordered list with an id of 'menu',

    var list = document.getElementById('menu');
    list.innerHTML = '<li>Home</li>'
    
We just added a list item containing the text 'Home' to the unordered list. Now, if we wanted to remove this list item, we can do this:

    list.innerHTML = '';
    
and all child nodes (text and HTML elements) of list are removed.

You now have a better understanding of the two ways of manipulating DOM markup using JavaScript. Be sure to implement one of these in your next project. Cheers!


