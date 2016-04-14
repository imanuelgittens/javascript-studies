#Questions

####Question 1

Explain the function and purpose of HTML.

Title: The Purpose of HTML
Category: Fundamentals of HTML Structure and Core

HTML (Hypertext Markup Language) is the language used to build and display web pages. The 'hypertext' part refers to the ability to move around the web by clicking special text called hyperlinks. The 'markup' part refers to the code or *tags* used to build and display the web page. Finally the 'language' part implies that HTML has a specific syntax or way of being written to make it work properly. 

As mentioned above, HTML is written using markup code, otherwise known as **tags**. These tags are usually surrounded by angled brackets `<>` and most come as opening and closing pairs. Let's look at an example:

	<p></p>

The tag shown above is the paragraph tag and it contains both an opening `<p>` tag and a closing `</p>` tag. *It is important to note that not all opening tags contain closing tags*. 
A simple example of how we use the paragraph tags is as follows:

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

I'll close by leaving you to ponder how hard it would be to properly understand an HTML document where everything is just thrown into a `<div>`.  

####Question 3

Explain the function of HTML comments and describe how to add them to an HTML document.

Comments in HTML are bits of code that aren't displayed by the browser. The syntax of a comment in HTML is shown below.

	<!-- This is a comment -->

Comments are very important when writing code and are often used write notes or reminders on why something was done. Let's look at a quick example. 

	<h1 style="color:green">Your Season Welcomes You!</h1>

We look at this code and we can see that we have an h1 element that is styled with the color green. Let's say 3 months later, you come back to this code and you couldn't remember why it was styled using green. A comment here would immediately solve this problem so let's improve the example a bit.

	<!-- This elements is styled Green in spring, Yellow in Summer, Orange in Fall and White in Winter -->
	<h1 style="color:green">Your Season Welcomes You!</h1>

You now know exactly why it was styled green and you also know how to change its style moving forward. 

When writing HTML (or any other language) you should make use of comments. It is not a good idea to put a comment for every single thing you write however using them smartly will allow for easier understanding and maintenance of your code. 

####Question 4

Describe the function of the `link` tag. Fully describe the attributes of this tag, the values that each accepts, and the effects of those values.

The `<link>` tag in HTML defines a link between a document and an external resource. It is most commonly used to link to external stylesheets. Let's look at an example usage of the `<link>` tag.

	<link rel="stylesheet" type="text/css" href="main.css">

As seen above, `<link>` is a singleton tag, and it provides the link to a file called main.css. It is also noticeable that this tag contains a few attributes which we will now look at in some more detail -

- rel: specifies the relationship between the current document and the linked document. In our case, the linked document is a stylesheet. There are many options for the rel attribute and a full list of them are shown below. 

(alternate, archives, author, bookmark, external, first, help, icon, last, license, next, nofollow, noreferrer, pingback, prefetch, prev, search, sidebar, stylesheet, tag, up)

- type: specifies the media type of the linked document. In our example the document is of type `text/css`.

- href: specifies the location of the linked element through a URL. in our example, the main.css file is in our current directory. the link could have easily been something like this. `href="/css/main.css"`

There are also some attributes not shown here that can be included in the `<link>` tag -

- hreflang: specifies the language of the text in the linked document.

- media: specifies on what device the linked document will be displayed.

- crossorigin: specifies how the element handles cross-origin requests. 

Just to recap, the `<link>` tag along with its associated attributes define the link between a document and an external resource. 

####Question 5

Fully describe the function of the pre tag.

In HTML, the `<pre>` tag defines preformatted text. The text within this tag is displayed in a fixed-width font like Courier or Monaco and it shows both spaces and line breaks that are otherwise removed by HTML tags. The `<pre>` element is best used for text that has typographic formatting that affects the meaning of the content. A great example for usage of the `<pre>` tag is for displaying computer code on a web page. A classic situation would be the Apostrophe vs Quote dilema. When writing code, there is a big difference between `''` and &rsquo;&rsquo; so it is always a good idea to use the `<pre>` tag if you want to display exact typographic formatting of what you put on a web page. 

####Question 6

Explain in detail the function of the select tag and how it is added to web pages.
Title: Making Selections with HTML Select Tag

In HTML, the `<select>` tag is used to create dropdown lists. It also contains a one or more `<input>` tags that each define one of the options available within that dropdown. Let's look at a quick example of how to use this tag.

	<select name="select">
	  <option value="value1">Value 1</option> 
	  <option value="value2" selected>Value 2</option>
	  <option value="value3">Value 3</option>
	</select>

In our example above we created a dropdown list with three elements - Value1 , Value 2 and Value 3. This same code is rendered as HTML below.


<select name="select">
  <option value="value1">Value 1</option> 
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>

Usually, this tag is placed within a form so that the user has some options to select before submitting. This tag also has a number of attributes that define how it behaves and one of the more popular attributes is `multiple` which allows users to select more than one option. Let's add this to our example. 

	<select name="select" multiple>
	  <option value="value1">Value 1</option> 
	  <option value="value2" selected>Value 2</option>
	  <option value="value3">Value 3</option>
	</select>

And this will render in HTML like so:

<select name="select" multiple>
  <option value="value1">Value 1</option> 
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>

This allows users to hold down SHIFT and click multiple options from the dropdown. Other attributes of the `<select>` tag include:

- autofocus: this causes the select tag to automatically get focus when the page loads
- disabled: this attribute causes the select tag to be disabled
- form: defines one or more forms that the select tag belongs to
- name: specifies the name of the dropdown
- reuqired: forces the user to choose an option before submitting the form
- size: defines the number of visible options in the dropdown

With that, you have everything you need to start using the `<select>` tag. Happy Coding!