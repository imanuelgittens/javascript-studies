#Questions 

####Question 1

Describe how the `section` element works and what it is used for.

*Title: Creating HTML Page Sections*

*Category: Common Elements for The Body Tag*

When building an HTML page, it is often necessary to divide the content on that page into various pieces so that the structure makes logical sense. The term *grouping* is also used when dividing a page and it simply means that we must group all the elements related to a specific part of the page together. HTML 5 contains a number of elements that can be used to divide a page and group specific content related to that part of the page together. Some of these elements include -

- div
- nav
- aside
- article
- section

This article will take a look and the section element and discuss its usage and purpose.

First, let's take a look at the [W3C specification](http://w3c.github.io/html/sections.html#the-section-element) for the `<section></section>` element.

>The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading (h1-h6 element) as a child of the section element.

It also makes an additional note: 

>The section element represents a generic document or application section…The section element is not a generic container element. When an element is needed only for styling purposes or as a convenience for scripting, authors are encouraged to use the div element instead. A general rule is that the section element is appropriate only if the element’s contents would be listed explicitly in the document’s outline.

Knowing when to use the `section` element can be difficult and many developers often use it incorrectly. Let's study the W3C specification for the `section` element and discuss how to use it correctly.

You should not use the `section` element just for styling (as stated in the spec above). If you need a container for styling purposes, you should use a `div`. The reason for this is that a `section` is not just a generic grouping of elements like a `div`. `section` groups related content and its purpose is greater than just styling.

The spec also states that you need to include a heading (`<h1>-<h6>`) inside of the `section` element. The reason for this is because a sections serves a specific purpose and the heading is used to reflect that purpose. 

To use the `section` element correctly, it is important to also understand the other HTML elements used to group content (shown above). Since the goal of any HTML developer should be to make their code as semantic as possible, properly understanding when and where to use certain elements is paramount. It is often recommended that developers use the section element only if another element such as [article](https://developer.mozilla.org/en/docs/Web/HTML/Element/article) or [nav](https://developer.mozilla.org/en/docs/Web/HTML/Element/nav) is not appropriate.  

To understand when to used the section element even better, let's look at some examples of places where the section element makes sense -

1) Different sections of a blog post. Let's say you are writing a post about global warming. One section could be **What Causes Global Warming** (all content in this section will be related to this heading). Another section could be **Its Effect on The Environment** (all content here would be related to this heading).

2) Different chapters of a book. Imagine that you are writing a book and you have a table of contents with all your chapters. Each entry into that table of contents can a be its own section. Once again, all the content in each section will be related to that specific chapter of the book.


It is my hope that this article has helped you to understand the purpose and usage of the `section` element a bit more. I encourage to review your previous HTML code and see if you were using this element correctly and fix where appropriate. Also, now you can now use this element correctly in all your future projects. Happy coding!

####Question 2

*Explain in detail what the CSS Box Model is.*


The CSS box model is a term used when talking about the layout and design of HTML elements. To understand the CSS box model, we must first accept it wraps a rectangular shaped box, containing several layers, around ALL HTML elements. This can be seen is we inspect an element using a modern browser such as Chrome or Firefox. The following screenshot is taken from the Chrome browser:

