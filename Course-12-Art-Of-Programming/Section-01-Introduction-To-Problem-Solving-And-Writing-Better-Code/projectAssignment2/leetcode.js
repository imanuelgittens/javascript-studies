var MDUtility = {
  /*
   * Reverse digits of an integer.
   * Example1: x = 123, return 321
   * Example2: x = -123, return -321
   *
   *  @param {number} num
   *  @return {number}
   * */
  reverseInteger: function(num){
    /*if(!Number.isSafeInteger(num)){
      return 0;
    }*/
    var sign = num > 0 ? 1 : -1;
    num = Math.abs(num);
    var reversedNumString = num.toString().split('').reverse().join('');
    var reversedNum = sign * Number(reversedNumString);
    if(Number.isSafeInteger(reversedNum)){
      return reversedNum;
    }else{
      return 0;
    }
  }


}

//console.log(mdUtility.reverseInteger(-123));

//easy



//medium

//hard