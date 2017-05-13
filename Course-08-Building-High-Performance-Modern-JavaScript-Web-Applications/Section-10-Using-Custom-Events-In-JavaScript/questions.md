##Questions 

Explain how the `for-of` loop work and use code samples to demonstrate its usage.

The new `for-of` loop in ES2015 can be used to iterate any of JavaScript's iterable types.
It is similar to the `for-in` loop and an example of its usage is shown below:

    let colors = ['red', 'blue', 'green'];
    
    for(let color or colors){
       console.log(color);
    }
    
Arrays are iterable by default so we can access the items in the array as shown above. See below for 
a list of all the iterable types in JS. 

* Arrays
* Strings
* Maps
* Sets
* arguments
* DOM Data Structures

We can use the `for-of` loop to iterate over values in any of the types above. 
You now know how to use the `for-of` loop in ES2015. 