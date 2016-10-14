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



So now that we know about pixel density, let's use it to get a better understanding of this reference based pixel. We can think of it like this - 1 reference based pixel is equal to the pixel density of a device. What does this mean? Let's say we wanted to make line on the screen of length 10 CSS pixels. On a device with a pixel density of 1, this would cover 10 physical pixels and would be comprised of 10 pixels but on a device with pixel density 2,  10 device pixels will be used to create the line but it would be comprised of 20 pixels. 







Question 2:  Describe the function of the `flex-wrap` property and give examples of its usage.



Question 3:  Fully explain how the `justify-content` flexbox property works and use code samples and screenshots to demonstrate its usage. 