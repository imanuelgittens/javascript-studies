#Exercise 1

U = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20}
A = {2,4,6,8,10,12,14,16,18,20}
B = {5,10,15,20}
C = {4,8,12,16,20}

1. A' = {1,3,5,7,9,11,13,15,17,19}

2. A u B = {2,4,5,6,8,10,12,14,15,16,18,20}

3. A n B = {10,20}

4. C' = {1,2,3,5,6,7,9,10,11,13,14,15,17,18,19}
    C' u A = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20}

5. B' = {1,2,3,4,6,7,8,9,11,12,13,14,16,17,18,19}
    B' n C = {4,8,12,16}

6. A n B n C = {20}


#Exercise 2

Surjective Functions - Co-domain is equal to range. At least one x for each y
Injective Functions - We can find at most one x for each y (1 to 1)
Bijective Functions - A combination of surjective and injective functions.

Question 1. ![Latext](http://quicklatex.com/cache3/9e/ql_e7547ab5f838ef73d1772c8d700e509e_l3.png)

Domain - All real numbers
Co-domain - All real numbers
Range - All positive, real numbers

To prove the function is surjective, we need to find an x such that f(x) = y for all possible values of y. Let's say y = 0, we need to find an x such that e^2x = 0. This is impossible so the function is not surjective.

We can derive injective nature by proving there is at most one such x such that y = e^2x. We first assume that 2 x's exist, then prove they are equal hence there is only one value of x. Let x1 and x2 be such that e^2x1 and e^2x2 = y

e^2x1 = e^2x2
lne^2x1 = lne^2x2
2x1lne = 2x2lne
2x1 = 2x2
x1 = x2

Question 2. ![Latex](http://quicklatex.com/cache3/80/ql_2824d7301ae620fb8d7742b0875da380_l3.png)

Domain - All positive, real numbers
Co-domain - All real numbers
Range - All positive, real numbers

Given any real number y, we need to find an x such that y = lnx

y = lnx
x = e^y

Since x is always a real, positive number, given an arbitrary y, we can find an x such that x = e^y so this function is surjective.

lnx is well defined and unique. We can find a single x such that y = lnx so this function is injective.

Question 3. ![Latex](http://quicklatex.com/cache3/69/ql_8ab4bb8dc6d0e9498ab5f108c6311769_l3.png)

Domain - All real numbers
Co-domain - All real numbers
Range - All real numbers between and including -1 and 1


To prove the function is surjective, we need to find an x such that f(x) = y for all possible values of y. Let's say y = 2, we need to find an x such that sinx = 2. This is impossible so the function is not surjective.

Sinx is not well defined or unique. Given any y, we should find an x such that y = sinx. If y = 2

y = sinx
2 = sinx
x = sin^-1(2)
Sin inverse 2 is not a number

Function is not injective.

Question 4. ![Latex](http://quicklatex.com/cache3/a8/ql_f7b74c4a40cd67747d5651e633c49fa8_l3.png)

Domain - all real numbers
Co-domain - all real numbers between and including -1 and 1
Range - all real numbers between and including -1 and 1

Functions whose co-domain is equal to their range is surjective

sinx is well defined and unique. Given any y, we can  find a single x such that y = sinx. Lets say y = 0.75

0.75 = sinx
x = sin^-1 (0.75)
x = 48.6

Question 5. ![Latex](http://quicklatex.com/cache3/d0/ql_4c9aec85d1fadd19c546bc16da988bd0_l3.png)

Domain - all real numbers
Co-Domain - all real numbers
Range - All positive real numbers

Given any real number y, we must find an x such that y = x^6. Let's say y = -2
There is no x such that y = -2 therefore the function is not surjective

Let's say y = 1, then for x = -1 and x = 1, we have y = f(x). There is more than one value of x for a given y so the function is not surjective. 

Question 6.

Question 7. ![Latex](http://quicklatex.com/cache3/cd/ql_0fe760a9baa4a1c111dc214d48dececd_l3.png)

Domain - real numbers betweennegative pie over 2 and positive pie over 2
Co-domain - All real numbers
Range - All range numbers

Co-domain and range are equal so function is surjective.

y = tanx
x = tan^-1y

f(x) is well defined and unique. Given any y, we can find a single x such that y = tanx. This function is injective. 

This function is both injective and surjective so the function is bijective. 

Question 8. ![Latex](http://quicklatex.com/cache3/d3/ql_01a264cf40200061d2fcee2def5314d3_l3.png)

Domain - All real numbers
Co-domain - All real numbers
Range - All real numbers

Co-domain is equal to range so the function is surjective.

y = 3x + 4
y-4 = 3x
y-4/3 = x

f(x) is well defined and unique. Given any y, we can find a single x such that y = 3x + 4. Function is injective. 

This function is both injective and surjective so the function is bijective. 



#Exercise 3

**Question 1**

	function product(arr){
    	var prod = 1;
    	for(var i = 0; i < arr.length; i++){
        	prod *= arr[i];
    	}
    	return prod;
	}

	product([1,2,3,4,5]);


**Question 2**

	function product(arr){
    	var sum = 0;
    	var count = arr.length;
    	for(var i = 0; i < arr.length; i++){
        	sum += arr[i];
    	}
    	return sum/count;
	}

	product([1,2,3,4,5]);

**Question 3**

	//Code to return the sum of all values in an array
	var x = [ 1,2,3,4,5 ]; 
 
	//Function to return sum of values in an array
	function sum(arr) {
  	var sum = 0;
  	for (i=1; i < arr.length; i++) {
    	sum = sum + x[i];
  	}
  	return sum;
	}
	//What will be the value of sum(x)?

**Answer**

	//correction in for loop
	//sum = sum + arr[i];




