#Questions

####Question 1

Explain the function and purpose of HTML.

Title: The Purpose of HTML
Category: Fundamentals of HTML Structure and Core

HTML (Hypertext Markup Language) is the language used to build and display web pages. The 'hypertext' part refers to the ability to move around the web by clicking special text called hyperlinks. The 'markup' part refers to the code or *tags* used to build and display the web page. Finally the 'language' part implies that HTML has a specific syntax or way of being written to make it work properly. 

As mentioned above, HTML is written using markup code, otherwise known as **tags**. These tags are usually surround by angled brackets `<>` and most come as opening and closing pairs. Let's look at an example:

	<p></p>

The tag shown above is the paragraph tag and it contains both an opening `<p>` tag and a closing `</p>` tag. *It is important to note that not all opening tags contain closing tags*. A simple example of how we use the paragraph tags is as follows:

	<p>Hello I'm a paragraph of text!</p>

There are quite a number of HTML tags available that are used to display various elements and usually, a series of these tags are combined to produce a complete web page. 

HTML gives internet users the ability to navigate the web as well as view the content on these web pages in a rich format. 

####Question 2

Describe what it means for HTML tags to have 'semantic value' and the effect this should have on how HTML documents are constructed.

Title: The Semantic Value of HTML Elements
Category: Fundamentals of HTML Structure and Core

Semantics within a langauge, is the study of the meanings of its words and phrases. We know that HTML is a language constructed using a series of tags so for these tags to have 'semantic value', they should be structured properly and their meaning should be easily understood. A semantic tag will clearly describe its meaning to both the browser and the developer. 

**Examples of Semantic tags**: 

	<form>, <table>, and <img>

These tags are easily understood cause the content they define can be deduced from their names. 

**Examples of Non-Semantic tags**: 

	<div> and <span>

These tags aren't clear in their meaning and tell us nothing about the content they define. 

Both the semantic and non-semantic tags in HTML are important and have their uses but it is crucial that we try to make our HTML as semantic as possible for several reasons -

- semantic HTML enables computers, screenreaders and search engines etc. to read and better understand the content on a web page.
- Semantic HTML is easier to work with for current and future developers as the code is easier to understand. 

I'll close by leaving you to ponder how hard it would be to properly understand and HTML document where everything is just thrown into a `<div>`.  

####Question 3

Explain the function of HTML comments and describe how to add them to an HTML document.

Comments in HTML are bits of code that aren't displayed by the browser. The syntax of a comment in HTML is shown below.

	<!-- This is a comment -->

Comments are very important when writing code and are often used write notes or reminders on why something was done. Let's look at a quick example. 

	<h1 style="color:green">Your Season Welcomes You</h1>

We look at this code and we can see that we have an h1 element that is styled with the color green. Let's say 3 months later, you come back to this code and you couldn't remember why it was styled using green. A comment here would immediately solve this problem so let's improve the example a bit.

	<!-- This elements is styled Green in spring, Yellow in Summer, Orange in Fall and White in Winter -->
	<h1 style="color:green">Your Season Welcomes You</h1>

You now know exactly why it was styled green and you also know how to change its style moving forward. 

When writing HTML (or any other language) you should make use of comments. It is not a good idea to put a comment for every single thing you write however using it smartly will allow for easier understanding and maintenance of your code. 

####Question 4

Describe the function of the `link` tag. Fully describe the attributes of this tag, the values that each accepts, and the effects of those values.

The `<link>` tag in HTML defines a link between a document and an external resource. It is most commonly used to link to external stylesheets. Let's look at an example usage of the `<link>` tag.

	<link rel="stylesheet" type="text/css" href="main.css">

As seen above, `<link>` is a singleton tag, and it provides the link to a file called main.css. It is also noticeable that this tag contains a few attributes which we will now look at in some more detail -

- rel: specifies the relationship between the current document and the linked document. In our case, the linked document is a stylesheet. There are many options for the rel attribute and a full list of them are shown below. 

(alternate, archives, author, bookmark, external, first, help, icon, last, license, next, nofollow, noreferrer, pingback, prefetch, prev, search, sidebar, stylesheet, tag, up)

- type: specifies the media type of the linked document. In our example the document is of type `text/css`.

- href: specifies the location of the linked element through a URL. in our example, the main.css file is in our current directory. the link could have easily been comething like this. `href="/css/main.css"

There are also some attributes not shown here that can be included in the `<link>` tag -

- hreflang: specifies the language of the text in the linked document.

- media: specifies on what device the linked document will be displayed.

- crossorigin: specifies how the element handles cross-origin requests. 

Just to recap, the `<link>` tag along with its associated attributes define the link between a document and an external resource. 

