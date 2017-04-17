#####Explain what regular expression anchors are and give at least two examples of their usage.

Anchors in regular expressions specify a position within a string where a match must occur. Some of the most popular anchors in regular expressions are -

- `^` : This specifies that a match must occur at the start of the string i.e. the string must begin with the character(s) you specify after this anchor.
For example `/^str/` says that the string MUST start with the character `str`. So the word 'string' will produce a match but 'sting' will not.

- `$` : This anchor specifies that a match must occur at the end of a given string. For example, the following code specifies that a string must end in 'ing'.
`/ing$/`.

#####By referring to the different methods that can used to traverse the DOM, formulate code examples that will show how to use these methods in traversing the DOM.

Title: Practical DOM Traversal

Category: Mastering The Document Object Model

To explore some of the DOM traversal methods, we'll use the HTML code below.

        <div id="top" class="header">
            <div class="logo">
               <img src="logo.png">
            </div>
            <ul class="menu">
                <li class="menu-item">Home</li>
                <li class="menu-item">About</li>
                <li class="menu-item">Contact</li>
            </ul>
        </div>
        
Method #1 - `getElementById`

        var top = document.getElementById('top');

This method allows us to target an element based on its `id` attribute. 

Method #2 = `querySelector`

        var menu = document.querySelector('.menu');
         
This method allows us to target an element based on a CSS selector. 
Note this method only returns the first element that matches the selector. 
   
Method #3 - `querySelectorAll`

        var menuItems = document.querySelectorAll('menu-item');
        
This method allows us to target multiple elements, based on a CSS selector.
The above code return a NodeList of all the elements with a class of `menu-item`.

Method #4 - `getElementsByClassName`

        var menuItems = document.getElementsByClassName('menu-item');
    
This method allows us to target multiple elements based on their class names. 

Method #5 - `getElementsByTagName`

        var menuItems = document.getElementsByTagName('li');
        
The above code will return a NodeList of all the list items on the page. 


#####Explain what an event's default behavior is and describe the function of the `preventDefault` function and give an example of its usage.

An event's default behaviour is the expected action that event is supposed to perform as defined by the browser.
A great example to show this would be to use the HTML anchor element. When this element is clicked,
its default behaviour is to redirect the user to some URL. We can see that even if we add a `#` in the `href` attribute, it still redirects
the user to the top of the current page. 

Sometimes however, we don't want the default behaviour to happen. JavaScript has a way of stopping this default behaviour: the `preventDefault()` method.

Let's look at an example, we have the following html code.

        <a class="modal" href="#">Modal</a>
        
A you probably guessed, we want a modal to appear when we click this link instead of redirecting to another page.
Let's prevent that behaviour with some javascript. 

        var modal = document.querySelector('.modal');
        modal.addEventListener('click', function(event){
          event.preventDefault();
          
          //code to make modal appear
        });
        
We found the modal, then added a click event listener to it. Notice that we passed the word 'event' to the listener function.
This allows us to call the `preventDefault()` method on the click event that we're listening for. 
And that's it! This code stops the default behaviour of clicking a link on the page. 


#####Explain what 'strict mode' is and contrast with it with its alternative, 'quirks mode'

'strict mode' is a way to opt in to a more restrictive version of the JavaSript language. 'strict mode' changes the semantics of the language by doing the following

- eliminating some silent errors by changing them to throw errors
- fixes mistakes that could cause memory leakage and optimization problems
- prohibits syntax that could be used in future versions of the language.


'quirks mode'is an alternative way to render older html pages that don't adhere to the W3C web standards. 
 Generally, quirks mode is turned on when there is no correct DOCTYPE declaration, and turned off when there is a DOCTYPE definition. However, invalid HTML - with respect to 
 the chosen DOCTYPE - can also cause the browser to switch to quirks mode.


#####Explain what non-writable globals are and describe how they behave in relation to assignment in strict mode.

Non-writable globals are READ-ONLY properties of the Window Object. These properties are `NaN`,`undefined`, and `Infinity`.
In non strict mode, if we we try to change these variables, nothing will happen however an error will not be thrown.

        NaN = 1; //no error

However if we try to do the same thing in strict mode, we'll get the following error.

        Uncaught TypeError: Cannot assign to read only property ‘NaN’ of object ‘#<Window>’
                                                                                        
Strict mode ensures that we don't try to change these global properties directly or indirectly.


#####Explain how the `eval` operator works and give an example of its usage, and describe how the `eval` operator works in strict mode.

The `eval()` function evaluates JavaScript code represented as a string. If the string passed to the `eval()` function is an expression, 
JavaScript will evaluate the expression. For example `eval('3+4');` would return 7.
This method is dangerous to use however and is generally frowned upon because it can give some unexpected answers in certain situations. 
As such, strict mode stops this function from behaving as it normally would in certain contexts. 

Let's explore with an example. Take the code below

        eval('var x = "test"');
        console.log(x);
        
In non strict mode, the string 'test' is logged to the console but in strict mode however, we get the following error

        ReferenceError: x is not defined
        
That's because strict mode prevents eval from introducing variables in the surrounding context (which is known to cause errors).