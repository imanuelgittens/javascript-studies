#Project Assignment

**Question1**


	function commonElements(arr1, arr2){
    	var result = [];
    	for(var i = 0; i < arr1.length; i++){
        	for(var j = 0; j < arr2.length; j++){
            	if(arr1[i] === arr2[j]){
                	result.push(arr1[i]);
            	}
        	}
    	}
    	return result;
	}

	commonElements([1,2,3,4,5,6,7,8,9,10,34,65,87], [2,4,6,8,10])


**Question 2**


	function fact(n){
  	var factorial = 1;
  	for (i = 1; i <= n; i++)
  	{
    	factorial *= i;
  	}
  	return factorial;
	}

	function P(n, k){
    	return fact(n)/fact(n-k);
	}


	P(5, 3);

---

	function fact(n){
  	var factorial = 1;
  	for (i = 1; i <= n; i++)
  	{
    	factorial *= i;
  	}
  	return factorial;
	}

	function C(n, k){
    	return fact(n)/(fact(k)*fact(n-k));
	}


	C(5, 3);