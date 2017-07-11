'use strict';

var utilityModule = (function(){

  function isEmailAddress(input){
    if(input.length === 0){
      throw 'Missing parameter "input".';
    }

    if (input.indexOf("@") < 1) {
      return false;
    }

    var emailParts = input.split('@');
    var domain = emailParts[1];

    if (emailParts.length > 2) {
      return false;
    }

    if (domain.indexOf('.') === -1) {
      return false;
    } else {
      var domainParts = domain.split('.');
      var extension = domainParts[1];
      if (extension.length < 2) {
        return false;
      }
    }

    return true;
  }

  function isPhoneNumber(input){
    //Phone number for Trinidad and Tobago is of the form 1 868 XXX XXXX

    if (input.length === 0) {
      throw 'Missing Parameter in isPhoneNumber function: "input".';
    }

    if(input.length < 11){
      throw 'Too short to be a valid phone number.'
    }
    var phoneParts = [];
    if(input.indexOf(' ') > 0){
      phoneParts = input.split(' ');
    }else if(input.indexOf('-') > 0){
      phoneParts = input.split('-');
    }else{
      phoneParts[0] = input.slice(0,1);
      phoneParts[1] = input.slice(1,4);
      phoneParts[2] = input.slice(4,7);
      phoneParts[3] = input.slice(7);
    }

    var countryCode = phoneParts[0];
    var areaCode = phoneParts[1];
    var firstPartPhone = phoneParts[2];
    var secondPartPhone = phoneParts[3];

    if (phoneParts.length !== 4) {
      return false;
    }

    if (countryCode !== "1") {
      return false;
    }

    if (areaCode !== "868") {
      return false;
    }

    if (firstPartPhone.length !== 3 || parseInt(firstPartPhone).toString() !== firstPartPhone) {
      return false;
    }

    if (secondPartPhone.length !== 4 || parseInt(secondPartPhone).toString() !== secondPartPhone) {
      return false;
    }

    return true;
  }

  function withoutSymbols(input){
    if (input.length === 0) {
      throw 'Missing Parameter in withoutSymbols function: "input".';
    }

    //if the uppercase version of a character is equal to the lowercase version then it is a symbol not a letter.
    var i, char;
    var result = "";

    for (i = 0; i < input.length; i++) {
      char = input.charAt(i);
      console.log(char);
      if (char === " ") {	//check for space
        result += char;
      } else {
        if (parseInt(char).toString() === char) {	//check for number
          result += char;
        } else {
          if ((char.toLowerCase() !== char.toUpperCase())) { //check for letter
            result += char;
          }
        }
      }

    }

    if(result === input){
      return true;
    }else{
      return false;
    }
  }

  function isDate(input){
    if (!input) {
      throw 'Missing Parameter in isDate function: "input".';
    }
    if(Date.parse(input)) {
      return true;
    }else {
      return false;
    }
  }

  function isBeforeDate(input, reference){
    if (input.length === 0) {
      throw 'Missing Parameter in isBeforeDate function: "input".';
    }

    if (reference.length === 0) {
      throw 'Missing Parameter in isDate function: "reference".';
    }

    var date1 = Date.parse(input);
    var date2 = Date.parse(reference);
    if (!date1) {
      throw "Invalid date format - " + input;
    } else {
      if (!date2) {
        throw "Invalid date format - " + reference;
      } else {
        if (date1 < date2) {
          return true;
        }
      }
    }

    return false;
  }

  function isAfterDate(input, reference){
    if (!input) {
      throw 'Missing Parameter in isAfterDate function: "input".';
    }

    if (!reference) {
      throw 'Missing Parameter in isAfterDate function: "reference".';
    }

    var date1 = Date.parse(input);
    var date2 = Date.parse(reference);
    if (!date1) {
      throw 'Invalid date format - ' + input;
    } else {
      if (!date2) {
        throw 'Invalid date format - ' + reference;
      } else {
        if (date1 > date2) {
          return true;
        }
      }
    }

    return false;
  }

  function isBeforeToday(input){
    if (input.length === 0) {
      throw 'Missing Parameter in isBeforeDate function: "input".';
    }

    var date = Date.parse(input);
    if (!date) {
      throw 'Invalid date format - ' + input;
    } else {
      if (date < Date.now()) {
        return true;
      }
    }

    return false;
  }

  function isAfterToday(input){
    if (!input) {
      throw 'Missing Parameter in isAfterDate function: "input".';
    }

    var date = Date.parse(input);
    if (!date) {
      throw "Invalid date format - " + input;
    } else {
      if (date > Date.now()) {
        return true;
      }
    }

    return false;
  }

  function isEmpty(input){
    var i;

    if (input === null || input === undefined) {
      throw 'Missing Parameter in isEmpty function: "input".';
    }

    if (input.length === 0) {
      return true;
    } else {
      for (i = 0; i < input.length; i++) {
        if (input.charAt(i) !== " ") {
          return false;
        }
      }
    }

    return true;
  }

  function contains(inputString, wordsArray){
    if(inputString === undefined && wordsArray === undefined){
      throw 'No parameters entered.'
    }
    if (inputString === undefined || inputString === null || inputString.length === 0) {
      throw 'Missing Parameter in contains function: "inputString".';
    }
    if (wordsArray === undefined) {
      throw 'Missing Parameter in contains function: "wordsArray".';
    }
    var i, k;
    var result = true;

    for (i = 0; i < inputString.length; i++) {//remove symbols

      if (inputString.charAt(i).toLowerCase() === inputString.charAt(i).toUpperCase()) {
        inputString = inputString.split(inputString.charAt(i)).join(" ");
      }
    }

    var words = inputString.toLowerCase().split(' ');

    for (k = 0; k < wordsArray.length; k++) {

      if (words.indexOf(wordsArray[k]) === -1) {
        result = false;
      }
    }
    return result;
  }

  function lacks(inputString, wordsArray){
    if(inputString === undefined && wordsArray === undefined){
      throw 'No parameters entered.'
    }
    if (inputString === undefined || inputString === null || inputString.length === 0) {
      throw 'Missing Parameter in lacks function: "inputString".';
    }
    if (wordsArray === undefined) {
      throw 'Missing Parameter in lacks function: "wordsArray".';
    }
    var i, j, k;
    var result = false;

    for (i = 0; i < inputString.length; i++) {//remove symbols

      if (inputString.charAt(i).toLowerCase() === inputString.charAt(i).toUpperCase()) {
        inputString = inputString.split(inputString.charAt(i)).join(" ");
      }
    }

    var words = inputString.toLowerCase().split(' ');

    for (k = 0; k < wordsArray.length; k++) {

      if (words.indexOf(wordsArray[k]) === -1) {
        result = true;
      }
    }
    return result;
  }

  function isComposedof(input, arr){
    if(input === undefined && arr === undefined){
      throw 'No parameters entered.'
    }
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in lacks function: "input".';
    }
    if (arr === undefined) {
      throw 'Missing Parameter in lacks function: "arr".';
    }
    var i;
    var result = true;
    input = input.toLowerCase();
    var wordUsed = [];
    var testString = '';
    for (i = 0; i < arr.length; i++) {
      var wordIndex = input.indexOf(arr[i]);
      if (wordIndex === -1) {
        result = false
      }else{
        wordUsed.push(arr[i]);
      }
    }
    if(input.indexOf(' ') === -1){
      testString = wordUsed.join('');
    }else{
      testString = wordUsed.join(' ');
    }

    if(testString !== input){
      result = false;
    }

    return result;
  }

  function isLength(input, n){
    if(input === undefined && n === undefined){
      throw 'No parameters entered.'
    }
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in isLength function: "input".';
    }
    if (n === undefined) {
      throw 'Missing Parameter in isLength function: "n".';
    }

    return input.length <= n;
  }

  function isOfLength(input, n){
    if(input === undefined && n === undefined){
      throw 'No parameters entered.'
    }
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in isLength function: "input".';
    }
    if (n === undefined) {
      throw 'Missing Parameter in isLength function: "n".';
    }

    return input.length >= n;
  }

  function countWords(inputString){
    if (inputString === undefined || inputString === null || inputString.length === 0) {
      throw 'Missing Parameter in countWords function: "inputString".';
    }
    var wordsArray = inputString.split(' ');
    return wordsArray.length;
  }

  function lessWordsThan(input, n){
    if(input === undefined && n === undefined){
      throw 'No parameters entered.'
    }
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in lessWordsThan function: "input".';
    }
    if (n === undefined) {
      throw 'Missing Parameter in lessWordsThan function: "n".';
    }

    return this.countWords(input) <= n;
  }

  function moreWordsThan(input, n){
    if(input === undefined && n === undefined){
      throw 'No parameters entered.'
    }
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in moreWordsThan function: "input".';
    }
    if (n === undefined) {
      throw 'Missing Parameter in moreWordsThan function: "n".';
    }
    return this.countWords(input) >= n;
  }

  function isBetween(input, floor, ceil){
    if(input === undefined && floor === undefined && ceil === undefined){
      throw 'No parameters entered.'
    }
    if (input === undefined || input === null) {
      throw 'Missing Parameter in isBetween function: "input".';
    }
    if (floor === undefined || floor === null) {
      throw 'Missing Parameter in isBetween function: "floor".';
    }
    if (ceil === undefined || ceil === null) {
      throw 'Missing Parameter in isBetween function: "ceil".';
    }

    return (input >= floor && input <= ceil);
  }

  function isAlphanumeric(input){
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in isAlphanumeric function: "input".';
    }

    var result = true;
    var i, char;
    var re = /[A-Za-z0-9\s]/

    for (i = 0; i < input.length; i++) {
      char = input.charAt(i);
      if(re.test(char) === false){
        result = false;
      }
    }
    return result;
  }

  function isCreditCard(input){
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in isCreditCard function: "input".';
    }

    var noHyphens, i;
    var result = true;

    if (input.indexOf("-") > -1) { //check for hyphens
      noHyphens = input.split("-").join(""); //make string without hyphens

      if (noHyphens.length !== 16) {
        result = false;
      } else {
        for (i = 0; i < noHyphens.length; i++) {
          var char = noHyphens.charAt(i);
          if ((parseInt(char).toString() !== char) && (char.toLowerCase() === char.toUpperCase())) { //check if char is not a number or if char is a symbol
            result = false;
          }
        }
      }
    } else { // no hyphens
      if (input.length !== 16) {
        result = false;
      } else {
        for (i = 0; i < input.length; i++) {
          char = input.charAt(i);
          if ((parseInt(char).toString() !== char) && (char.toLowerCase() === char.toUpperCase())) { //check if char is not a number or if char is a symbol
            result = false;
          }
        }
      }
    }

    return result;
  }

  function isHex(input){
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in isHex function: "input".';
    }

    var i, char;
    var result = true;

    if (input.charAt(0) !== "#") {
      result = false;
    } else {
      if (input.length !== 4 && input.length !== 7) { //ensure that the lengths are correct
        result = false;
      } else {
        for (i = 1; i < input.length; i++) { //we start from the second character since we already identified the #
          char = input.charAt(i);
          if ((parseInt(char).toString() !== char) && (char.toLowerCase() === char.toUpperCase())) { //if char is not a number and character is a symbol
            result = false;
          } else {
            if ((parseInt(char).toString() !== char) && (char.toUpperCase() > "F")) { //if char is not a number and char is a letter greater than F
              result = false;
            }
          }
        }
      }
    }

    return result;
  }

  function isRGB(input){
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in isRGB function: "input".';
    }

    var firstPart = input.slice(0, 4); //test for 'rgb(' at the start
    var lastPart = input.charAt(input.length - 1); //test for ')' at the end
    var colorCode = input.slice(4, input.length - 2); //get content that is inside the brackets
    var codeValues = colorCode.split(","); //break string apart by colors
    var i, colorNum;
    var result = true;

    if (firstPart === "rgb(" && lastPart === ")") {
      for (i = 0; i < codeValues.length; i++) {
        colorNum = parseInt(codeValues[i].trim());
        if (colorNum < 0 || colorNum > 255) {
          result = false;
        }
      }
    } else {
      result = false;
    }

    return result;
  }

  function isTrimmed(input){
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in isTrimmed function: "input".';
    }

    var newString = input.split(" ");
    if(newString.indexOf('') !== -1) {
      return false;
    } else {
      return true;
    }
  }

  function keys(input){
    if (input === undefined || input === null || Object.keys(input).length === 0) {
      throw 'Missing Parameter in keys function: "input".';
    }

    if(input instanceof Object){
      return Object.keys(input);
    }else{
      throw "Please provide an object to this function.";
    }
  }

  function values(input) {
    if (input === undefined || input === null || Object.keys(input).length === 0) {
      throw 'Missing Parameter in values function: "input".';
    }

    if(input instanceof Object){
      return Object.values(input);
    }else{
      throw "Please provide an object to this function.";
    }
  }

  function pairs(input){
    if (input === undefined || input === null || Object.keys(input).length === 0) {
      throw 'Missing Parameter in pairs function: "input".';
    }

    var result = [];
    var item;

    if(input instanceof Object){
      for(item in input){
        result.push(item);
        result.push(input[item]);
      }
    }else{
      throw "Please provide an object to this function.";
    }

    return result;
  }

  function shuffle(input){
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in pairs function: "input". or array is empty.';
    }

    var index, temp;

    if(input instanceof Array){
      var counter = input.length - 1;
      while(counter > 0){
        index = Math.floor(Math.random() * counter);
        temp = input[counter];
        input[counter] = input[index];
        input[index] = temp;

      }
    }else{
      throw "Please provide an array to this function.";
    }

    return input;
  }

  function toDash(input){
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in toDash function: "input".';
    }

    var i;
    var result = "";
    if(input.length > 1){ //string must have a length great than one
      for(i = 0; i < input.length; i++){
        if(input.charAt(i) === input.charAt(i).toUpperCase()){
          result += "-" + input.charAt(i).toLowerCase();
        }else{
          result += input.charAt(i).toLowerCase();
        }
      }
    }

    return result;
  }

  function toCamel(input){
    if (input === undefined || input === null || input.length === 0) {
      throw 'Missing Parameter in toCamel function: "input".';
    }

    var i;
    var result = "";
    if(input.length > 1){ //string must have a length great than one
      for(i = 0; i < input.length; i++){
        if(input.charAt(i) === "-"){
          result += input.charAt(i+1).toUpperCase();
          i++;
        }else{
          result += input.charAt(i).toLowerCase();
        }
      }
    }

    return result;
  }

  function has(obj, search){
    if(obj === undefined && search === undefined){
      throw 'No parameters entered.'
    }
    if (obj === undefined || obj === null || Object.keys(obj).length === 0) {
      throw 'Missing Parameter in has function: "obj".';
    }
    if (search === undefined || search.length === 0) {
      throw 'Missing Parameter in has function: "search".';
    }


    var key;
    var result = false;

    for(key in obj){
      if(obj[key] === search){
        result = true;
      }
    }

    return result;
  }

  function pick(obj, keysArr) {
    if(obj === undefined && keysArr === undefined){
      throw 'No parameters entered.'
    }
    if (obj === undefined || obj === null || Object.keys(obj).length === 0) {
      throw 'Missing Parameter in pick function: "obj".';
    }
    if (keysArr === undefined || keysArr.length === 0) {
      throw 'Missing Parameter in pick function: "keysArr".';
    }


    var i;
    var result = {};

    for(i = 0; i < keysArr.length; i++){
      result[keysArr[i]] = obj[keysArr[i]];
    }

    return result;
  }

  //exported functions
  return {
    isEmailAddress: isEmailAddress,
    isPhoneNumber: isPhoneNumber,
    withoutSymbols: withoutSymbols,
    isDate: isDate,
    isBeforeDate: isBeforeDate,
    isAfterDate: isAfterDate,
    isBeforeToday: isBeforeToday,
    isAfterToday: isAfterToday,
    isEmpty: isEmpty,
    contains: contains,
    lacks: lacks,
    isComposedof: isComposedof,
    isLength: isLength,
    isOfLength: isOfLength,
    countWords: countWords,
    lessWordsThan: lessWordsThan,
    moreWordsThan: moreWordsThan,
    isBetween: isBetween,
    isAlphanumeric: isAlphanumeric,
    isCreditCard: isCreditCard,
    isHex: isHex,
    isRGB: isRGB,
    isTrimmed: isTrimmed,
    keys: keys,
    values: values,
    pairs: pairs,
    shuffle: shuffle,
    toDash: toDash,
    toCamel: toCamel,
    has: has,
    pick: pick
  }
})();