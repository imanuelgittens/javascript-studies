(function(){

  'use strict';


  window.addEventListener('DOMContentLoaded', function(){

    var calculator = {
      calculation: '',

      init: function(){
        this.cacheDom();
        this.bindEvents();
      },

      cacheDom: function(){
        this.calc = document.getElementById('calculator-form');
        this.zero = this.calc.querySelector('#zero');
        this.one = this.calc.querySelector('#one');
        this.two = this.calc.querySelector('#two');
        this.three = this.calc.querySelector('#three');
        this.four = this.calc.querySelector('#four');
        this.five = this.calc.querySelector('#five');
        this.six = this.calc.querySelector('#six');
        this.seven = this.calc.querySelector('#seven');
        this.eight = this.calc.querySelector('#eight');
        this.nine = this.calc.querySelector('#nine');
        this.plus = this.calc.querySelector('#plus');
        this.minus = this.calc.querySelector('#minus');
        this.multiply = this.calc.querySelector('#multiply');
        this.divide = this.calc.querySelector('#divide');
        this.clear = this.calc.querySelector('#clear');
        this.decimal = this.calc.querySelector('#decimal');
        this.equals = this.calc.querySelector('#equals');
        this.del = this.calc.querySelector('#delete');
        this.result = this.calc.querySelector('#result');
      },
      bindEvents: function(){
        this.calc.addEventListener('click', this.handleButtonClick.bind(this));
      },
      handleButtonClick: function(event){
        event.preventDefault();
        if(event.target.classList.contains('calc-expression-btn')){
          this.calculation += event.target.innerHTML;
          this.result.value = this.calculation;
        }else if(event.target.classList.contains('equal')){
          try {
            this.result.value = eval(this.calculation);
          } catch(e) {
            this.result.value = 'Error!';
          }
        }else if(event.target.classList.contains('delete')){
          this.calculation = this.calculation.substr(0, this.calculation.length-1);
          this.result.value = this.calculation;
        }else if(event.target.classList.contains('clear')){
          this.calculation = '';
          this.result.value = this.calculation;
        }
      }
    }

    calculator.init();

  });

})();
