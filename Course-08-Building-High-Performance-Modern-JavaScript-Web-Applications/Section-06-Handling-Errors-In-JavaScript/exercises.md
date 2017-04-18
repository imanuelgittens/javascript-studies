####Exercise 1

Question 1)

    function rangeError(){
       (77.1234).toExponential(-1);//RangeError: toExponential() argument must be between 0 and 20
    }

Question 2)

        function referenceError(){
          console.log(app); //app is not defined
        }
    
Question 3)

       function URIError(){
         decodeURIComponent('%');
       }

####Exercise 2

    function(){
        try{
          console.log(app);
        }catch(error){
          console.log('Error not shown');
        }
    }
    
####Exercise 3


    function InvalidArgumentType(message){
      this.message = message;
    }
    
    InvalidArgumentType.prototype = new Error();
    InvalidArgumentType.prototype.name = 'InvalidArgumentType';
    
    
    function square(a){ 
      
      if(typeof a !== 'number'){
        throw new InvalidArgumentType('The square function requires a numeric argument.');
      }
      return a*a;
    }
    
    square('a');

