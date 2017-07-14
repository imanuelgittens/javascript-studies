##Exercises

#####Exercise 1

Qu 1) Based on the discussion above, calculate the best-case and worst-case performance of the getLast(items_list) algorithm you previously implemented.

	function getLast(items_list){
		return items_list[items_list.length - 1]
	}

for this function, there is no best and worst case scenario, the function executes in the same amount of time, no matter how big or small the input array is. 

Qu 2) In the Introduction to JavaScript and Modern Web Development course, you implemented an algorithm to convert a 2D array to a 1D array. The following is one algorithm for such a problem:

	function convert2dTo1d(arr2D){
	  var arr1D=[];
	  for(var i=0;i<arr2D.length;i++){
	    for(var j=0;j<arr2D[i].length;j++){
	      arr1D.push(arr2D[i][j]);
	    }
	  }
	  return arr1D;
	}
	 
	var arr2D = [
	  [1 , 2, 3],
	  [4 , 5, 6],
	  [7 , 8, 9],
	];
	console.log(convert2dTo1d(arr2D)); //->[1, 2, 3, 4, 5, 6, 7, 8, 9]

Let's say the push operation takes `d` seconds to complete and the `return` operation takes `e` seconds to complete. 
Also, we assume that the time for the first `for` loop is `k` and the time for the second `for` loop is `j`. 


The best scenario is when the outer array has one inner array and that inner array has a length of 1. 
In that case, both `for` loops will be executed once and the time to complete the algorithm is 

(k * j)(d) + e. 
(1 * 1)(d) + e
d + e

The worst case scenario happens when the `for` loops get really large. I.E. there are many arrays in the array to go through. 
The more arrays within the main array, the worse the algorithm performs. 

let's assume we have 100 array of ten elements to parse.


(100 * 10)(d) + e
1000d + e


#####Exercise 2


