**Question 1**

a)

f(x) = sinx;
g(x) = x^2 + 4x + 4

	function gfx1(x){
    	var fx = Math.sin(x);
    	var gfx = Math.pow(fx, 2) + (4*fx) + 4;
    
    	return gfx;
	}

	gfx1(2);

b)

f(x) = 3x + 2
g(x) = e^x

	function gfx2(x){
    	var fx = (3*x) + 2;
    	var gfx = Math.exp(fx);
    
    	return gfx;
	}

	gfx2(2);

c)

f(x) = cosx
g(x) = ln(x + 2)

	function gfx3(x){
    	var fx = Math.cos(x);
    	var gfx = Math.log(fx + 2)
    
    	return gfx;
	}

	gfx3(2);

**Question 2**

	function squares(){
    	var result = [];
    	for(var i = 0; i <= 25; i++){
        	result[i]= i*i;
    	}
    	return result;
	}

	squares();


**Question 3**

	function oddEvenCount(arr){
    	var totalOdd = 0;
    	var totalEven = 0;
    
    	for(var i = 0; i < arr.length; i++){
        	if(arr[i] % 2 === 0){
            	totalEven++;
        	}else if(arr[i] !== 0){
            	totalOdd++;
        	}
    	}
    
    	return 'Total number of odd numbers is '+totalOdd+' and total number of even numbers is '+totalEven+'.'
	}

	oddEvenCount([1,2,4,6,7,4,22,45,76,12,456,87,34,56]);