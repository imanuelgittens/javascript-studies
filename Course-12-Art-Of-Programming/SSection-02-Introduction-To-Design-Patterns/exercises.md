##Exercises

#####Exercise 1

Qu 1)

    function increment(initValue) {
        if(initValue){
          value = initValue;
        }
        else{
          value++;
        }
        console.log(value);
    }
     
    increment(5);
    increment();
    increment();
    
The bad practices that the above code demonstrates are -

- no strict mode
- using truthy and falsy values incorrectly
- global namespace pollution

Rewritten code shown below

    function increment(initValue) {
        'use strict';
        
        var value = 0;
        if(initValue !== undefined && initValue !== null){
          value = initValue;
        }
        else{
          value++;
        }
        console.log(value);
    }
     
    increment(5);
    increment();
    increment();
    
Qu 2)

    function max(num1, num2){
      if(num1 > num2){
        return num1;
      }
      else{
        return num2;
      }
    }
     
    console.log(max(new Number(2), new Number(3)));//->3
    console.log(max(new Number(3), new Number(2)));//->3
    
The bad practices that the above code demonstrates are listed below - 

- using wrapper abjects for primitive types
- not using strict mode

Rewritten code shown below -
 
    function max(num1, num2){
    'use strict';
      if(num1 > num2){
        return num1;
      }
      else{
        return num2;
      }
    }
     
    console.log(max(2,3));//->3
    console.log(max(3, 2));//->3
    
#####Exercise 2

Qu 1)

    'use strict';

    function Queue(){
      this.arr = [];
    }
    
    Queue.prototype.enqueue = function(item){
      this.arr.push(item);
    };
    
    Queue.prototype.dequeue = function(){
      return this.arr.shift();
    };
    
    var queue = new Queue();
    queue.enqueue(1);
    queue.dequeue();
    
Qu 2)

    'use strict';
    
    function Stack(){
      this.arr = [];
    }
    
    Stack.prototype.push = function(item){
      this.arr.push(item);
    };
    
    Stack.prototype.pop = function(){
      return this.arr.pop();
    };
    
    var stack = new Stack();
    stack.push(1);
    stack.pop();
    
    
#####Exercise 3

Qu 1)

Based on this chapter, some advantages of the module pattern are -

- private and public functions (Functions can be hidden for internal use only)


    'use strict'

    var util = (function(){
        function isNotNumber(n){
            return isNaN(n);
        }
        
        function numOrNot(item){
          return isNotNumber(item);
        }
        
        return {
          numOrNot: numOrNot
        }
    })();
    
    util.numOrNot('1');
    
    
- lazy initialization (We can only load the module when needed so we save on memory and speed)

    'use strict'
    
    var util = (function(){
      
      var instance;
      
      function createInstance(){
        function isNotNumber(n){
            return isNaN(n);
        }
        
        function numOrNot(item){
          return isNotNumber(item);
        }
        
        return {
          numOrNot: numOrNot
        }
      }
      
      return{
        getInstance: function(){
          if(!instance){
            instance = createInstance();
          }
          return instance;
        }
      };
    })();
    
    util.getInstance().numOrNot('1');
    
    
- module pattern provides structure and help organize your code as it grows. 

Disadvantages of the revealing module pattern include - 

- private functions refer to a public function so that public function can't be overidden is a patch is necessary
- you can't use inheritance with this pattern
