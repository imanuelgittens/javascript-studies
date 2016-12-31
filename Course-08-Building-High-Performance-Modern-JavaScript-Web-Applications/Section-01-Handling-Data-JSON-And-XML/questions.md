#Questions

####Question 1

**Fully explain what DTD (Document Type Definition) or XML Schema is and its function in defining and verifying the validity of XML documents.**

A document Type Definition (DTD) or XML Schema defines the structure and legal building blocks of an XML document. Unlike HTML, any type of tag can be used in an XML document. For example, if we wanted to define a dog element in XML we could simply make a dog tag (no pun intended),

	<dog></dog>

We can even define information about this dog in tags: 
	<dogs>
		<dog id="1">
			<color>Brown</color>
			<breed>Shepard</breed>
		</dog>
		<dog id="2">
			<color>Black</color>
			<breed>Retriever</breed>
		</dog>
	</dogs>

Since XML is so dynamic, we need to enforce some rules so that applications that need to share data using XML can do so without errors. Here is where the DTD comes in, it ensures that the XML document conforms to some specific rules before an application accesses its data. We definitely wouldn't want an application that expects data about dogs to pull data about cats instead! 

Let's look at an example of a DTD to get a better understanding of how it works. 

	<!DOCTYPE dogs
	[
		<!ELEMENT dogs (dog+)>
		<!ELEMENT dog (color+, breed+)>

		<!ATTLIST dog id CDATA #REQUIRED>
	]>	

XML documents are comprised of Elements, Attributes, and Entities. Our example above pays closer attention to the first two. We've defined a DOCTYPE of `dogs` to specify that this DTD refers to our dogs document. We then start defining the structure and rules of the document. 

1. We have a `dogs` element (defined by the `!ELEMENT` keyword) and within that declaration, we said that the `dogs` element can and must have one or more child `dog` elements. The `+` sign after the `dog` in brackets indicates that this element must appear one or more times. 

2. We've defined a `dog` element as well as the child elements that it can contain. Note that just like the first line, each child element must appear one or more times. Also note that the child elements must appear in the order specified: color then breed. 

3. Our `dog` elements has an  ID attribute and we've defined it here. This lines states that the dog must have an ID (#REQUIRED) and this ID is interpreted as CDATA or Character data (Not XML markup). 

It should also be noted that this is an example of an internal DTD, the same DTD could be defined in another file and linked similar to how we link CSS and JS files. For example, we could have defined this DTD in a file called `dogs.dtd` and link like this:

	<!DOCTYPE dogs SYSTEM "dogs.dtd"> 

This example only scratched the surface of the DTD, for more information on XML and the DTD you can checkout this [site](http://www.xmlmaster.org/en/article/d01/c03/) which goes into a lot more details on how it all works. Happy coding!





####Question 2 

**Explain the function of the `JSON.stringify` method and give an example of its usage.**

The `JSON.stringify` method is used to convert a JavaScript value to a string. This method also has two optional parameters - the first is a `replacer` function that can be used to modify the values before converting it to a string and the second is a replacer array that defines the values that can be included in the string (ignoring the rest).

While the JSON.stringify method can be used on a number of values in JavaScript, we'll use an Object in this example for a clearer understanding of the intent of this method. Let's say we have a dog object :

	var dog = {
		color: 'brown',
		breed: 'retriever'
	}

We can run the JSON.stringify method on this object and get a JSON string from it. 

	var dogJson = JSON.stringify(dog);

See how it works [here](https://repl.it/Eyjs/1)

The JSON.stringify method is used because we need to convert the application data into a string before we can transfer it over a network. Once received at the destination, we can use another method to get it back to its original format and we'll look at this method in our next article. 


####Question 3

**Explain the function of the `JSON.parse` method and give an example of its usage.**

**Title**: JSON.parse: Creating JavaScript Objects from JSON

**Category**: JSON and XML in JavaScript

In the previous article, we talked about converting a JavaScript object into a JSON string so that the data could be transferred over the network. In this article, we'll talk about how we get this data back to its original format for easier manipulation. As we saw [here](https://repl.it/Eyjs/1), we changed our dog object into a string so let's assume that our application receives this string of data:

	var dogJSONString = '{"color":"brown","breed":"retriever"}';

We can get this data back into it's original format by using a second method on the JSON object called `parse`. 

This JSON.parse method parses a JSON string and reconstructs the JavaScript value or object defined by the string. An optional `reviver` function can be used to modify the data before reconstruction. 

	var dog = JSON.parse(dogJSONString);

See an example of how this works [here](https://repl.it/EykF/1)

This will allow us to recreated the original `dog` object so that its data can be used and manipulated. 

And that's it! You now know how to change JS values to a JSON string and how to reconstruct them back to their original format. 

