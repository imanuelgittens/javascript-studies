#####Describe how to remove registered events with the `removeEventListener` method, and give at least one example of its usage.

Event listener I'm JavaScript are removed using the removeEventListener method. This method can only be used however, if the event listener was attached using a named function. In many cases, event listeners are attached using anonymous function as shown below. 

    var button = document.getElementById('button');
    button.addEventListener('click', function(){
      console.log('Button Clicked!');
    });

While nothing is wrong with using this method, you should note that if you wanted to remove this event listener for any reason, it would not be possible because there is no way to reference the function and remove. This function would need to be referenced by name. 
Let's look at another approach - 

    var button = document.getElementById('button');
    button.addEventListener('click', handleButtonClick);
    
    function handleButtonClick(){
       console.log('Button Clicked!');
    }

Using this method, we provided a named function to listener and this gives us a reference to remove the listener at a later time if necessary. See the code for removing this Lister below

    button.removeEventListener('click', handleButtonClick);

You now know how to remove event listeners. 

#####Explain what a non-deletable or non-configurable property is and describe how it behaves in strict mode when a deletion is attempted on it.

A non-deletable or non-configurable property in JavaScript is a property of an object that cannot be deleted or edited. If we think about it, there are some things that should not be changed. Take for instance the value of PI when using the Math object. PI is always a constant so it makes sense that it should not be deletable or editable. 

The result of trying to edit or delete one of the properties depends on whether or not we are using
`strict mode`.

When we are not using strict mode and we try to edit or delete one of these properties, nothing happens.

    Math.PI = 2;
    console.log(Math.PI); //3.141592653589793
    
We see here that the property was not changed however no error were shown. This can lead to unexpected behaviours and tricky errors.
Using `strict mode` allows us to avoid all those errors because it throws an error when we try to edit or delete these types of properties.

    'use strict';
    Math.PI = 2;
    console.log(Math.PI); //TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
    
Strict mode helps to avoid these types of mistakes and many more! So be sure to include it in your JavaScript files moving forward.

#####Describe the built-in ReferenceError type and give at least one example in which this error type will be thrown.
     
>Title: The ReferenceError
Category: Handling Errors in JavaScript

A `Reference Error` in JavaScript is thrown when we try to access a variable that does not exist.
It is also thrown when we try to invoke functions that do not exist. Let's look at some code to see
this error in action.

    console.log(nonExistentVariable); //ReferenceError: nonExistentVariable is not defined
    
    nonExistentFunction(); //ReferenceError: nonExistentFunction is not defined
    
As seen in the code above, we tried to log a variable to the console that was not defined using the `var`, `let`, or `const` keywords and we got a Reference Error.
We also tried to execute an undefined function and got a reference error as well. 

It should be noted that a Reference Error will not be thrown if we try to access a non existent property of an Object. 

    console.log(Math.notAProperty);//undefined
    
We get `undefined` instead. 

You now have a better understanding of how reference errors are thrown in JavaScript.
 
#####Describe the different event handlers that can be attached to an `XMLHttpRequest` object and give examples of how to use these event handlers.

The `XMLHttpRequest` object allows for a number of event handlers to be attached that are each triggered at different stages 
of the request. The code below shows how these different event handlers can be used

    var xhr = new XMLHttpeRequest();
    
    xhr.onload = function(){
       //do something when the request has succeeded
    }
    
    xhr.onabort = function(){
       //do something when the request has been aborted
    }
    
    xhr.onerror = function(){
       //do something when the request has failed
    }
    
    xhr.onloadend = function(){
       //do something when the request has finished (either succeeded or failed)
    }
    
    xhr.onloadstart = function(){
       //do something when the request has started
    }
    
    xhr.onprogress = function(){
       //do something while the request is in progress
    }
    
    xhr.ontimeout = function(){
       //do something when a specific amount of time has elapsed
    }
    
And that's it! You now have a better understanding of the event listeners for the `XMLHttpRequest` object.

#####Explain what are request and response headers and describe using code snippets how to set them on an `XMLHttpRequest` object.

When making a request or receiving a response to/from a server, some header information is usually associated with both.
See below for a description of these headers:

**Request header**: Headers containing more information about the resource to be fetched or about the client itself. This header allows us to do things like specify the format of the data we'll accept as a response. 

**Response header**: Headers with additional information about the response, like its location or about the server itself (name and version etc.). This header allows us to do things like test the format of the data on the server

Let's explore some code to see how we can set a request header and access a response header.

    
    var xhr = new XMLHttpRequest();
    
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            var contentType = xhr.getResponseHeader('Content-Type');
            if(contentType === 'application/json'){ //test the Content Type of the response header to see if it is in JSON format
               console.log('Correct Format!');
            }else{
               console.log('Incorrect Format!');
            }
        }
    };
    
    xhr.open('GET', '/response.json');
    xhr.setRequestHeader('Accept', 'application/json'); //specifies in the Request Header that we only want JSON data.
    xhr.send();
    
And that's it! You now have a better understanding of how to set Request Headers and receive/test Response Headers

#####Describe how to make file uploads using the `XMLHttpRequest` object (use code samples).

To upload files using the `XMLHttpRequest`, we need to make use of the `formData` object. This is a special object
that handles the uploading of information (such as a file and text etc) from a form to a server automatically, without the developer
having to do too much work. Let's take a look at how this is done. 

Consider the following HTML 

    <form id="profile">
        <label for="username">Username</label><input id="username" />
        <label for="profilePic">Picture</label><input id="profilePic" type="file"/>
        <button type="submit">Save</button>
    </form>
    
We want the user to add their username and profile picture so let's see how we can make an ajax request to do so.

    var profileForm = document.getElementById('profile');
    profileForm.addEventListener('submit', function () {
        var xhr = new XMLHttpRequest(),
            formData = new FormData(), //make the form data object
            files = form.querySelector('#profilePic').files; //get all the files that were uploaded to the form
            formData.append('username', document.getElementById('username').value); //append the username to the formData object
        for (var x = 0; x < files.length; x++) {
            formData.append('file', files[x], files[x].name);//append each uploaded file to the formData object
        }
        xhr.open('POST', '/upload');
        xhr.send(formData); //make the ajax request using the formData object
        event.preventDefault();
    });
    
As shown in the code above, to use the `formData` object, we basically need to append all the information that was added by the user through the form. And then we need to 
make the ajax call (`POST` request) to the server with this `formData` object to upload that data.