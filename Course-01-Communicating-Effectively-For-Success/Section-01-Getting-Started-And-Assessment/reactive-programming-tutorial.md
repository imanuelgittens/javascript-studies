#Reactive Programming For 14 Year Olds

If I had no resources to learn Reactive Programming other than this [Wikipedia](https://en.wikipedia.org/wiki/Reactive_programming) article, I would surely be doomed. I'm sure that most people reading this article would be as thoroughly confused as I was, but as I've come to realize, as programmers we will often be faced with difficult challenges that we must overcome and this is no different. I hope that my understanding of Reactive Programming from this article will help you to get a better understanding of the concept and it's potential usage.  Let's get into it..

Reactive programming is a way of writing your programs such that the output is always dependent on the input. If the input **changes** at any time, the output will also be **changed**. 

We can compare reactive programming to driving a car. How fast we are moving is dependent on how far down we press the accelerator pedal. If we press the pedal down all the way, we will be moving as fast as possible, but as we begin to release the pedal, the car slows down. We can see here that the output (the car's speed) is always dependent on our input (how hard we press the accelerator pedal). 

**As the input changes, the output changes as well.**

---
We can demonstrate Reactive Programming using a simple coding example.

#####Non Reactive Programming
Let's say:

	a = 1
	b = 2	
and

	x = a + b

When we run this line of code without using Reactive Programming, we get:

	x = a + b
	x = 1 + 2
	x = 3

But as we discussed above, in Reactive Programming, if the input changes, the output should change as well. Let's expand our example a bit further to see what happens when the input changes and we are **NOT** using Reactive Programming. 

	a = 1
	b = 2
	
	x = a + b

	a = 3

	y = x + b

When we run our program we get:

	x = a + b
	x = 1 + 2
	x = 3

But then, something weird happens! We change the value of 'a':

	a = 3

Since we aren't using Reactive Programming, this doesn't affect the value of 'x', so when we evaluate 'y' we get:

	y = x + b
	y = 3 + 2
	y = 5	

#####Reactive Programming
Let's see how our output changes in a Reactive Programming environment: 

	a = 1
	b = 2

	x = a + b

	a = 3

	y = x + b

We first evaluate 'x' and we get:

	x = a + b
	x = 1 + 2
	x = 3

and like before, we change the value of 'a':

	a = 3

But here is where Reactive Programming comes in! **Since we have changed the input 'a', we now need to change the output 'x'**. Let's do that now:

	x = a + b
	x = 3 + 2
	x = 5

We can then go ahead with calculating the value of 'y' like so:

	y = x + b	
	y = 5 + 2
	y = 7

We can see that the value we get for y is '7' in a Reactive Programming environment and '5' in a non Reactive environment. 


####Real World Example

Another great example of Reactive Programming is a modern spreadsheet program like Microsoft Excel. The cells of these spreadsheets contain literal values or formulas like "=B1+C1" that are an evaluation of other cells. Whenever the value of the other cells **change**, the value of the formula is automatically updated.

---

We must always keep in mind that if we are writing a program where the results should always be accurately dependent on the input, then Reactive Programming is the way to go. 
