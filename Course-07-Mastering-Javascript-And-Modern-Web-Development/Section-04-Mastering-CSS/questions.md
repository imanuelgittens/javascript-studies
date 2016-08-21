#Questions

####Question 1

**Explain how the TCP connection-establishment procedure, called the '3-way handshake,' works. Describe each step of this procedure.**

**Title:** The 3-Way Handshake: Establishing TCP connections

**Category:** Transmission Control Protocol (TCP) and Universal Datagram Protocol (UDP)

The Transmission Control Protocol (TCP) is a connection oriented protocol. This means that in order for two devices to communicate with each other via TCP, a connection must first be established between them. This connection is established via a process known as a **three way handshake**. But what exactly is this *three way handshake* and how how does it work? We answer these questions in the paragraphs below. 

To make our understanding of TCP easier, let's replace two computers trying to communicate with each other with two humans - Freddie and Eva. Now, let's imagine a typical conversation -

	Freddie: Hi Eva, how are you?
	Eva: I'm fine, and you?
	Freddie: Good to hear. I'm fine as well; going for a jog, care to join me?
	...

Let's break down what happened in this conversation. 


1)Freddie initiated the communication by asking Eva a question.

2)Eva replied to Freddie and asked a question of he own.

3)Freddie then responded based on Eva's response and continued talking.

Both parties now continue their happy conversation.


We find that computers follow a somewhat similar pattern when communicating via TCP. However, in order to emulate two persons having a conversation, they must first setup a connection to each other using the *three way handshake*. This allows both computers to "talk" or more accurately, it allows both computers to **send** and **receive** data from the other. 

In order to establish this connection the TCP protocol uses a series of Synchronization requests (SYN) and Acknowledgment requests (ACK). Here is how it works: 

Computer A wants to communicate with Computer B using TCP:

Computer A sends a SYN request to Computer B. This SYN request basically tells Computer B - hey, I want to communicate with you using a particular number. (N.B. this is actually a randomly generated number known as an **Initial Sequence Number**). 

Computer then sends a SYN request of its own plus a ACK request. Computer B's ACK is saying - I acknowledge that you want to communicate with me using this Initial Sequence Number. The SYN request says - I'll communicate with you using this Initial Sequence Number. 

Computer A then sends a final ACK request saying - OK gotcha. I know the Initial Sequence Number you want to use to communicate. 

	Computer A ------SYN------> Computer B
	Computer A <---SYN-ACK----- Computer B
	Computer A ------ACK------> Computer B

Now that the two computers are aware of the Sequence Number that the other is using to communicate, a connection is established and they can now both "talk" or send/receive data from the other. 

That's it for the three way handshake. It is basically establishes the initial connection needed for two computers to send and receive data to and from each other using TCP.  

####Question 2

**Describe what a style guide is. Explain some of the problems having a style guide solves and the scenarios in which a style guide is most appropriate.**

A style guide is a single resource that contains all the components (basic and complex) of a software application along with syntax used to create them. It adds stability to the software development process and offers developers a structured, reusable and easily accessible tool that adds a number of benefits to the development process. SOme of these benefits include -

Consistency in design - For big projects, teams are usually split between front and back end developers. If now style guide is in place, the front end developers may be building something that works completely different from what the back-end developers envision or expect. The back end developers may also build elements that don't conform to the design of the front and this is obviously a problem. We want uniformity throughout our applications and the best way to achieve this is with a style guide. With this guide in place, the different teams both work with the same components for all parts or the application.

Better Communication between development teams - Change is unavoidable. Many times, during the development process, we may recognize that we didn't account for a particular features or something additional is required for our software to work properly and things need to change. If this change isn't communicated well, it results in inconsistencies. To mitigate this, we can make changes to the style guide instead of the application itself. Since the style guide is the central resource for all components of the application, any change there can be easily communicated to everyone involved in the development process. 

Reuseability of Components - Style guide components can be used and re-used as long as they meet the requirements. Most software applications have many components in common (they are just styled differently), so a big advantage of having a style guide is the ability to adapt the same components to new projects without having to build them from scratch. 

Improved Testing - Style guides define components from their most basic form, all the way up to complex structures. If one component isn't behaving as expected, we can use the style guide to break the component down into its most basic elements, fix the problem and reconstruct the component with relative ease.


Style guides are best used for big projects with large development teams. Even though building one involves a lot of work, the effort definitely pays off in the end. If your team is small and strapped for resources then building a style guide might not be the best option and you may want to consider alternative methodologies.  

####Question 3

**Explain what HTML5 is. List and describe some of its features.**

HTML5 is the latest version of the web page development language(HTML) and was released on the 28th of October 2014. It's main purpose is to give web developers and browser creators more consistent standards to follow as well as provide a better and more reliable browsing experience across desktop and mobile devices. Some of the features of HTML5 include - 

