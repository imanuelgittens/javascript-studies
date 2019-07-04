#Exercises

#### Exercise 1

Question 1)

We can also use the catholic church hierarchy as an analogy to the concept of the DOM. We have the Pope (the main node) at the top of the tree. Under the Pope there are the Cardinals which are like child nodes of the Pope (All the Cardinals are siblings of each other). We then have the Archbishops who are children of the Cardinals and they are also siblings of each other. We then have the Bishops who are children of the ArchBishops and priests who are children of the Bishops. Finally we have the Catholics who are children of the Bishops. We can also see that a Bishop can have many Catholics as children (i.e. his entire congregation of catholics are his children). An Archbishop can have many Bishops as children and Cardinals can also have more than on Archbishop as children. Hence we see the same tree structure utilized by the Catholic church in use for the DOM. 

Question 2)

Disadvantages of the DOM

- stores the entire document in memory so the operating speed is a bit slower.
- Since it stores the document in memory, it can consume a lot of memory if the files are very large. 

Question 3)

Taken from the official W3C definition - 

	"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

The DOM defines a standard for accessing documents like XML and HTML and is separated into three parts: 

Core DOM - standard model for any structured document
XML DOM - standard model for XML documents
HTML DOM - standard model for HTML documents


The HTML DOM defines a standard way for accessing and manipulating HTML documents. With this DOM all HTML elements can be accessed and this DOM also defines the objects, properties and methods of all HTML elements.

The XML DOM defines a standard way for accessing and manipulating XML documents. With this DOM all XML elements can be accessed and this DOM also defines the objects, properties and methods of all XML elements.

So we can see that the differences between the two are subtle. The DOM is still a standard model for any structured document however the HTML DOM and XML DOM are just used to manipulate elements specific to HTML or XML.

#### Exercise 2

Question 1)

	document.links['contact'].href = ”http://www.learn.moderndeveloper.com”;

Question 2)

	document.images['footerImage'].height = "300px";
	document.images['footerImage'].width = "800px";

Question 3)

Additional properties of the location object include:

1) hash - Sets or returns the anchor part (#) of a URL

2) host - Sets or returns the hostname and port number of a URL

3) search - Sets or returns the querystring part of a URL. An example of a URL with a query string is 

	example.com/over/there?name=dog

Additional properties of the navigator object include:

1) language - returns the language of the browser

2) geolocation - Returns a Geolocation object that can be used to locate the user's position

3) cookieEnabled - Determines whether cookies are enabled in the browser 

#### Exercise 3

Question 1)

	if(nodeForm.nodeType == Node.ELEMENT_NODE){
		//do something
	}

	if(nodeInput.nodeType == Node.ELEMENT_NODE){
		//do something
	}

Question 2)

	nodeForm.nodeName;

Question 3)

	nodeInput.nodeValue

#### Exercise 4

Question 1)

	nodeNav.childNodes;

This command will return an array with one element. This is because the only childNode of the `div` element is the `ul` element.

Question 2)

	nodeNav.childNodes[0].firstChild;

Question 3)

	nodeNav.childNodes[0].childNodes[1].nextSibling;

#### Exercise 4

Question 1)

	nodeNavList.firstChild;

Question 2)

	var toRemove = nodeNavList.childNodes[1];
	nodeNavList.removeChild(toRemove);

Question 3)

	nodeNavBarDiv.getAttribute('id');

Question 4)

	var last = nodeNavList.lastChild;
	last.setAttribute('id', 'al');

#### Exercise 5

Question 1)

	var parent = document.getElementById('navBar');
	parent.setAttribute('id', 'bankingTopNavigation');

Question 2)

	var listItem = document.createElement('li');
	var listItemText = document.createTextNode('ACH/Wire Transfer.');
	listItem.appendChild(listItemText);

	var unorderedList = document.getElementById('navBar').childNodes[0];
	unorderedList.appendChild(listItem);

Question 3)

	var unorderedList = document.getElementById('navBar').childNodes[0];
	var firstValue = unorderedList.firstChild.nodeValue;
	var lastValue = unorderedList.lastChild.nodeValue;


#### Exercise 6

Question 1)

	document.querySelector('#navBar');

Question 2)

	document.querySelectorAll('.Info');

Question 3)

	var listItems = document.querySelectorAll("#navBar");
 
  var i;
 
  for (i = 0; i < listItems.length; i++) {
 
   	listItems[i].style.color = "red";
   	listItems[i].style.textDecoration = "underline";

Question 4)

	var elementSelected = document.querySelector(“.topNavigation”);//there is no element in the HTML provided with the class of "topNavigation".

#### Exercise 7

Question 1)

	document.querySelector('li#ob');

Question 2)

	document.querySelectorAll('#navBar').length;

Question 3)

	document.querySelector('li#cc').innerHTML;
 
  }

 