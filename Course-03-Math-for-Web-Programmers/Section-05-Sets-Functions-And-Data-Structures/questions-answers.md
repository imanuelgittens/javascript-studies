#Question Answers


**Qu 1.**
 
A set is a collections of distinct elements where the order idn't important and an element can only appear once. A set is different from an array because the same element can appear twice in an array also, in an array, the order in which the elements appear DOES matter. 

Let's say we have the array - arr = [1,2,3,2,1]

If we were asked to give the set of all values in the array we would get - set = {1,2,3}

This is because elements in a set can only appear once, even though they appeared more than once in the array. 


**Qu 2.**
 
The Universal set is the set that includes all the elements in the context that we are working with. For example, if our context is all even numbers between 0-20 (endpoints included), then the universal set U = {2,4,6,8,10,12,14,16,18,20}. The universal set is important when defining the complement of a set because the complement of a set is always the values that are NOT in the set but are a part of the universal set. For this reason, the universal set plays an important role in defining the complement of a set. 
Let's look at an example. The set A = {2,3,5}. 
Let us assume that our universal set is all poisitive numbers between 1-10 (endpoints included) {1,2,3,4,5,6,7,8,9,10}. In this case the completement of A = {1,3,4,6,7,8,9,10}.
If the universal set was all prime numbers between 0 and 20 however {2,3,5,7,11,13,17,19}, then the complement of A = {7,11,13,17,19}.


**Qu. 3**

`A Venn diagram is a tool for representing sets visually. In the simplest Venn diagram, sets are represented by circles with two circles overlapping if the two sets contain common elements. Here are two examples of Venn diagrams.`

It seems this question is incomplete as this is all I am seeing. Will complete this question when it is updated. 

**Qu. 4**

Both set have the same number of elements.Since the function is bi-jective (both surjective and injective), it means that there must be one element in set B for every element in set A. This is the nature of injective functions. 

Qu 5. 

	function factorial(n){

    	if(n < 0){
        	return -1
    	}else if(n === 0){
        	return 1;
    	}else{
        	return n * factorial(n-1);
    	}	
	}

	factorial(3);

The domain of this function is all POSITIVE REAL NUMBERS. 


Qu. 6

Whether or not the array is sorted is dependent on the type of search function we write. In this case we will look at a linear search fucntion. Here we search each item of the array to determine if x exists. 

	function search(arr, x){
    	var result = false
         	if(arr[i] === x){
            	result = true;
        	}
    	}
    	return result;
	}

	search([1,2,3,4,5], 'bread');

In this case it does not matter if the array is sorted or not because the function will always go through each array element to check if that element is equal to x. 

**Qu. 7**

	function fibSeq(){
    
    	var fibArray = [];

    	fibArray[0] = 0;
    	fibArray[1] = 1;

    	for(var i = 2; i < 25; i++){
        	fibArray[i] = fibArray[i-1] + fibArray[i-2]
    	}
    
    	return fibArray;
	}

	fibSeq();

**Qu. 8**

	function checkRepeat(arr){
    	var result = [];
    	for(var i = 0; i < arr.length; i++){
        	var x = arr[i];
        	for(var j = i+1; j < arr.length; j++){
            	if (x === arr[j]){
                	result.push(x);
            	}
        	}
        
    	}
    	return 'These values are repeated ' + result;
	}

	checkRepeat([1,2,2,3,4,6,6,8,7,6,3,2,1]);
