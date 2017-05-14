##Exercises

#####Exercise 1

Question 1)

Describe in detail three different mechanisms that can be used in JavaScript to encapsulate data or functionality and explain the relative strengths and weaknesses of each.

Javascript has a number of ways in which we can encapsulate data or functionality. Each are highlighted below - 

- Objects: data or functions within an object are encapsulated by default. From everyday use of objects, we know that 
its data and functions are encapsulated before we can access them directly. Instead, we must do `obj.data` or `obj.func()`.
Everything in JavaScript is an object which gives the language enormous flexibility. Within it we won't be able to do things 
like 

    var num = 3;
    
    num.toString();
    
- Functions: similar to objects, data defined within a function is encapsulated. Encapsulation offers because of the function's scope.
Anything defined within the function's scope is not directly accessibly to the environment outside of that function. 

        function test(){
          var a = 3;
        }
        
        console.log(a)//reference error
        
- Closures: closures are a special construct in JavaScript where the scope variables remain accessible after the function has returned. 
 In general a closure is created when we return function b from calling function a however function b uses a variable from function a.
 
         function counter() {
             var total = 0;
          
             return function count(value) {
                 return total += value;
             }
         }
 
 Closures are a form of encapsulation because they wrap the data from function a in a separate scope ensuring that they are'nt accessible
 to the outside environment and won't get cleaned by JavaScript's garbage collector. 
 
 
 Question 2)
 
 Create a module in JavaScript which uses a closure to create private variables that cannot be accessed from outside of the module, but which exports a methods that can be used to operate on the variables.
 
 See answer on codepen [here](https://codepen.io/imanuelgittens/pen/BRVoBo)
 
 Question 3)
 
 