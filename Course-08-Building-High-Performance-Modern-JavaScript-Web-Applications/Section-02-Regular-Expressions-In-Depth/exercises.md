#Exercises

##Exercise 1

####Question 1

		var surname = /Gittens/;

####Question 2

		var testString = 'My surname is Gittens';
		var result = surname.test(testString);

####Question 3

	var test = new RegExp('xyz');


##Exercise 2

####Question 1

	var testString = 'My name is Imanuel Gittens',
  	pattern = /imanuel/i;
 
	console.log(pattern.test(testString));

####Question 2

	var testString = '1234567891',
    pattern = /^\d{2,10}$/;
 
	console.log(pattern.test(testString));


####Question 3

	var testString = '1234567891',
    pattern = /\*{1,}/;
 
	console.log(pattern.test(testString));


##Exercise 3

####Question 1

	var testString = '1234',
   	pattern = /^(\d){4}$/;
 
	console.log(pattern.exec(testString));


####Question 2

	var testString = '1234',
    pattern = /^(\d){4}$/;
 
	console.log(testString.match(pattern));

##Exercise 4

####Question 1

	var testString = '12334ing',
	    pattern = /[a-zA-Z]+ing/;
	 
		console.log(pattern.test(testString));


####Question 2

	var testString = 'xxx-xxx-xxx_',
    pattern = /^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{3}-[a-zA-Z0-9]{4}$/;
 
	console.log(pattern.test(testString));

####Question 3

	var testString = '902102',
    pattern = /^[0-9]{5}$/;
 
	console.log(pattern.test(testString));