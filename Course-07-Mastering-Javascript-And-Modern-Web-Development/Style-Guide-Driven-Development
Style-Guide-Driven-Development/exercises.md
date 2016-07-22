#Exercises 

####Exercise 1

Question 1)

Three drawbacks of style guide usage in web development are -

- It can be time consuming to develop and maintain a style guide as it adds an extra layer of work to the development process.

- Additional resources are required to build and maintain the style guide so the development process can be more costly.

- TODO

Question 2)

	<button class="button warning">Warning!</button>

	.warning{
		background-color: #FF6768; 
		color: #fff; 	
	}

	.button{
		padding: 1em 2em; 
		border: none; 
		border-radius: 2px; 
		font-size: 15px; 
		font-weight: bold; 
		cursor: pointer;
	}

Question 3)


	<div class="field-wrapper form-inline with-button">
        <input type="text" name="inputandbutton" placeholder="Enter your Password" class="av-text" id="inputandbutton">
        <a href="#" class="button-small p0">Submit</a>
	</div>


####Exercise 2

**See exercises.html**

####Exercise 3

**See exercises.html**

####Exercise 4

Question 1)

Style guide similarities -

- The both use a column based (grid) layout. As we can observe in the Starbucks styleguide, they use both an Inline Block Based Grid and a Float Based Grid. Code For America uses a Grid System as well which can be identified by the word `layout`. Grid systems are important as they allows developers to easily position content on a page. Also, a responsive grid will allow for content on the page to be rearranged automatically when loaded on different screen sizes. 

- They both define colors for different purposes. An example of this is when Code For America uses red to make a button stand out (button-style-prominent) and grey to show a disabled button (button-style-disabled). On the Starbucks side, they use a purple-ish color (#5c223f) to make a button stand out -- they call this a `Critical Button` -- and their disabled button is transparent. Colors play an important role in any application as they invoke different emotion. Red may signal urgency or error, yellow may signal a warning and green may signal moving forward ( consider a traffic light). It is always good that a style guide use color for invoking emotion like this because a user of the application will get an immediate sense of what is happening based on the color they see on the screen. 

- They both define single elements (atoms) as well as complex structures (molecules/organisms). Some single elements include buttons, headings and lists. Some complex elements include blog post, promo layout, profile, footer. This approach allows developers to follow the style guide for both basic and complex structures. 

Style guide differences -

- Code for America gives examples of the html needed to build layouts while the starbucks guide on shows some of the CSS classes needed to build the layout. 

- Code for America gives a lot more complex layouts that can be easily added to a project (teaser apps, footer, profile, post preview, nav tabs etc. Starbucks does have a few complex structures like blog posts and tab kit, but other necessary complex structures must be built manually from the other basic components in the style guide. 

- The Code for America styleguide is easier to use because an example of the components are placed right next to their names and can be easily identified. The Starbucks styleguide has the names of the component listed and the user must click these names to explore the contents of that HTML component. 