![Imgur](http://i.imgur.com/r0E6jag.jpg)

We can see that the `div` element that was inspected is rectangular in shape and contains several layers (it is the same for all HTML elements). Let's look at each of these layers in some more detail starting from the inside go out. 

- The innermost (blue) section contains the actual text or images of the HTML element
- The padding layer (green) contains some optional invisible space between the content of the element and the margin.
- The border layer (yellowish orange) contains an optional border surrounding the content and padding of the HTML element.
- The margin layer (orange) contains an optional invisible space between the margin of an element and any other surrounding elements.


Now that you are aware that HTML elements don't only contain the content that was added to them but also these extra layers provided by the CSS box model, now would be a good time to talk about how the box model can be used to design and layout these elements. Specifically we need to look at the width and height to these elements. 

When defining the width and height of an element, by default, these values are applied to the actual content of the element (the blue section). This may not be the final width or height of the element however as the developer can still add some padding, margins and a border. Let's say the developer added these styles - 

	{
		width: 300px
		padding: 5px;
		margin: 5px;
		border: 1px solid #333;
	}

The total width of this element will be the sum of the width, padding, margin and border.

	300 + 5 + 5 + 1 = 311px;

The total height would be the same. The CSS property that is used to control how the box model works is `box-sizing: content-box` and `box-sizing:border-box`. The first option is the default state and functions as shown above by add all the values that make up an element's size together. 

The second options works a bit differently and specifies that the total width of the element is specified by the `width` property. Any extra paddings or margins that are added to the element will cause the width of the content (blue) section to shrink so that the overall width or height does not extend the value set.Let's look at and example.

	{
		width: 300px
		padding: 5px;
		margin: 5px;
		border: 1px solid #333;
		box-sizing: border-box;
	} 

Here, the total width of the element will always be 300px. Instead the width of the inner content shrinks to accommodate the padding, margins and border. The actual width of the content of this element is 

	300 - 5 - 5 -1 = 289px;

And there you have it. You know have a better understanding of hw the CSS Box Model Works and how is can be used to layout and style HTML elements correctly. 


####Question 3

*Explain the function of the `margin` property and its variants `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`. Be sure to explain in detail the different values that this property takes and the effect of those values.*

The CSS margin property is used to add transparent space around an HTML element's border. A simple example usage of the margin property is as follows:

	margin: 5px;

This will add a margin of 5px to all side of an element. The margin property can be used in any other ways however so let's explore the syntax of the margin property and how it is implemented. 

The margin property accepts lengths as inputs. This means that the margin property can accept `px`, `em` and `%` values as inputs. Some examples include :

	margin: 3%;
	margin: 2em;
	margin: 10px;

The percentage value sets the margin as a percentage of the width of the current element. The `em` value sets the margin as a multiple of the font size of the current element and the `px` value sets margin in terms of pixels on the screen. All of these inputs can be a negative value as well and this will remove the margin by the amount specified. 

 The margin property can also be broken down into its four component parts which are 

	margin-top:
	margin-right:
	margin-bottom:
	margin-left:

Using this format, we can specify a margin for each side of the HTML element, independent of each other. When used like this, each side can accept `px`, `em`, and `%` values as well. 

The margin property can also accept multiple inputs -

1. Two inputs

	margin: 10px 5px;

This format sets the top and bottom margins as the first value and the left and right margins as the second value.

2. Four inputs

	margin: 2x 5px 4px -7px;

This format is used to set margins on all for sides of an element in one line. Starting from the top and going in a clockwise direction we can translate this example to say- 

	margin-top: 2px;
	margin-right: 5px;
	margin-bottom: 4px;
	margin-left: -7px;

And that's it! You now know how to use the CSS margin property with different syntaxes as well as the different values that it accepts. 

####Question 4

*Explain how the width of an element is calculated, taking into account the element's content, padding, border, margin, etc.*

When calculating the width of an element, it is important to remember that the CSS box model makes the browser interpret each HTML element as a rectangle with several layers. These layers are -

- the actual content of the element
- the padding of the element
- the border of the element 
- the margin of the element

The screenshot below shows the inspection of an HTML element using the Chrome browser and clearly demonstrates these layered rectangles. 

![Imgur](http://i.imgur.com/r0E6jag.jpg)

The CSS property that defines how the box model works is `box-sizing` and it accepts two inputs

	box-sizing: content-box;
	box-sizing: border-box;

The width of an element is determined by which `box-sizing` option is chosen. We'll explore the first option since is is the default. With `box-sizing: content-box;` the width of the element is the sum of the width of its *content*, the padding, the border and the margin. Let's say we have a random element with a class of "heading" and its styling is as follows - 

	*heading{
		width: 300px;
		padding: 5px;
		margin: 5px;
		border: 1px solid #333;
	}

The total width of this element in this case will be :

	300 + 5 + 5 + 1 = 311px;

If, we took the same example however, and used the second box model option (`box-sizing: border-box`) then the width of the element would be 300px. Why? Because in this mode, the width of the element is always the value specifically set using the width property. What actually happens is that the width of the content of the element will be reduced until the sum of the content width, padding, margin and border is equal to the the value specified in the width property. Here the width of the content area of the HTML element would be:

	300 - 5 - 5 - 1 = 289px;

Which means that we can now add these values together to reproduce the original width:

	289 + 5 + 5 + 1 = 300px;

When calculating the width of an element it is important to take into account the content of the element as well as its padding, margin and border properties. It is also especially important to consider the `box-sizing` property of the element as this will ultimately determine that element's width. 


####Question 5

*Explain the purpose and function of the`float` property in positioning elements. List and explain the different values this property can take. Give an example of how to use this property*

The float property in CSS takes an HTML element out from the normal document flow and places it to right or left side of its container. The syntax of the float property in CSS looks like this:

	float: left; //places the element to the left of its container
	float: right; //places the element to the right of its container

It should also be noted that text and other inline elements such as `<a>` and `<span>` simply wrap around floated elements. 

Let's look at a quick example to see how floats work.


	<div>
		<span style="float:left; padding: 50px; background-color: red; color: #fff">I am floated to the left</span>
		<span style="float:right; padding: 50px; background-color: red; color: #fff">I am floated to the right</span>
	</div>

The first `<span>` will be moved to the left of the containing `<div>` and the second `<span>` will be moved to the right as shown below: 

![Imgur](http://i.imgur.com/JO1KEjc.png)

If these elements where not floated, they would just appear one after the other in the normal flow of an HTML page. 

	<div>
		<span style="padding: 50px; background-color: red; color: #fff">I am not floated to the left</span>
		<span style="padding: 50px; background-color: red; color: #fff">I am not floated to the right</span>
	</div>

![Imgur](http://i.imgur.com/W3TyMjI.png)

All you just need to remember that floating an element takes it out from the normal flow of the document and places it to either side of its container. 
