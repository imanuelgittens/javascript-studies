#####Explain what a 'NodeIterator' is. Describe how to create one and give at least two examples of its usage.

A NodeIterator is a function that iterates over the members of a list of nodes in a subtree of the DOM 
or a subset of DOM elements. 

To create a NodeIterator, we use the document.createNodeIterator() method as seen below:

    var nodeIterator = document.createNodeIterator(root, whatToShow, filter);
    
    //root - specifies the root node when the iterator is created
    //whatToShow - sppecifies which parts of the nodes will be shown. For example, we can choose to only show element nodes and ignore everything else such as comments.
    //filter - a filter on the nodes that are shown
    
From there we can traverse a subsection of the DOM as shown below -

    var menu = document.getElementById('menu');
    var nodeIterator = document.createNodeIterator(tree, NodeFilter.SHOW_ELEMENT, null);
    
Here we create a NodeIterator that starts at the `tree` element and only shows element nodes without any other filter.

NodeIterator only has two methods, `previousNode` and `nextNode` and they can be used like this -

    console.log(iterator.nextNode());
    
And that's it! You now have a better understanding of NodeIterator. 
    


#####Describe at least 4 properties on the keyboard event object and explain what they are used for.

Keyboard event properties include - 

- `key`: This property returns a string with the value or name of the key that was pressed. Character keys return the character
but special keys like `Ctrl` return that same name. 

- `altKey`: This property returns true when the `alt` key was also pressed. 

- `code` : This property contains information about the key, according to which key was pressed. 

- `shiftKey`: This property returns true when the `shift` key was also pressed. 

#####Explain the behavior of the `delete` operator in strict mode as well as in quirks mode.

In strict mode, the `delete` operator behaves as follows.

It can only be allowed to delete object properties. And these properties must also be deletable (some object properties cannot be deleted.)
Let's look at an example below : 

    'use strict';
    
    var obj = {prop : 0};
    delete obj.prop; //works!
    
    delete Object.prototype; //TypeError: Cannot delete property 'prototype' of function Object()



#####Describe the base JavaScript Error object and explain some of the properties it has and what they are used for.

The base error object in javascript are created from the Error constructor and thrown when errors occur.
The properties of this base error object are - 

- name: the name of the error
- message: the message that is shown after the error name when that error is thrown. 
- fileName: (Optional) The value for the fileName property on the created Error object.
- lineNumber: (Optional) The value for the lineNumber property on the created Error object.

#####Explain the built-in SyntaxError type and give at least one example in which this error type will be thrown.

SyntaxError is thrown during the initial parsing of the script if a token is 
in a way that causes a syntax error. 

A token can be described as 

`A keyword, variable name, number, function name, or some other entity in which you should obviously not want to insert a space or a line break.`

So basically, to generate a syntax error, we need to write some invalid syntax as shown below:

    v ar test = 'I am a test string';
    
Notice we put a space in the word `var` and this causes a syntax error. 

Both of the error types we’ve seen so far have been runtime errors, which occur during the execution of the script rather than during the parsing of the script. SyntaxError exceptions are different; these occur in the initial parsing of the script and are thrown before the script even begins to execute.

To cause a SyntaxError to be thrown, we need to use a token in a way that constitutes a syntactical error. In his book, JavaScript: The Definitive Guide, David Flanagan describes a token as:

#####Title: JavaScript Syntax Errors

Category: Handling Errors in JavaScript

Describe the 'try-catch-finally' workflow and demonstrate how to use it to handle and catch exceptions.

Try, Catch, Finally is a workflow that allows us to test a particular piece of code and perform various actions
based on whether or not that code threw any errors. This block usually works as follows - 

1. We place the code we want to test for errors in the `try` block. We're basically telling JS
to trying running this code and let me know if there are any errors.

2. We 'catch' any errors in the code. If the code executes without errors, the `catch` block will 
be ignored however if there are errors in the code, we must catch them and do something with them. 
So let's say we expected a variable to be a number and it was a string. We could throw an error and catch
that error and output a message saying: 'Only numbers can be used.'

3. We run the `finally` block. This block is run whether or not errors were thrown or caught. It is 
 basically saying that this code needs to be run regardless of anything. 
 
 **Example**
 
    try{
        var menu = document.getElementById('menu');
        console.log(menu);
    }catch{
        console.log('Menu doesn't exist');
    }finally{
        console.log('done testing menu.');
    }
    
Here we target an element on the page with an ID of 'menu' and try to log
it to the console. If any errors are thrown, we log a message to the console
using the `catch` block and we use the `finally` block to signal that we are done. 