#Questions

####Question 1

**Describe what style inheritance is and use examples to fully describe how it works.**

Style inheritance is a method through which certain CSS properties are passed from a parent HTML element down to their children. Inheritance in CSS is easily understandable if we compare it to inheritance in genetics. Consider a mother and child both have brown hair and blue eyes. In the same way, a parent element and its child element in HTML will have the same font family.

In CSS, inheritance occurs automatically (in applicable scenarios) and developers can also manually invoke inheritance. Let's look at both cases to get a better idea of how they work.

**Automatic Inheritance**

Automatic inheritance only occurs for certain CSS properties. Let's take the `font-family` property for instance and define a style like this:

    body{
      font-family: 'Roboto', sans-serif;
    }

`font-family` is one of those properties that are inherited automatically by all child HTML elements. Imagine if something like this was not automatically inherited, we'd then have to define this style for every single HTML element that we added to the page! This would be very cumbersome and repetitive. As programmers, we want to write the least code possible and we can already see how inheritance assists us with that goal.

It is important to note that not all CSS properties are automatically inherited. Take a property like `border` for instance and imagine we extended the style above and added a border:

    body{
      font-family: 'Roboto', sans-serif;
      border: 2px solid red;
    }

If every child element inherited this style, we'd have a complete mess of red borders all over our page.

