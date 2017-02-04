##Question 1 - Describe JSON and explain what it is used for.

JSON stands for Javascript Object notation and is a format used to store information in an organized and easy to access manner. JSON files are text files that are easily readable and writeable by humans and also easily parsed by machines. 


JSON is language independent and is used to send and receive data  over a network such as between the client and server. It can also be used to store data.  

Let’s look at an example of some JSON to get a better feel of how it looks and how it can be used. 

    “Address”: {
         “Street”: “1st Street”,
         “City”: “San Fernando”,
         “Country”: “Trinidad and Tobago”
    }

We immediately recognize the similarity between JSON and JavaScript Objects. The only difference is that JSON requires everything to be in quotes. We can access JSON data the same way that we access data in a JavaScript Object as well. For example, if we wanted to get the street name of this address we could just do:

    var street = address.street;

Or

    var street = address[“street”];

We can also store data within JSON using a method similar to JavaScript Object - 

    Address.street = “2nd Street”;

The JSON format is very lightweight, making it an ideal choice for transferring and storing data so be sure to make use of it during your next web project! Cheers. 


##Question 2 - Describe the two different ways to create regular expression objects. Explain when to use each type of regular expression construction method.

Title: Creating Regular Expressions

Category: Regular Expressions in Depth

In JavaScript, there are usually a couple different methods that can be used to accomplish any given task. Let’s look at the task of creating an array. We could either use the literal form:

    var array = [1,2,3,4];

Or we could use the constructor form:

    var array = new Array(1,2,3,4); 

Each option accomplishes basically the same thing - it creates an array with some values stored in it. Similarly, when creating regular expressions, we have the option of creating them using the literal form or the constructor form. Let’s look at each in more detail.

**Literal Form**

    var regex = /modern/;

To create a regular expression using the literal form, we need to enclose the sequence we’d like to match within two forward slashes. The example above will match the word ‘modern’ whenever it shows up in a given string. 

**Constructor Form**

    var regex = new RegExp(‘modern’);

To create a regular expression using the constructor form, we need to use the ‘RegExp’ constructor as well as the ‘new’ keyword. We must also pass the sequence or pattern that we’d like to match to the RegExp constructor and it must be enclosed in quotes. 

The literal form of creation is almost always preferred when creating items in JavaScript however there are times when using the constructor form is necessary. A great example of when the constructor form is necessary is when the regular expression comes in the form or user input (let’s say a search box.”

Let’s assume we have a search box on the page and the user entered the word ‘modern’ into that box. We stored this input to a variable called ‘pattern’.

    var pattern = 'modern';

If we used the literal form of a regular expression to test this, we’d run into some problems.

    var pattern = 'modern';
	 var regex = /pattern/;

	 var testString = 'I am a modern developer';

	 regex.test(testString);

We’d get a false result because or regular expression is searching for the word ‘pattern’ instead of the text stored in our variable. 

Let’s change things up a bit and use the constructor form. 

    var pattern = 'modern';
	   var regex = /pattern/;

	   var testString = 'I am a modern developer';

	   regex.test(testString);

In this form, the result is true because we are actually testing the string against the value inside of our ‘pattern’ varibable. 

You now have a better understanding of how to create regular expressions and how to use them correctly depending on how they need to be implemented. 


##Question 3 - Describe the properties that regular expression objects have and explain what each property is used for.

Regular expression in JavaScript have a number of properties defines the scope of the regular expression as well as how it functions. Let’s look at these properties and discuss their purpose and how they might be used. 

**Global** - this property is set to true or false depending on whether the ‘g’ flag is used. This global flag makes the pattern match ALL occurrences rather than stopping after the first match. 

**Ignore Case** - This property is turned on or off depending on whether the `i` flag was used. This case insensitive flag makes the pattern ignore the case of the match. This means that the pattern will match both ‘i’ and ‘I’ if that was index its search parameter. 

**Last Index** - When we use the `g` flag in a regular expression, multiple matches may be found on a string. The Last Index property is used to keep track of the index at which to start matching from in successive searches. Initially this property is set to 0.

**Multiline** - This property is set to true or false depending on whether the `m` flag is used. This `m` flag will search for patterns across multiple lines instead of just the first line. 

**Source** - This property contains the regular expression text.

**Sticky** - If the `y` flag is used, this property will be set to true. If this flag is set to true, it makes the search continue from the last match instead of starting at the beginning of the input string. 

**Unicode** - If the `u` flag is used, this property will be set to true. This enable the new Unicode ES2015 syntax in pattern matches. 

Before I go, let me just show you how we can use these flags in a regular expression. Take a look at the example below - 

	 var regexp = /modern/g/i;

This will search the entire document for the word ‘modern’ ignoring the case. 

We can also use the flags with the RegExp constructor - 

    var pattern = new RegExp('modern developer', ‘g’, 'i');

You now know how about the regular expression properties and how to invoke some of them using flags. 


##Question 4 - Describe how regular expression range character sets work and give at least one example of their usage.

Regular expressions offer very powerful pattern matching functionality and offers a number of way that we can match patterns more efficiently than we might think. Let’s look at the case where we might want to match any letter in the english alphabet - do we need to write every letter in the alphabet within a regular expression to make the match? Fortunately not (this would be a lot of work!) and we can use the character range functionality of regular expression to get the job done. Using the square brackets we can find any character in a list of sequential characters by using a dash to indicate a character range.  

For example, if we wanted to match a letter in the alphabet, we could to this:

     var regex = /[a-z]/

This would match any lowercase letter found in a string. It should be noted that multiple character ranges can also be used within a single pair of square brackets. If we wanted a more accurate match of letters in the alphabet, we can extend the example above like this:

    var regex = /[a-zA-Z]/

This would now list all uppercase and lowercase letters in a given string. 

All you need to do is place a dash between two sequential characters all within square brackets to invoke your regex character ranges. Cheers!