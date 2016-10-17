# Questions	

Question 1:  Fully explain what CSS pixels and device pixels are and explain the difference between these pixel types.

Category:  Introduction to Responsive Design

Title:  Device Pixels vs. CSS Pixels



When building websites, there is a lot of measurement happening. And similarly to an architect creating a complex building plan, the web designer builds complex layouts. What else do they have in common? Well they both need accurate measurements. Whereas the architect may use centimeters or inches for his measurements, the web designer uses a unit called the **pixel**. Unfortunately for the web developer, the pixel is not a hard and fast unit of measurement like the centimeter. The web has evolved, and continues to evolve so quickly that its unit of measurement struggles to keep up and this can lead to a lot of confusion. 

At this time of this writing, there are two types of pixels. The first (and more familiar) is the **device pixel** which is defined as - *the smallest point a screen can physically display and is usually comprised of red, green, and blue sub-pixels.* The light from these pixels are combined to create the colors we see. These hardware pixels are fixed and cannot be divided or scaled because they are tied to a physical device property. We can think of the device pixel as similar to other units of measurement like the centimeter. I like to think of it as a box and your entire screen is made up of these boxes. 

![Imgur](http://i.imgur.com/k3w6B27.png)

*The above image shows a device pixel.*


The second type of pixel is known as a **CSS pixel** and it is this one that can give the web developer a headache in some cases. The CSS pixel is a *reference based pixel* and before we can understand this term, we need to familiarize ourselves with another term known as *pixel density*. We explained the device pixel above and said that it is the smallest *physical* space on the screen that can hold red, green and blue sub pixels. Companies like Apple however have begun to fit even more sub pixels into that physical space hence the term pixel density. If we can fit two pixels into that physical space then we now have a pixel density of 2. If we can fit 4 pixels into that space then we have a pixel density of 4 and so on. 

![Imgur](http://i.imgur.com/IwbGs5p.png)



*The above image shows two pixels packed into the same device pixel space.*



So now that we know about pixel density, let's use it to get a better understanding of this reference based pixel. We can think of it like this - 1 reference based pixel is equal to the pixel density of a device. What does this mean? Let's say we wanted to make line on the screen of length 10 CSS pixels. On a device with a pixel density of 1, this would cover 10 physical pixels and would be comprised of 10 reference-based or CSS pixels but on a device with pixel density 2,  20 device pixels will be used to create the line but it would be comprised of 10 reference-based or CSS pixels. The reason for this is that our line will indeed be very difficult to see if we used 10 physical pixels on a device that has a pixel density of 2. Just as an example, imagine a device with a pixel density of 4 (4 pixels fit in the physical space of one pixel) and we wanted to draw a 10 pixel line using CSS. The actual amount of physical pixels that would be used for this line is 40. 

I hope this article gives you a better understanding of the two different types of pixels and how they are used when constructing a web page. You may have also figured out the reason why higher pixel densities result in better looking graphics on the screen - because more physical pixels are used to create the same sized objects.


---


Question 2:  Describe the function of the `flex-wrap` property and give examples of its usage.



CSS Flexbox has various properties for displaying and aligning HTML elements on a page. One of these properties is `flex-wrap` and this article will take a look at this property and explain how it works. Looking at this definition from [w3schools](http://www.w3schools.com/cssref/css3_pr_flex-wrap.asp), we see the following -

>  The flex-wrap property specifies whether the flexible items should wrap or not.

This simply means that items defined within a flexible container will 'wrap' , or move on to the next line. 

`flex-wrap` has the following properties - 

-  `no-wrap`: This is the default value. Flex items will not wrap.
- `wrap`: Flex items will wrap if necessary.
- `wrap-reverse`:Flex items will wrap if necessary in the reverse order.  

Let's look at some examples of each:



**no-wrap**

![Imgur](http://i.imgur.com/BZD6pIM.jpg)

There are additional items here but they are hidden because we have not specified that they should wrap.

**wrap**

![Imgur](http://i.imgur.com/HbT6piB.jpg)

Here the hidden items above are shown because we specified that they should wrap.


It should also be noted that items wrap according to the flex direction. Generally the flex direction is horizontal however the direction can vertical as well. If this is the case, the flex wrap property will work like this - 



**no-wrap**

![Imgur](http://i.imgur.com/lPfSMjT.jpg)

Hidden items aren't shown.


**wrap**

![Imgur](http://i.imgur.com/PQ0q6U7.jpg)

Hidden items are shown after wrapping on the vertical axis. 

I hope this simple example has helped to provide some insight and give you a better understanding of the `flex-wrap` property. 

---

Question 3:  Fully explain how the `justify-content` flexbox property works and use code samples and screen-shots to demonstrate its usage. 

`justify-content` is a flexbox property that defines how extra space within a flexible container is distributed when the flex items do not use up all the available space. Let's look at some of the values for `justify-content`:

- flex-start: flex items are positioned at the beginning of the container.
- flex-end: flex items are positioned at the end of the container.
- center: flex items are positioned at the center of the container.
- space-between: items are positioned with space between the edges of the container.
- space-around: items are positioned with space before, between and after the edges of the container. 

To get a better understanding of these values, let's see oh they apply visually. We have a flex container (color: light blue) and some flex items (color: pink), let's look at how these different values affect the flex items. 

`justify-content: flex-start;`

![Imgur](http://i.imgur.com/5QmYQxz.png)

The items are positioned at the start of the container. 

`justify-content:flex-end;`

![Imgur](http://i.imgur.com/cdBYAkd.png)

The items are positioned at the end of the container. 

`justify-content: center;`

![Imgur](http://i.imgur.com/QZ02Lxb.png)

The items are positioned at the center of the container. 

`justify-content: space-between;`

![Imgur](http://i.imgur.com/jdEDtuM.png)

The space between the edges of the container is evenly distributed.

`justify-content: space-around;`

![Imgur](http://i.imgur.com/UjVbd3L.png)

The space around all the items is evenly distributed.

And that's it! You now have a better understanding of the `justify-content` property and how to apply it in your every-day web development. Cheers!