This [link](https://www.w3.org/TR/css-2010/) shows a nice table at the bottom of the page that showcases which CSS properties are automatically inherited and which are not.

**Manual Inheritance**

CSS also allows us to manually invoke inheritance. We can do this quite simply by adding the `inherit` value to the CSS property that we'd like to inherit. Let look at an example:

Suppose we created a `div` with a top margin of 30px;

    <div class="test">
        <p>Hello</p>
    </div>

Style:

    .test{
      margin-top:30px;
    }

Margin is a property that is NOT inherited automatically by child elements but suppose we wanted to give our `<p>` element then same margin as the `div` element? To do this, we can manually invoke inheritance as shown below:

    .test p{
      margin-top: inherit;
    }

Using the value of `inherit` we instruct the margin of the `p` element to be the same as its parent element which in this case is our `div`. The `<p>` element will also get a margin-top of 30px.

And that's it! You now have a better understanding of inheritance and how to use it.

####Question 2

**Explain the difference between "Step into next function call" and "Step over next function call."**

The Chrome Dev Tools can be used to debug front end logic like JavaScript right in the browser. It allows us to set breakpoints and carefully inspect how functions are executing and track the the results of these functions as they progress.

When debugging code like this, the Dev Tools gives us some features that can be used to 'step through the code' and see exactly how it works. We have two main tools for perusing the code -

- one steps into the next function call
- the other steps over the next function call

Let's get a better understanding of how they both work.

I've written a script (shown below) that executes when we click the button on the screen.

![Imgur](http://i.imgur.com/b3ALB8U.png)

As you can see, we are using the 'Sources' tab of the Chrome Dev tools and it allows us to set breakpoints in the code so that we can debug. It also gives us the ability to `step into the next function call` and `step over the next function call`.

![Imgur](http://i.imgur.com/YmYJyYt.png)

When we click the button, the function will run and stop at our breakpoint. It is at this stage that we can either step in or step over.

![Imgur](http://i.imgur.com/YGnziPm.png)

You'll notice that we added a breakpoint where a function is called. This is so that we can get a better understanding of how 'step in' and 'step over' work. Let's see what happens when we step in.

![Imgur](http://i.imgur.com/Kmm3WgO.png)

The next line that the debugger goes to is the function that was called. In other words, it 'steps into' that function and allows you to see what happens in that function specifically.

Let's see what happens when we 'step over' now.

![Imgur](http://i.imgur.com/B9c54bL.png)

We see that the next line it went to is the `console.log()` line. Which means that it skipped the entire `square()` function call. We can say it 'stepped over' the function.

Taking the definitions from [Google](https://developers.google.com/web/tools/chrome-devtools/javascript/step-code) -

    Step Over - Executes whatever happens on the next line and jumps to the next line.

    Step In - If the next line contains a function call, Step Into will jump to and pause that function at its first line.

And that's it! You now have a better understanding of how these tools can be used to debug your code.

####Question 3

**Define media queries and describe the different kinds of media queries that exist. Give code samples of each kind of media query.**

A media query enables developers to define styles for different devices. In the CSS2 specification, it was possible to define the styles based on the device itself. For example, we could define styles for a computer screen, for a printer and for a hand held device. CSS3 however, extends this capability and allows us to use the media queries to define styles based on the **capability** of the device.

These device capabilities include:

- width and height of the viewport
- width and height of the device
- orientation (is the tablet/phone in landscape or portrait mode?)
- resolution

Let's look at an example of a media query to get a better understanding of how it works.

    @media screen and (min-width: 480px) {
        body {
            background-color: lightgreen;
        }
    }

The media query above defines a style for a device whose **screen** has a width of 480px and above. It will set the background color of the body to light green.

The above example showed the `screen` media type however there are other device types that can be used with media queries. Let's look at the remaining types in some more detail:

**Print Media Query**

    @media print{
      body{
        font-size:17px;
      }
    }

**Screen Reader Media Query**

    @media speech{
      aside{
        display:none;
      }
    }

The last one defines styles for **all** devices. Example:

    @media all{
      body{
        background:blue;
      }
    }

And that's it! You can now use the different types of media queries to define style for any device you wish. Happy coding!



####Question 4

**Describe what accessibility is and explain why it is important for web applications to be accessible.**

Accessibility in the context of the web refers to the ease at which persons of varying physical ability can access and use a website. A website should be usable to as wide an audience as possible and it should be the goal of website creator to make it so.

When creating a website, we need to consider persons who may have low vision or are visually impaired. Persons who may be unable to use a keyboard or mouse and person who can't hear.

The WAI (Web Accessibility Initiative) and ARIA (Accessible Rich Internet Applications) specifications help web developers to make their websites as accessible as possible. This can start from simple things like putting proper `alt` tags on images to using the plethora of other attributes provided in HTML to make your website as accessible as possible.

Any goal you have for a website is faster achieved by making it available to as wide an audience as possible. Greater accessibility means more audience so be sure to make your websites more accessible from now on!

####Question 5

**Describe the function of the `role` attribute and give example code snippets that demonstrate its usage.**

In HTML, the `role` attribute has two primary purposes -

- the first is to add additional accessibility to the page as defined in the [WAI-ARIA](https://www.w3.org/TR/wai-aria/) specification. It does this by overriding the implicit semantic meaning of the element.
- the second is to make the page more semantic i.e. easily understandable to developers.

To get a better understanding of each purpose let's look at an example of both.

Our first example will show how the role attribute is used to make a page more accessible. Let's assume we have an anchor tag that is styled to look like a button.

    <a class="primary" href="#">Click Me!</a>

Using the magic of CSS, we can make this tag look like a button and that's what our users would see. Consider however that some users my have low vision or are visually impaired. They will have to use a screen reader to access the page and to the screen reader, the anchor tag is an anchor tag, not a button. How do we fix this? The `role` attribute of course. It can be used to override the meaning of the element to devices such as screen readers. We can update the code like this -

    <a class="primary" href="#" role="button">Click Me!</a>

The screen reader now understands that this element is supposed to the viewed as a button and allows for the same experience to be had on it as a regular screen.

The second way that the role attribute is used is to make HTML more understandable to developers. Let's look at two scenarios, one without the `role` attribute and one with the role attribute.

**Without the role Attribute**

    <nav>
        <a href="/shoes">Shoes</a>
        <a href="/slippers">Slippers</a>
    </nav>

**With the role Attribute**

    <nav role="menu">
        <a href="/shoes" role="menuitem">Shoes</a>
        <a href="/slippers"role="menuitem">Slippers</a>
    </nav>

The second example is much easier understood. Even someone with no knowledge of HTML may be able to pickup on what is going on just by looking at the role attribute.

And that's it! Those are the two main purposes of the `role` attribute in HTML.

####Question 6

**List five `aria-` properties. Describe their purposes and the roles they can be used with.**

Title: Accessibility in Web Development - ARIA Properties

Category: Accessible Rich Internet Applications**

This article will go through just a few of the ARIA properties and give an example role that can be used with that property. Note that many different ARIA properties can be used with many different roles so these property-role relationships are not set in stone.  

Let's begin:

`aria-described` - This property specifies another element that describes the content of this element. This property can be used with the `tooltip` role to give additional information about an element on the page.

`aria-controls` - This property specifies the element that this element controls. This property can be used with the `tab` role to specify the tab details.

`aria-label` - When an element does not have a label, this property allows an inline label to be defined. This property can be used with the `textbox` role within a form as the label before entering values.  

`aria-labelledby` - This property specifies which element provides the label for this element. This can be used with the `tabpanel` role to specify the tab label.

`aria-owns` - This property is used to specify the parent-child relationship between two elements. This property can be used with the `treeitem` role to specify with items in the tree are owned by this item.

Those where a few examples of different ARIA properties and the roles that could be associated with them. I encourage you to explore the different ARIA properties and the roles associated with them to help make the web more accessible to all users. 
