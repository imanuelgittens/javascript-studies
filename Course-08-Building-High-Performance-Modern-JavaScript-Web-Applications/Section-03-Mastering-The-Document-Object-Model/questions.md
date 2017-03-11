#Questions

####Question 1 - Describe in detail what XML is and explain how to write valid XML documents.

XML stands for Extensible Markup language and was designed to store and transfer data. Some important notes on
XML include -

- It was designed to describe data
- It is a markup language similar to HTML
- Tags in XML are NOT predefined. Users must define their own tags.
- XML uses a Document Type Definition (DTD) to formally describe the data

Let's look at some XML to get a better idea of how it works

    <email>
        <to>Sam</to>
        <from>Tim</from>
        <subject>Hello</subject>
        <body>How are you?</body>
    </email>

We see that the tags are describing what they are used for and we can get a pretty good idea of
what this XML markup is for without actually knowing the language.

XML is also defined by something called a DTD with ensures that the documents adhere to certain rules.
Let's look at a simple DTD now

    <!ELEMENT email (to+, from, subject, body)>

This is a simple DTD rule for the email element that we created above. It basically says that information
in an email element must be defined in the order to --> from --> subject --> body. Also it says that it
may have one or more `to` elements, one `from` element, one `subject` element and a body element. More information
about creating DTDs can be found [here](http://www.xmlfiles.com/dtd/).

Whenever we transfer or store data, validity of that data is very important. Here are some tips on
ensuring XML data is valid -

- XML data must meet the requirements of the DTD
- XML data be properly formatted.

This is nice [tool](http://www.xmlvalidation.com/) that assists with validating XML documents. Hope it helps with your future
development. Cheers!

####Question 2 - Describe how regular expression character sets work and give an example of their usage.

Regular expressions are used to match patterns within a given data set. They allow for this matching to happen using
a number of different syntax formations but this article will delve into what is know as a character set and see how they
work to match patterns.

A character set in regular expressions allow for the matching of an element within a set of characters.
Character sets are denoted by square brackets in regular expression syntax and look something like this

    [aeiou]

The regular expression above will match any vowel.

Regular expressions also take things further with character sets. A range of common characters can be matched
by placing a hyphen between the start and end of the range. Let's look at an example

    [A-Z]

This regular expression will match any **uppercase** letter between A and Z (inclusive). We can also group
 these ranges together which allows us to get fancy with regular expressions. What patterns to you think this
 expression will match?

    [A-Za-z0-9]

 If your guess was uppercase A to Z, lowercase a to z and the digits 0 to 9, then you'd be correct! In other words
 this expression matches all alphanumeric characters!

 Hopefully this introduction on character sets allow you a expand your pattern matching skills. Keep on coding!

 ####Question 3 - Explain how the `document` `createComment` method works and give an example of its usage.

 The `document.createComment()` method creates a comment node and returns it. It accepts a string parameter defining the
 comment string.

 A great example of the creation and appending of a comment can be found in this [pen](http://codepen.io/imanuelgittens/pen/Pppdvm)

 You now have a better understanding of how to use the `document.createComment()` method.

 ####Question 4 - Explain how the HTML element `children` method works and give an example of its usage.

 the `Node.children` method returns a live HTMLCollection of all the child elements of that node. This [pen](http://codepen.io/imanuelgittens/pen/xqqyOG)
shows a great example of the `children` method in action and how to use it. Happy coding!

 ####Question 5 - Explain what a 'TreeWalker' is. Describe how to create one and give at least two examples of its usage.

 A TreeWalker is an object containing a sub-tree of the DOM. The TreeWalker also provides methods for interacting with the subtree stored in that object.
 It can work on any node type and is fairly simple to create. lets look at some example code to see how we can make one.

 We have some HTML

    <div id="top-menu">
        <ul>
            <li>HOME</li>
            <li>CONTACT</li>
        </ul>
    </div>


 This HTML will be a subtree of the larger DOM. To create a TreeWalker with this subtree we do the following:

     var menu = document.getElementById('top-menu');
     var walker = document.createTreeWalker(menu, NodeFilter.SHOW_ELEMENT, null);

 This first argument for TreeWalker is the node we want to start walking at.
The second argument is a constant which specifies that the TreeWalker should only walk element nodes and skip other types of nodes.
The third argument is a filter that specifies what types of nodes the TreeWalker will contain. We passed null because we don't want to use a filter.
More information on these filters can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker).

Treewalker also gives us the following methods for traversal -
- firstChild
- lastChild
- nextNode
- previousNode
- nextSibling
- previousSibling
- parentNode

See this [pen](http://codepen.io/imanuelgittens/pen/EWWdRP) for this TreeWalker example in practice.