- Well defined and structured (semantic) tags that are self explanatory and add meaning to the web page. 

- Direct support for video and audio files. With HTML5, third party plugins such as Adobe Flash are no longer required to play these files. 

- HTML5 introduced the Canvas and SVG elements to allow for superior graphics rendering on a web page. 

- HTML5 includes support for Geolocation and Local Storage

- HTML5 embraces responsive design so web pages can look great on desktop and mobile devices. 

To provide the functionality mentioned above, HTML5 introduced a number of new tags. Let's explore some of these tags to get a better idea of what they do and how they are used. 

	<header> and <footer> tags are used isolate the tops and bottoms of content blocks. Can be used more than once on a single page.

	<article> tag is used to identify a specific, singular piece of content, e.g., a blog post or a user comment.

	<nav> tag is used to identify navigation blocks on the web page. i.e. Menus

	<section> tag is used to define a generic section of content; similar to the currently existing <div> tag.

	<audio> and <video> tags to mark the inclusion of audio or video content.

	<canvas> tag that lets you draw graphics using a separate scripting language.

	<embed> tag to embed external content or applications into the page.

With the inclusion of these features/tags and a number of APIs, HTML5 provides a better, more structured approach to web development for all parties involved. 

####Question 4

**Describe what a CSS Combinator is and give at least one example to explain how it works.**

A CSS combinator involves the **combining** of various CSS selectors to target specific elements in the DOM. Understanding combinators are important because of the nature of CSS and a concept called **Specificity**. This concept states that when one or more styling rules conflict for a given element, the more **specific** rule wins. Let's explore how CSS combinators can be used to define very specific rules: 

Imagine we have the following HTML code:

	<nav class="menu">
		<ul>
			<li>Home</li>
			<li>About Us</li>
			</li>Contact Us</li>
		</ul>
	</nav>

We want to change the color of our menu items so we do this -

	li{
		color: blue;
	}

This changes the color of the menu items but that's not all, every other list item on the page will be blue. We don't want this so let's define a more **specific** rule.

	ul li{
		color:blue;
	}

Now, only the unordered list items on our page will be blue. This solution is still not optimal since we can have many unordered lists on a page. Let's try again. 

	.menu ul li{
		color: blue;
	} 

Notice that we are combining selectors as we go along - getting more and more specific. Here we actually select the list items in an unordered list that are contained in an element with a class of "menu". This rule is very specific so only these items get the blue color. If we want to get even more specific we could also do this 

	nav.menu ul li{
		color: blue;
	} 

This rule is even more specific than the previous and account for the case where we have more than one HTML element with a class of "menu". It only selects the list items in an unordered list, contained in a `<nav>` element that has a class of "menu". 

As you may have already guessed, we use CSS combinators to achieve these levels of specificity. We can combine any number of selectors for our CSS rules to be as broad or as specific as needed. 

####Question 5

**Describe the function of the `font-variant` property and explain the different values that this property can take and the effect of each of these values.**

The font-variant property in CSS specifies whether or not text should be displayed in the small-caps font. In small caps font, all lowercase letters are converted to uppercase letter however the size of these converted uppercase letters are not as large as regular uppercase letters. 

We use this CSS rule as follows:

	p{
		font-variant: small-caps;
	}

Here are the values that can be applied when using the `font-variant` CSS property:

1) normal - here the browser displays the font as it normally would. (This is the default)
2) small-caps - here the browsers displays the font in small caps
3) initial - here the browser sets the property to its default value
4) inherit - here the browser sets the property based on its value in the parent element. 

You now have a better idea of the font-variant CSS property and how to use it. 

####Question 6

**Explain what rounded corners are and use examples to demonstrate how to make elements have rounded corners using CSS.**

In HTML, there is an underlying concept that creates all elements all elements as boxes. (See box model for more information). Some element boxes fill the entire width of the screen will others on fill the amount of screen width required to display the element. Boxes can be very rigid and unattractive so we'd have a problem if we wanted to display things like buttons or borders on an HTML element if they we forever confined to their box/rectangular shape.  

Rounded corners can definitely help us out here. Using the CSS property (`border-radius`), we can add some curvature to these rigid HTML boxes. Let's demonstrate this concept with an example.

	<button style="padding:30px 50px; border:1px solid #999; background-color:green; color:white; font-size:24px">
			Click Me!
	</button> 

![Imgur](http://i.imgur.com/qtEiVYk.png)

We see that the button has a square border and this may not be suitable for some applications that want a more aesthetic look. Let's add some curves with the following style 

	border-radius: 5px;

	<button style="padding:30px 50px; border:1px solid #999; background-color:green; color:white; font-size:24px; border-radius:5px;">
			Click Me!
	</button>

![Imgur](http://i.imgur.com/JSC2z3r.png)

Easy right? We just made the corners of a button rounded using the CSS border radius property. 