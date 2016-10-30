#Questions

####Question 1

Describe the `audio` and `video` tags and how they enhance the user experience. Provide examples of their usages.

Title: Audio and Video in HTML5
Category: Mastering HTML

HTML has evolved quite a bit since its inception. Its first version gave little more functionality than the addition and formatting of various types of text and graphical elements. With an ever evolving web, richer elements needed to be displayed online. People realized that things like audio and video provided a better experience for a lot of web problems. (Things like online learning benefit a lot from video and audio).

The problem was that HTML had no support for these file formats and hence browser extensions like Adobe Flash were developed to allows for these types of files to be played on the web. Since flash was not native to HTML it caused a slowdown of the pages that used and it also required website users to install the Flash Player extension. This was not the optimal solution.

Enter HTML5.

HTML5 has a high focus on making the web better. It added support for a number of elements that were not present before including support for video and audio files. This meant that these files could now be included in HTML pages natively (without the need for browser plugins).

Let's look at a few examples of how we can include these files in HTML pages. HTML added two new tags, the `<audio>` and `<video>` tags. Let's look at an example of each to get a better idea of how they are used.

#####Audio

This tag adds an audio player to the HTML page.

    <audio controls>
      <source src="itunes.mp3" type="audio/mpeg">
      <source src="itunes.ogg" type="audio/mpeg">
      Your browser does not support the audio tag.
    </audio>

We've added the `controls` attribute to show the play, pause and volume buttons.

The `source` element allows for the adding of multiple audio files for the browser to choose from. The browser will choose the first recognizable format.

The final item is the text between the tags. This is used as a fall-back in case the browser does not support the audio tag.


#####Video

This tag adds a video player to the HTML page.

    <video width="320" height="240" controls>
      <source src="blockbuster.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

Here we need to add the width and height attributes to control the size of the video player.

We've added the `controls` attribute to show the play, pause and volume buttons.

The `source` element allows for the adding of multiple audio files for the browser to choose from. The browser will choose the first recognizable format.

The final item is the text between the tags. This is used as a fall-back in case the browser does not support the audio tag.

####Conclusion

The video and audio tags are a great addition to the HTML5 arsenal. They allow for the native addition of video and audio in HTML pages which gives us all the benefits of these media types on the page without the need for any extensions.

####Question 2

Describe what attribute selectors are using examples to show the different kinds of attribute selectors and what each one accomplishes.

CSS offers a variety of ways to target HTML elements on a page. Most of us are familiar with targeting elements via their class or ID attributes however, it is a little less know that HTML elements can also be selected via other attributes.

Just as a quick remember of what an HTML attribute is, let's take a look at the example below:

    <input type="radio" class="test" required="required" />

`type`, `class` and `required` are all attributes of the `input` element. To select this element using its attributes, we can use the `[]` or square brackets. Let's see how it can be done with an example.

    input[type="radio"]{
      /*Styles here*/
    }

    input[required="required"]{
      /*Styles here*/
    }

Many developers are accustomed to using the shorthand version of the class selector like this `.test` however there is nothing stopping one from using the class attribute in the square brackets as well -

    input[class="test"]{
      /*Styles here*/
    }

There is also some extra functionality that you can take advantage of when using class selectors. By using operations in combinations with the equal sign (`=`) when can select elements on the page in different ways. Let explore some of the available options.

**[attribute~="value"]**

This attribute selector is used to select elements with an attribute value that contains a specific word.

Eg.

    [data~="personal"] {
      display: none;
    }

This will select all element with the space separated word 'personal' as the value for the `data` attribute. `data="personal long sensitive"`, `data="personal swift-object"`.

It will not select attributes like this `data="personal-swift"`, `data="personalize"`

**[attribute|="value"]**

This attribute selector is used to select elements that begin with the specified value. Note that the value has to be a whole word or followed by a hyphen(`-`).

Eg.

    [data|="top"] {
      top:0;
    }

