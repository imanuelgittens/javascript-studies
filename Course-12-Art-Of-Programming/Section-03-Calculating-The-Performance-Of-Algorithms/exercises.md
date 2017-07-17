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

Qu 1) Show that 8 = O(1).

    f(n) = 8
    g(n) = 1
    
    0 <= f(n) <= c * g(n)
    
    Let d = 0;
    let c = 9;
    
    0 <= f(n) <= 9 * g(n)
    0 <= 8 <= 9;
    
 Therefore 8 is O(1);
 
 
 Qu2) Show that 20x^2-3 and 7x^2 + 8x + 4 have the same Big-O.
 
TODO

#####Exercise 3

Qu 1) Prove the complexity of the algorithm `hasAllUniqueChars(password, ignoreCase)` is `O(n^2)` when it is implemented as checking each character with all the other characters before it.

in this algorithm, we are checking each character of the password against each other character 
of that password. This means that we must implement two loops (each being linear time loops). 

    O(n) * O(n)
    O(n^2)
    
Qu 2) Given an array sorted in descending order, modify the binarySearch algorithm to find an item in the array. Sample input/output: binarySearch([9, 7, 5, 3, 1], 7);-> //1.


    function reverseBinarySearch(arr, value){
      var low = 0;
      var high = arr.length - 1;
      var mid;
      while(low <= high){
        mid = parseInt((low + high) / 2);
        if(arr[mid] > value){
          low = mid + 1;
        }else if(arr[mid] < value){
          high = mid - 1;
        }else{
          return mid;
        }
      }
      return -1;
    }
    
    reverseBinarySearch([9, 7, 5, 3, 1], 7);
    
Qu 3) You have previously implemented an algorithm called getLast(items_list). Calculate the Big-O complexity for your implementation. If your algorithm is not O(1), how can you improve it to be O(1)?

The big O implementation for my algorithm was O(1)

    
Qu 4) Find the Big-O for the following algorithm and explain your answer.

    function function1(n)
    {
      var count = 0;
      for (var i = 0; i < n; i++){
         for (var j = 0; j < n; j++){
            count++;
         }
      }
      return count;
    }
    
The Big-O for the above algorithm is O(n^2). This is because, for each value of n, it increments n times. 
 
QU 4) Find the Big-O for the following function and explain your answer.

    function function2(n)
    {
      var count = 0;
      for (var i = 0; i < n; i++){
         for (var j = i; j > 0; j--){
            count++;
         }
      }
      return count;
    }
    
Tis algorithm's Big-O is O(n)

Qu 5)  Find the Big-O for the following function and explain your answer.

    function function3(n)
    {
      var count = 0;
      for (var i = n; i > 0; i /= 2){
         for (var j = 0; j < i; j++){
            count++;
         }
      }
      return count;
    }
    
The Big-O for the above algorithm is O(n log(n)) because we break the for loop down by half ,
 then do a linear count. 
 
Qu 6)

FOr the chessboard algorithm, the Big-O is O(n^2) because for each row we need to go through the values and sum them. 




