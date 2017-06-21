##Exercises

#####Exercise 1

Qu. 1) Toaster algorithm

Input - 2 slices of bread

Procedure

1. Put two slices of bread in toaster.
2. Press the lever to lower the bread into the toaster and start the heat
3. Wait 30 seconds to 1 minute
4. Raise lever to complete toasting

Output - Toasted bread

Qu. 2)

See answer [here](https://repl.it/It5E/2)

Qu 3) 

See answer [here](https://repl.it/It5r)

Qu 4)

See answer [here](https://repl.it/It6I)

#####Exercise 2

Qu 1 and 2)

See answer [here](https://repl.it/It6x/1)

#####Exercise 3

Qu 1)

Qu 2)

See answer [here](https://repl.it/Ithf/2)

Qu 3)

See answer [here](https://repl.it/Itii/1)

Qu 4)

See answer [here](https://repl.it/ItkE/4)

Qu 5)

TODO

Qu 6)

TODO

#####Exercise 4

Qu 1)

    *               Number              Boolean                 String
    Number          Multiplication      true -> 1, false -> 0   string -> number
                    3*3 = 9             3 * true = 3            3 * "3" = 9
                    
    Boolean         true->1,false->0    true->1,false->0        bolean -> string
                    true*4 = 4          true*true = 1           true*"true" = NaN
                    
    String          string->number      string->num,bool->num   string->num
                    "4"*4=16            "str"*true=NaN          "str"*"str"=NaN
                    
                    
Qu 2)

    var obj = {
     toString: function() {
        return "[object obj]";
     },
     valueOf: function() {
        return 5;
     }
    };
 
     console.log(5 + obj); //-10
     console.log("1" + 2 + 3); //-123
     console.log(1 + "2" + 3); //-123
     console.log(1 + 2 + "3"); //-33
     console.log("5" * 5); //-25
     
 Qu 3)
 
     console.log(1 == true); //->true
     console.log("" == "0"); //->false
     console.log(undefined == false); //->false 
     console.log(null == false); //->false
     console.log(" \t\r\n " == false); //->true 
     console.log("" == 0); //->true 
     console.log(0 == false); //->true 
     console.log("" == false); //->true 
     console.log("0" == false); //->true 
     console.log(null == undefined); //->true 
     console.log(false == "false"); //->false 
     console.log("0" == 0); //->true 
     console.log(" \t\r\n " == 0); //->true
     
     
Qu 4)

    console.log("" === 0); //->false
    console.log("0" === 0); //->false
    console.log(0 === false); //->false 
    console.log("" === false); //->false 
    console.log("0" === false); //->false 
    console.log(" \t\r\n " === false); //->false 
    console.log(" \t\r\n " === 0); //->false
    console.log(null === undefined); //->false
    
Qu 5)

    var a = (0.1 + 0.2) + 0.3;
    var b = 0.1 + (0.2 + 0.3);
    if(a === b){
      console.log("Inside if");
    }
    
The output of the above code is `undefined`. This is because of JavaScript's problem when dealing with floating point numbers. 
Adding 0.2 and 0.3 does not equal 0.5 and also adding 0.1 and 0.2 does not equal 0.3. This means that the values of `a` and `b`
are different, hence we don't enter the if statement.

Qu 6)

    console.log(true + []); //-> true
    console.log([] + false);//-> false
    console.log(1 + [1] + 1);//-> 111
    console.log([1, 2] + false);//-> 1,2false
    console.log([1, 2] + [1, 2]);//-> 1,21,2
    
    +               Number              Boolean                 String
    Array           arr->string         bool->str, arr->str     arr->str
                    []+1='1'            [1]+true='1true'        [2,3] + "hey" = '2,3hey'
    
Qu 7)

   TODO
  
  
#####Exercise 5

Qu 3)

Switch statements should always have a default option as a safeguard just in case it is used with an unexpected value. 
This will prevent the switch statement from breaking your code. 

Qu 4)

    var arr = [{ "name" : "John Doe"}, [1, 2]];
    
Code smells for the above code are -

- array of different types
- polluting global namespace since it is not wrapped in a function closure