This will select all element with a data attribute that begins with the word `top`. `data="top-notch high"`, `data="top swift-object"`.

It will not select attributes like this `data="shelf top"`, `data="topology"`


**[attribute^="value"]**

This attribute selector is used to select elements that **begin** with the specified value. Note that the value does not have to be a whole word.

Eg.

    [class^="cherry"] {
      color: pink
    }

This will select all element with a class attribute that begins with the word `cherry`. `class="cheery"`, `class="cheeryblossom"`.

It will not select attributes like this `class="blossomcherry"`.

**[attribute$="value"]**

This attribute selector is used to select elements that **ends** with the specified value. Note that the value does not have to be a whole word.

Eg.

    [class$="last"] {
      display:block;
    }

This will select all element with a class attribute that ends with the word `last`. `class="list-last"`, `class="columnlast"`.

It will not select attributes like this `class="lastcolumn"`.

**[attribute*="value"]**

This attribute selector is used to select elements that **contains** the specified value. Note that the value does not have to be a whole word.

Eg.

    [class*="te"] {
      display:block;
    }

This will select all element with a class attribute that contains the letters `te`. `class="team"`, `class="item"`.

It will not select attributes like this `class="classy"`.

And that's it! You now have a better understanding of attribute selectors and how to use them. Happy coding!

####Question 3

Describe in detail and use screenshots on how to inspect an HTML element's styles using DevTools.

Using the Chrome Dev Tools is one of the most efficient ways to manipulate items on a web page to test various scenarios. It acts as a live preview (among other things) for styling and front end logic like JavaScript. Before we can do all that however, we must know how to use the Dev Tools to target or inspect the element(s) our desired HTML elements. This article will help you understand how to do just that. Let's get started:

Let's say you are a super awesome web developer and the guys at techcrunch.com hired you to add some more color to their site. Their site is mostly green.

![Imgur](http://i.imgur.com/07zNC6w.png)  

Your inner designer kicks in and you say "Maybe the main navigation bar would look good in black!". We can use the chrome dev tools to make this change quickly without writing too much code. First we must inspect the navigation bar. To do so, pplace your mouse over the navigation bar, right click and choose `Inspect Element`.

![Imgur](http://i.imgur.com/oGAI5Bq.png)

You can also hit the `F12` key and click the inspector tool. After it is selected, you can then click on the element on the page that you want to inspect. The result is similar to the first method.

![Imgur](http://i.imgur.com/1rZzqrE.png)

Yu'll notice the inspector is highlighted blue after being selected and you can now click any element on the page to inspect its properties.

You now know how to inspect elements on a page. In the next article, we'll show you how to dynamically add styles to this page to allow you to try out that new color scheme you have in your head.

####Question 4

Describe in detail (use screenshots) how to dynamically change the HTML page styles.

Continuing from the previous article, we stopped at the important juncture of inspecting the web page. We also identified the various methods used to inpsect the web page. Now that we know how to target elements on the page, let's explore how to dynamically change the page style. We can use a combination of the HTML elements on the page and the styles panel to locate the elements that we want to update right in the browser. Let's explore how this is done.

After inspecting the menu bar on the page, we may not have necessarily found the correct element for which the green style is defined.  

![Imgur](http://i.imgur.com/YPBybIG.png)

The process to find the correct element involves search for the correct element by looking at the styles for which that element is defined. We can click on the items around the inspected element and scroll through its styles until we find the one where the green color is defined.

![Imgur](http://i.imgur.com/tlVD82C.png)

After a bit of searching, we find the correct element that has the green styling. Here is where the Dev Tools becomes EXTREMELY handy because now, we can update this style right within the dev tool for a preview of what the new color would look like.

Click on the style within the Dev tools to edit it and get a live preview as soon as you make your change.

![Imgur](http://i.imgur.com/extZ8Nl.png)  

And that's it! You can continue making edits like this to get an idea of how different styles will work and take your awesome design mockups back to the team at techcrunch.com for approval.Cheers. 
