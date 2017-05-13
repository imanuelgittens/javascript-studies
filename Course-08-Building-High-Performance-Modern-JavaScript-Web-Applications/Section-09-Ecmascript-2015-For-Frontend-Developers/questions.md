##Questions

Fully explain how the `XMLHttpRequest` methods 'open' and 'send' work and give an example of their usage.

The `open` method of the XMLHttpRequest object is used to open the connection. See below for an example of its usage

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    
The `open` method takes two arguments, the first being the HTTP Request method eg GET or POST.
The second argument is the URL that we're making the request to. In the above example, we are making a
GET request to the URL `https://jsonplaceholder.typicode.com/posts`. The open method also accepts a third argument
that specifies whether or not the request should be asynchronous. Usually we want this to be `true` and
by default it is set to `true`.

SO far we've setup the request to be sent but we have't actually sent it. For that, we'll need to use the `send` method
of the XMLHttpRequest object. 

THe `send` method actually begins the request. The example code below shows how the send method is executed

    xhr.send();
    
This method starts the ajax process by making the provided HTTP request to the URL provided in the `open` method. 

This `send` method can also take some optional arguments that define the type of data we want to send to the server.

* ArrayBufferView
* Blob
* Document
* DOMString
* FormData

A DOMString is a regular UTF-16 string, and is one of the most common types of data that we’ll send to the server; 
it is usually JSON that has been stringified. FormData is a special type of object that is used to send data from forms to the server.

The `open` request sets up the request and the `send` method actually performs the request. You now know how to use the XMLHttpsRequest
 `open` and `send` methods.