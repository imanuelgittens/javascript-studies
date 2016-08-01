#Questions

####Questions 1

**Describe the function of the Domain Name System (DNS) and explain how this system works.**

The Domain Name System (DNS) can be thought of as an online directory that maps unique names to IP (Internet Protocol) addresses. If this sounds confusing at first, you don't need to worry, we'll explore how the system works in its entirety as well as why it is needed in the first place. 

To understand more about the Domain Name System, we must first understand why it is necessary. We must remember that computers use a different language to communicate from humans. They talk in 0s and 1s. Also, when computers are connected via a network, they use a protocol called Internet Protocol to have them communicate with each other. The Internet Protocol assigns each computer an address (IP Address) so that other computers in the network will how where to send information and where any received information came from. These IP addresses look like this -

	10.224.56.78

Each computer in a network communicate with each other using these address and this is where the problem lies - Computer remember numbers well but humans don't. Imagine you had a network of 20 computers and you had to remember the number of every computer in the network in case to wanted to communicate with one of them. Even worse, image you have a network like the Internet with millions of connected devices and you had to remember these numbers to communicate with them. Imagine anytime you wanted to access Facebook, you had to type -

	69.171.230.68

That would be crazy right?! Here is where DNS saves the day. DNS consists of a number of servers that act like one big phone book. Just as a phone book takes a name and maps that name to a phone number so to does the DNS associate names with numbers. The only difference is that these numbers are IP addressed. So imagine the DNS as something like this 

	facebook.com ---> 69.171.230.68
	youtube.com ----> 74.125.21.93
	twitter.com ----> 199.16.156.198

This helps humans to find resources on a network a lot easier because we remember names a lot better than we remember numbers. When someone types `facebook.com` now, a lookup is done on the DNS server and the server gives a response that that resources for `facebook.com` is at this location - 69.171.230.68. 

Without going into many of the finer details, you now have a better idea of how DNS works and why it is necessary. The next time you are wondering about DNS, just think of it as a phone book that associates names with numbers. Cheers!

####Question 2

**Describe the Atomic Design Approach in detail.**

Start simple and continue adding complexity - this is the concept of Atomic design. As it relates to web development, if our ultimate goal is a fully functional website, here are the steps we would go through using the atomic design approach - 

- define the simplest HTML elements e.g. buttons, labels, inputs, paragraphs, lists etc. Atomic designs builds from the ground up and this means that after we define these simple elements, we can move forward to the next stage. 

- Combine these simple elements to create small reusable blocks. A great example here would be to combine two inputs and a button to create a login form. The two inputs would be the user name and password fields and the button would be used later to to actually have the user sign in. Something like this will be reusable because you can add it to any page of the site. After we've created a few small blocks, the atomic designs approach encourages us to combine these blocks to make even more complex structures.

- We can combine the code blocks to create something like the footer for a website. We have a sign up form, some lists and a paragraph with a title for our footer. This footer can also be reused on every page of the site. 

After we've defined both basic and complex structures, we can combine them all to create a full functional web page. It will simply involve copying and pasting structures where necessary. If any errors are encountered, the developer can simply identify the structure causing the error, fix it and move forward. 

Atomic designs encourages develops to start simple and then continuously add functionality until the product is finished. It is a very good design methodology to follow since any problem can be solved once it is broken down into small enough pieces.

####Question 3

**List and explain the steps for creating a style guide.**

Creating a style guide takes some effort. There is a specific process involved in creating a style guide and even after you create it, you must manage and maintain it as well. Even though it requires some work, having a style guide in place can save you a lot of time in the long term. To help save you that time, let's look at some of the steps involved in creating a style guide - 

1. Identify the basic UI elements. 

Using Atomic Design, we start small and continuously add complexity. Here we identify the basic elements of the desired application. Some examples of these elements include -

- colors
- buttons
- links
- fonts
- font sizes
- inputs

There are many more basic UI elements that are a part of a typical web project however we won't go through all of them here. Just remember that at this stage, ALL the basic UI components need to be identified and defined.

2. Group Basic UI Components. 

In this stage, we take the basic UI components that we identified in stage 1 and begin grouping them to form more complex structures. We can take some inputs and a button creating a form, we can take a list and make a menu etc. We can even go as far as to create structures for the entire header and footer components of our site. 

3. Create Templates

This is the final stage when creating a style guide. We mockups of how the entire site will look using the basic and complex UI components created in the previous stages. The site will not be fully functional but this templates can be easily edited when real data needs to be added to the application. 

After these three steps, your style guide is now complete. You can freely use and reuse any of the components to build your application. 

####Question 4

**Describe some of the disadvantages of using a style guide and the issues a team may run into as they develop and implement one.**

**Title: Disadvantages of Developing and Using Style Guides**

**Category: Style Guide Driven Development**

While a style guide's advantages outweighs its disadvantages in many ways, it is still important that you and your team consider these disadvantages to determine if the Style Guide approach is right for you. Here are some of the disadvantages you may want to consider -

- Developing a style guide is time consuming. If you are strapped for time for any reason and your project has tight deadlines, you may consider not using a style guide. Developing a style guide requires time from your team to develop and communicate to the client. The client then has to sign off on the style guide and this process can take some time as they may have a lot of changes. Here it may be a better idea to use one of the style guides already available online. 

- Style guides must be maintained. Apart from initially developing the style guide, it must be continuously maintained. The web moves at a fascinating speed so something developed now may need to be improved or upgraded in as little as six months. Somethings may not even be relevant in 6 six months time and need to be changed entirely! If you have a small team and don't think you can spare any resources, you may not want to use a style guide. 

- Requires a change of thinking. If this is the first time your team will be using Style Guide Driven Development for a project, you may need to consider the effort required for your team to adopt this approach. Since it is new, you may make a lot of mistakes at the start and may not follow the style guide as best as possible but given time, these small issues can be resolved. 

These are the main disadvantages of using style guides. I've you think you can overcome these challenges or put measures in place to to mitigate them then Style Guide Driven Development is the way to go. If not, you may want to consider adopting a different methodology for your project. 