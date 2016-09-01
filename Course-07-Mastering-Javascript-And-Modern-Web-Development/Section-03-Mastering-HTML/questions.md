#Questions

####Question 1

The DNS system utilizes a number of "records" that serve a variety of purposes. In the simplest terms, these records store information needed by the DNS for a proper online addressing system. We can use the example of a house on a street to illustrate the concept of DNS records by exploring the different ways through which we can connect or communicate with someone living in that house. 

Imagine you have a friend named Terry who lives in that house and you want to get in contact with him, your first option is to visit the house directly. In this case you walk or drive to the **physical address** of the house. Now you want to store the address of John's house so you know where to find it next time so write down (or record) his address

	Address - #40 1st street, Trincity, Trinidad and Tobago

Here you've just created a record for John storing his address. Let's say you didn't want to visit his house but you wanted to call him on the telephone. You also don't want to forget Terry's number so you write that down as well 

	Telephone - 868-234-7843

Here you've created a record storing Terry's telephone number. The same applies if you want to reach Terry on Skype, you would need to store his Skype username somewhere so that you could get in touch with him

	Skype - terryWinsAgain

So you now have a number of ways to get in contact with Terry and you've stored these records so that you don't forget, let's see how this relates to DNS. Let's imagine you have a domain (`abc.com`), DNS needs to know things like the physical address of the website this domain points to - its IP address. It also needs to know where to send mail for that domain. This information is stored in different records just like the example above but they all relate to that domain and help it to function as expected. Let's look at a few records that DNS stores for a domain:

A record - Stores the IP address of the website that the domain points to and has the responsibility of mapping a domain name like google.com to its IP address (eg. google.com --> 56.765.34.133)

MX record - Mail Exchanger or MX records allow us to route emails directed at a domain to a different IP. Imagine you have a domain (`abc.com`) however you want to use Google's gmail service for your email. You can store the IP address of Google's gmail service in your domain's MX record and any incoming mail will be sent there instead. 

CNAME record - Canonical Name or CNAME record allow for one domain to point to another domain. Imagine that you have one main domain `abc.com` and another secondary domain `abc.org`. You'd like everyone who visits `abc.org` to be routed to `abc.com` instead. This can be easily done by updating the CNAME record for `abc.org` and pointing it to `abc.com`.

TXT record - this records stores information about a domain. Things like server information and information on the owner of the domain is stored here. 

We see that just as we can store ways of getting in contact with a friend using different records, the DNS also stores different ways of interacting with a domain using records. These records store information that unlocks many additional features of a domain and allow us to customize the its many components. 


####Question 2

Style Guide Driven Development is a methodology used to build the front end or user facing portion of an application. It involves breaking the application down into its simplest elements, defining a style for these elements and using them to build more complex components that can be reused throughout the application. Examples of simple elements defined using a style guide are -

- buttons
- fonts
- colors

After defining the simplest elements, they must then be combined to create components than can be easily reused throughout the application. Some examples of these components might be -

- forms
- tables
- Breadcrumbs

Even these components can be combined to create more complex, reusable structures. Some of these complex structures include -

- application header
- application footer
- blog post

After defining all the components necessary for the application, they are simply combined to produce a solution that is consistent, easier to debug and easier to manage. If a problem arises with the front end of the application, it can be traced right back to it's simplest element and fixed. If a new section need to be added to the application, it can be built very quickly by simply copying and arranging components. 

Next time you're thinking of building an application, be sure to consider Style Guide Driven Development for a smoother experience overall. Cheers!


3)

As its name implies, the HTML table element is used to build tables. It is comprised of a number of parts which we'll explain in depth. By the end of this article, you should be 100% comfortable with building tables using HTML 5. Let's dive in -

To get started building an HTML 5 table, we must first use the correct tags:

	<table>
	</table>

These tags don't do much by themselves but they give us a container within which, we can add the various columns and rows that we expect to see in our table. Before we start adding these columns and rows however, let's look at some of the HTML 5 specification for building a table. In order to make the markup used to build a table more understandable or semantic, HTML 5 broke the table down into three parts - the header, body and footer whose tags are `<thead>`, `<tbody>` and `<tfoot>` respectively. Now that we're aware of this, let's continue with the code to build our table by including these sections:

	<table>
		<thead>
		<thead>

		<tbody>
		</tbody>

		<tfoot>
		</tfoot>
	</table>

Looking good to far. Now that we've defined these sections, we can add columns and rows to each one independently. Let's explore how we add, these columns and rows:

To add a row to a table, we must use the `<tr>` tag. I remember this tag by thinking of it as an abbreviation for the phrase 'table row (tr)'. To add a column to a table, we can use the `<th>` or `<td>` tags depending on where data needs to be placed. We use the `<th>` tags in the `<thead>` part of the table and we use the `<td>` tags in the `<tbody>` part of the table. Let's show some rows illustrate this concept:

	<tr>
		<th>Color</th>
		<th>Size</th>
		<th>Quantity</th>
	</tr>

	<tr>
		<td>Red</td>
		<td>Medium</td>
		<td>10</td>
	</tr>



When thinking about these tags to add columns to the table, it is better to think of them as adding a cell to a row. As seen in the example above, we use the `<th>` tag to add three cells to the first row and we use the `<td>` tag to add three cells to the second row. Combined, the above code will make a table with 2 rows and three columns. 

Hope you understood everything so far because now we're going to bring everything together and make a complete HTML 5 table.

	<table border=1>
		<thead>
			<tr>
				<th>Color</th>
				<th>Size</th>
				<th>Quantity</th>
			</tr>
		<thead>

		<tbody>
			<tr>
				<td>Red</td>
				<td>Medium</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Yellow</td>
				<td>Small</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Green</td>
				<td>Medium</td>
				<td>5</td>
			</tr>
		</tbody>

		<tfoot>
			
		</tfoot>
	</table>

A added a `border=1` to show the borders but the result looks something like this 

![Imgur](http://i.imgur.com/SUOdw5V.png)

We didn't add anything to the footer but we could've easily done so by following the same structure used for the body. With this, I hope that you have a better understanding of how to build tables using HTML 5. I challenge you to take these basic tables and give them some awesome styles.   

####Question 4

The canvas tag in HTML is a special tag used for rendering graphics on a page. It comes bundled with a Javascript based API that allows developers to "draw and color" on the page. It supports both 2D and 3D graphics, is supported by all modern browsers and requires no extra plugins to run. Let's explore the basics of the canvas tag with an example

	<canvas id="firstCanvas" width="500" height="500" style="border:1px solid #333">
		you browser does not support the canvas element.
	</canvas>

So we've created a basic canvas above and we've added some simple styles to make it appear on the page. We've also added some fallback text between the tags in case the browser does not support the `canvas` tag. We can now use some javascript to "draw" on this canvas. Let's see how we draw a simple shape using the HTML 5 Canvas API:

	<script>
		var canvas = document.getElementById('firstcanvas');
		var context = canvas.getContext('2d');

		context.beginPath();
    	context.rect(200, 200, 400, 200);
    	context.fillStyle = 'blue';
    	context.fill();
    
	</script>

We first store a reference to the canvas element using the `getElementById` method. After this we set the context for our graphics and we've chosen 2D. 

We want to draw a rectangle so we then start using the `beginPath` method followed by the method to draw a rectangle using the Canvas API `context.rect();`. The first two values represent the distance from the top, left corner of the canvas. The second, two values represent the width and height of the rectangle respectively. After this we define the color of the rectangle with the `fillstyle` method, then we actually add the color with the `fill` method. 

And that's it! We've just drawn a rectangle using the HTML 5 Canvas API! This API is very broad and I encourage you to checkout the methods to draw pretty much anything using HTML and Javascript!

####Question 5

The `svg` tag in HTML 5 is another way to display graphics on a web page. SVG is the abbreviation of the term Scalable Vector Graphic and they provide a better alternative for displaying these graphics than its `canvas` counterpart. Why is it superior? Well an SVG scales based on the the size of the screen that it is shown on whereas the canvas graphic stays fixed at its defined size, no matter the screen size. We can imagine the canvas as a non-responsive HTML element while the svg is fully responsive. Some of the other advantages of SVG include:

- svg is resolution independent. This means that svg delivers high quality graphics at all screen sizes. The graphics scale to meet the screen size. This offers another benefit as one svg graphic can be used for all screens as opposed to canvas where a small graphic would have to be used for a small screen, a medium graphic for a medium screen and so on.  

- svg files are small and can even be compressed. This makes them great for use on mobile devices.

- svg is written in XML which makes it readily available to the browser. There is no need to call Javascript files so the svg actually loads faster.


Let's take a look at an svg element to get a better idea of how they work.

	<svg width="500" height="500" style="border:1px solid black;">
  		
  		<rect x="50" y="10" width="400" height="100" style="fill:blue" />

  		<!-- Fallback text -->
  		Your browser does not support the SVG tag.

	</svg>

The HTML snippet above produces a rectangle on the web page. Notice that no Javascript is need for this to occur. We simply use the special HTML tag `rect` to draw the rectangle. the x and y values define the position of the rectangle based on the the top, left corner of the svg element. The width and height values are pretty much self explanatory and finally, we the give the rectangle a simple style that makes it blue.

And that's all there is to the `svg` element. You simply need to get familiar with the tags and styling; before you know it, you'll be producing exceptional web graphics. 