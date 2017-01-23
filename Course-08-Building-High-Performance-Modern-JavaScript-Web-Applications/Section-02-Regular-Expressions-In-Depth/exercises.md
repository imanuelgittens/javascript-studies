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