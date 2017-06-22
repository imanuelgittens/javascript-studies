var MDUtility = {
  /*
   * Reverse digits of an integer.
   * Example1: x = 123, return 321
   * Example2: x = -123, return -321
   *
   *  @param {number} num
   *  @return {number}
   * */
  reverse: function(num){
    var sign = num > 0 ? 1 : -1;
    num = Math.abs(num);
    var reversedNumString = num.toString().split('').reverse().join('');
    var reversedNum = sign * Number(reversedNumString);
    if(Number.isSafeInteger(reversedNum)){
      return reversedNum;
    }else{
      return 0;
    }
  },

  /*
  *
  * @param {number[]}
  * @return {number[]}
  *
  * */

  plusOne: function(digits) {
    var digitsString = digits.join('');
    var num = Number(digitsString) + 1;
    var numPlusOne = num.toString().split('');
    var i;
    for(i = 0; i < numPlusOne.length; i++){
      numPlusOne[i] = Number(numPlusOne[i]);
    }
    return numPlusOne;
  }



}

//console.log(mdUtility.reverseInteger(-123));

//easy



//medium

//hard