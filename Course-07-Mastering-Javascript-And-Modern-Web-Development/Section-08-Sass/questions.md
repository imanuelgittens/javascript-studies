####Questions

####Question 1

**Describe the different ways you can filter displayed network requests within the Network tab? List at least three different operators you can use within the text filter box (eg. 'mime-type').**

Whenever we load a page on the web, a number of requests are made to the web server to get all the assets necessary for that web page to look and function properly within a browser. In most cases, hundreds of these requests need to be made. If we'd like to see these requests in action, we can open the handy chrome developer tools and go to the 'Network' tab. This tab will show all the requests that are made to the server whenever the web page is loaded.

![Imgur](http://i.imgur.com/b7HdIZY.png)

As developers, we may want to know if certain resources are being loaded from the server for a variety of reasons. This tab helps the developer to find what they are looking for by, showing all the requests made to the server and allowing the developer to search and filter through these results.  

![Imgur](http://i.imgur.com/lnKzrTu.png)

As shown in the screen above, we can filter based on the type of file loaded. For example, we can show only the CSS or JS files that are loaded. We could also show the font or image files only.

We can also use the search functionality to filter through the results. This search box allows us to use a number of operators to get the results we need. Some of these operators include -

- `mime-type`
- `method`
- `status-code`
- `scheme`

Here is an example of it in action.

![Imgur](http://i.imgur.com/DZypWnm.png)

And that's it! You now know how to view the network requests made when a web page is loaded and how to filter and search through the results to find exactly what you're looking for!


####Name the most popular CSS preprocessors and explain the differences between them.

When mentioning CSS preprocessors, some of the more popular ones include Less, Stylus and Sass. In this article, we'll take a closer look at these preprocessors and try to highlight the features of each and see how they differ from each other. Let's get started -

####Sass

Sass is a popular and mature CSS processor that requires the Ruby programming language to work properly. Once installed, you are given the choice to write your style programs using either the Sass of Scss syntaxes. Though Scss is recommended over Sass, both options provide the designer with a host of options to make his/her styling job a lot easier and more manageable.
These features include -
- Programming elements like Variables and Loops
- Mixins
- Partials and imports
- Functions
- Nested Rules

####Less

Less.js is another popular CSS preprocessor. Originality written in Ruby but later ported to JavaScript less.js assists designer with their web page styling by offering all the features of Sass.

####Stylus

Stylus was built in JavaScript and is another very popular preprocessor. It offers mostly the same features of Sass however it takes things one step further. Stylus's syntax resembles the Python language in many ways and thus is put to great use when high level logical code is needed for styling a page. For this reason, the language is a lot more verbose and may not be the most "Beginner Friendly" of the popular CSS preprocessors. 


These popular CSS preprocessors offer mostly the same features with each having their own way of accomplishing the task at hand.  


#### Describe what Sass mixins are and use code samples to demonstrate how they work.

Sass provides the developer with a lot of extra functionality to make his/her job easier when styling both large and small web projects. One example of this functionality is the `@mixin` directive. This awesome piece of functionality in Sass allows the developer to make groups of CSS declarations that can be reused throughout a web project. Mixins can even accept variables - making them very flexible. Let's look at an example of a `mixin` to get a better feel of how it works and how it can be used to vastly reduce development time on a project.

**Example - Vendor Prefixes**

    @mixin border-radius($radius){
      -webkit-border-radius: $radius;
      -moz-border-radius: $radius;
      -ms-border-radius: $radius;
      border-radius: $radius;
    }

In the code example above, we first let Sass know that we are creating a `mixin` by using the `@mixin` directive. We must then give our `mixin` a name and the name we've chosen is `border-radius`. We then passed in a variable to this `mixin` and applied all the browser prefixes to that variable. Let's say we were styling an element with a class of `button` and we wanted it to have a border radius of 3px, we can use our handy `mixin` like this:

    .button{
      @include border-radius(3px);
    }

To use a `mixin` in Sass, we have to use the `@include` directive. Once this code has been processed however, we can expect an output like this:

    .button{
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      border-radius: 3px;
    }

As you can see, instead of writing four lines of code every time we need to add border radius to a style, we can do it in one. This is what makes a `mixin` so powerful and time saving.

This example has only scratched the surface of Sass mixins. I challenge you to do some more research on the topic. You will undoubtedly find some great techniques to help improve your development workflow and increase the speed at which you can complete any web project.

####Explain how inheritance works in Sass and use code samples to demonstrate.

**Title: Sass Style Inheritance**
**Category: Syntactically Awesome Style Sheets (Sass)**

Inheritance is a fundamental concept in CSS and it allows for child elements to `inherit` or copy the styles of their parent elements (where copying those styles make sense).

Let's look at a style like `color` -

    body{
      color: #333;
    }

With CSS, every child element of the `body` tag will have a similar style because of inheritance in CSS. Imagine if there was no inheritance, we'd have to define a color for each element that we created on the page!

In some cases however, styles are not automatically inherited. A great example of this is the `border` style. If that were inherited then every element on the page would have a border and this would clearly be a bad thing. This [page](https://www.w3.org/TR/CSS21/propidx.html) shows which CSS properties are inherited automatically and which are not. We can also force inheritance using CSS. Imagine we did want our element to have that same border that we defined on its parent. We can do the following -

    .element{
      border: inherit;
    }

and this gives us the border we desire.

Sass, being a CSS preprocessor also includes this inheritance functionality however it allows us to take it one step further. It allows us to define a number of styles on any selector, then we can set another selector to `inherit` **all** the styles of the previous selector and make any adjustments.

A great way to see this in action is to imagine two buttons on a page. One for success and one for failure. The success button needs to be green and the failure button needs to be red. Let use inheritance in Sass to define these styles.

We first style a generic button -

    .button{
      padding: 20px;
      color: #333
      border: 1px solid #ddd;
    }

Now that we've defined the button, we can easily change it to a `success` button by doing the following -

    .success{
      @extend .button;
      background-color: green;
    }

We can just as easily make a failure button like this -

    .failure{
      @extend .button;
      background-color: red;
    }

We make use of the `@extend` directive in Sass to force inheritance from one entire class to another and this can save a lot of time when developing. After processing this code, the CSS for the success button will look like this -

    .success{
      padding: 20px;
      color: #333
      border: 1px solid #ddd;
      background-color: green;
    }

And the failure button will be similar as well except the background will be red.

Hopefully this has sparked some new ideas in your head about how to use inheritance in Sass for more efficient styling in your we projects. Happy coding!

#### List three `aria-` states and describe when they should be used.

Making a website as accessible as possible should be one of the main goals of any web developer. The WAI-ARIA specification gives us a number of tools to use when building our applications for this purpose specifically. This specification allows assistive technologies like screen readers to understand your website better so it can be used by persons with physical disabilities. ARIA allows us to apply certain `states` to elements on the page so the screen reader will know how to interpret them correctly. Let's look at a few of them now -

-  `aria-hidden` - an element with this state will not be visible to screen readers and the technology will skip it all together. A good example of where this is used is on the `<i>` (icon) element. Icons are usually composed of seamingly random number and letters so we don't want the screen reader to try interpreting that.

- `aria-disabled` - This state is applied to input elements on the page whose value cannot be changed. Maybe an online merchant is only willing to sell to one specific country, he/she can have an input for country on the checkout page however it is disabled with `aria-disabled` because he will not be allowing persons outside of that country to buy from his/her store.

- `aria-grabbed` - The ability to drag elements around on a screen can provide a significant improvement to the user interface (think dragging around the map on Google maps) and this aria state helps assistive technologies to know that an element has been grabbed and is currently being dragged on the screen.

There are many more aria states that can be used to let assistive technologies know how to interact with different elements on a web page. See them all [here](https://www.w3.org/TR/wai-aria/states_and_properties).
