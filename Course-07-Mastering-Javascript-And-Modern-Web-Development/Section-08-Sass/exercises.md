#Exercises

####Exercise 1

Question 1)

When using CSS without a preprocessor, the file is accessed directly by the browser to style the current HTML page correctly. When using CSS with a preprocessor, the actual styling is written in a language similar to (but not) CSS, that must be translated to CSS before the browser can use it to style the current HTML page.

Question 2)

Variable are useful when using SCSS for a number of reasons -

- they allow for easy updating of code. For example, we can change the value of a variable and it will be updated throughout the code where ever it is used.

- They can help to make the code more readable by having a name that hints their purpose.

- They can be easily manipulated to behave differently if needed.

Question 3)


    @mixin row-spacing{
      margin: 5px;
      padding: 5px;
    }

    @mixin row-border{
      border: 1px solid #333;
      border-radius: 3px;
    }

    @mixin vendor-prefixes($property, $value){
      -webkit-#{$property}: $value;
      -moz-#{$property}: $value;
      -ms-#{$property}: $value;
      -o-#{$property}: $value;
    }
