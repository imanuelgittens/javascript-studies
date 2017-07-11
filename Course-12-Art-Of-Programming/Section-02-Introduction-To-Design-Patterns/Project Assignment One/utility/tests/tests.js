QUnit.test('utilityModule.isEmailAddress', function(assert){
  assert.throws(
    function(){
      utilityModule.isEmailAddress('');
    },
    function(err){
      return err.toString() === 'Missing parameter "input".';
    },
    'Error message should be shown when input is empty.'
  );
  assert.deepEqual(utilityModule.isEmailAddress('@gmail.com'), false, 'Missing username section of email.');
  assert.deepEqual(utilityModule.isEmailAddress('imanuelgmail.com'), false, 'Missing @ symbol.');
  assert.deepEqual(utilityModule.isEmailAddress('imanuel@gmailcom'), false, 'Missing . in domain definition.')
  assert.deepEqual(utilityModule.isEmailAddress('gittensimanuel@gmail.com'), true, 'Properly formatted Email.');
});

QUnit.test('utilityModule.isPhoneNumber', function(assert){
  //testing for Trinidadian phone number
  assert.throws(
    function(){
      utilityModule.isPhoneNumber('');
    },
    function(err){
      return err.toString() === 'Missing Parameter in isPhoneNumber function: "input".';
    },
    'Error message should shown when input is empty.'
  );

  assert.throws(
    function(){
      utilityModule.isPhoneNumber('13212');
    },
    function(err){
      return err.toString() === 'Too short to be a valid phone number.';
    },
    'Error message should be shown when number is too short.'
  );

  assert.deepEqual(utilityModule.isPhoneNumber('1-868-234-3212'), true, 'Valid Phone Number with dash delimiter.');
  assert.deepEqual(utilityModule.isPhoneNumber('1 868 234 3212'), true, 'Valid Phone Number with space delimiter.');
  assert.deepEqual(utilityModule.isPhoneNumber('18682343212'), true, 'Valid Phone Number with no delimiter delimiter.');
  assert.deepEqual(utilityModule.isPhoneNumber('1 223 234 3212'), false, 'Wrong area code.');
  assert.deepEqual(utilityModule.isPhoneNumber('2 868 234 3212'), false, 'Wrong country code.');
});

QUnit.test('utilityModule.withoutSymbols', function(assert) {
  //ensure string has no symbols
  assert.throws(
    function(){
      utilityModule.withoutSymbols('');
    },
    function(err){
      return err.toString() === 'Missing Parameter in withoutSymbols function: "input".';
    },
    'If input is empty, an error message should be shown'
  );
  assert.deepEqual(utilityModule.withoutSymbols('AsweRf'), true, 'Should return true if the string has no symbols.');
  assert.deepEqual(utilityModule.withoutSymbols('Aswe@Rf'), false, 'Should return false if the string has symbols.');
  assert.deepEqual(utilityModule.withoutSymbols('1 AsweRf'), true, 'Should return true if the string has no symbols, even if it has numbers and spaces.');
});


//all date functions here should be implemented using a library like moment.js. Tests don't work for all browsers.
QUnit.test('utilityModule.isDate', function(assert){
  assert.throws(
    function(){
      utilityModule.isDate('');
    },
    function(err){
      return err.toString() === 'Missing Parameter in isDate function: "input".';
    },
    'Should throw an error is input is empty'
  );

  assert.deepEqual(utilityModule.isDate('2017-01-08'), true, 'Should return true if input is a valid date');
  assert.deepEqual(utilityModule.isDate('fkdl'), false, 'Should return false if input is a invalid date');
});

QUnit.test('utilityModule.isBeforeDate', function(assert) {
  //compare two dates
  assert.throws(
    function(){
      utilityModule.isBeforeDate('', '01-07-2017');
    },
    function(err){
        return err.toString() === 'Missing Parameter in isBeforeDate function: "input".';
    },
    'If the input is empty, an error message should be displayed.'
  );

  assert.throws(
    function(){
      utilityModule.isBeforeDate('01-07-2017', '');
    },
    function(err){
      return err.toString() === 'Missing Parameter in isDate function: "reference".';
    },
    'If the reference is empty, an error message should be displayed'
  );

  assert.throws(
    function(){
      utilityModule.isBeforeDate('01^07_2017', '01^07_2017');
    },
    function(err){
      return err.toString() === 'Invalid date format - 01^07_2017';
    },
    'If input is not a valid date, an error message should show.'
  );

  assert.throws(
    function(){
      utilityModule.isBeforeDate('01^07_2017', '01^07_2017');
    },
    function(err){
      return err.toString() === 'Invalid date format - 01^07_2017'
    },
    'If reference is not a valid date, an error message should show.'
  );

  assert.deepEqual(utilityModule.isBeforeDate('01-07-2017', '01-08-2017'), true, 'Should return true if input date is before reference date');
  assert.deepEqual(utilityModule.isBeforeDate('01-08-2017', '01-07-2017'), false, 'Should return false if input date is before reference date');
});

QUnit.test('utilityModule.isAfterDate', function(assert) {
  //compare two dates
  assert.throws(
    function(){
      utilityModule.isAfterDate('', '01-07-2017');
    },
    function(err){
      return err.toString() === 'Missing Parameter in isAfterDate function: "input".';
    },
    'If the input is empty, an error message should be displayed.'
  );

  assert.throws(
    function(){
      utilityModule.isAfterDate('01-07-2017', '');
    },
    function(err){
      return err.toString() === 'Missing Parameter in isAfterDate function: "reference".';
    },
    'If the reference is empty, an error message should be displayed'
  );

  assert.throws(
    function(){
      utilityModule.isAfterDate('01^07_2017', '01^07_2017');
    },
    function(err){
      return err.toString() === 'Invalid date format - 01^07_2017';
    },
    'If input is not a valid date, an error message should show.'
  );

  assert.throws(
    function(){
      utilityModule.isAfterDate('01^07_2017', '01^07_2017');
    },
    function(err){
      return err.toString() === 'Invalid date format - 01^07_2017'
    },
    'If reference is not a valid date, an error message should show.'
  );

  assert.deepEqual(utilityModule.isAfterDate('01-08-2017', '01-07-2017'), true, 'Should return true if input date is before reference date');
  assert.deepEqual(utilityModule.isAfterDate('01-07-2017', '01-08-2017'), false, 'Should return false if input date is before reference date');
});

QUnit.test('utilityModule.isBeforeToday', function(assert){
  assert.throws(
    function(){
      utilityModule.isBeforeToday('');
    },
    function(err){
      return err.toString() === 'Missing Parameter in isBeforeDate function: "input".';
    },
    'If input is empty, an error should be thrown.'
  );

  assert.deepEqual(utilityModule.isBeforeToday('2017 06 29'), true, 'Dates before today should return true.');
  assert.deepEqual(utilityModule.isBeforeToday('2019 07 29'), false, 'Dates after today should return false.');
});

QUnit.test('utilityModule.isAfterToday', function(assert){
  assert.throws(
    function(){
      utilityModule.isAfterToday('');
    },
    function(err){
      return err.toString() === 'Missing Parameter in isAfterDate function: "input".';
    },
    'If input is empty, an error should be thrown.'
  );

  assert.deepEqual(utilityModule.isAfterToday('2017 06 29'), false, 'Dates before today should return false.');
  assert.deepEqual(utilityModule.isAfterToday('2019 07 29'), true, 'Dates after today should return true.');
});

QUnit.test('utilityModule.isEmpty', function(assert){
  assert.throws(function(){
    utilityModule.isEmpty();
  },
    function(err){
      return err.toString() === 'Missing Parameter in isEmpty function: "input".';
    },
    'If input is empty, an error should be shown.'
  );
  assert.deepEqual(utilityModule.isEmpty(''), true, 'Input of length 0 should return true');
  assert.deepEqual(utilityModule.isEmpty('    '), true, 'Inputs with only spaces should return true');
});

QUnit.test('utilityModule.contains', function(assert){
  assert.throws(function(){
    utilityModule.contains();
  },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.contains('hello there');
    },
    function(err){
      return err.toString() === 'Missing Parameter in contains function: "wordsArray".';
    },
    'If wordsArray is not entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.contains('',['hello', 'there']);
    },
    function(err){
      return err.toString() === 'Missing Parameter in contains function: "inputString".';
    },
    'If input string is not entered, an error should be shown'
  );

  assert.deepEqual(utilityModule.contains('Hello there puppy',['hello', 'there']), true, 'Return true if the words exist.');
  assert.deepEqual(utilityModule.contains('Hello there puppy',['cat']), false, 'Return false if the words don\'t exist.');
});

QUnit.test('utilityModule.lacks', function(assert){
  assert.throws(function(){
      utilityModule.lacks();
    },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.lacks('hello there');
    },
    function(err){
      return err.toString() === 'Missing Parameter in lacks function: "wordsArray".';
    },
    'If wordsArray is not entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.lacks('',['hello', 'there']);
    },
    function(err){
      return err.toString() === 'Missing Parameter in lacks function: "inputString".';
    },
    'If input string is not entered, an error should be shown'
  );

  assert.deepEqual(utilityModule.lacks('Hello there puppy',['hello', 'there']), false, 'Return false if the words exist.');
  assert.deepEqual(utilityModule.lacks('Hello there puppy',['cat']), true, 'Return true if the words don\'t exist.');
});

QUnit.test('utilityModule.isComposedOf', function(assert){
  assert.throws(function(){
      utilityModule.isComposedof();
    },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.isComposedof('hello there');
    },
    function(err){
      return err.toString() === 'Missing Parameter in lacks function: "arr".';
    },
    'If wordsArray is not entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.isComposedof('',['hello', 'there']);
    },
    function(err){
      return err.toString() === 'Missing Parameter in lacks function: "input".';
    },
    'If input string is not entered, an error should be shown'
  );

  assert.deepEqual(utilityModule.isComposedof('Hello there puppy',['hello', 'there']), false, 'Return false if the string contains words not found in the array exist.');
  assert.deepEqual(utilityModule.isComposedof('Hello there puppy',['hello', 'there', 'puppy']), true, 'Return true if all the words in the string exist in the array.');
});

QUnit.test('utilityModule.isLength', function(assert){
  assert.throws(function(){
      utilityModule.isLength();
    },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.isLength('hello there');
    },
    function(err){
      return err.toString() === 'Missing Parameter in isLength function: "n".';
    },
    'If n is not entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.isLength('',3);
    },
    function(err){
      return err.toString() === 'Missing Parameter in isLength function: "input".';
    },
    'If input string is not entered, an error should be shown'
  );
  assert.deepEqual(utilityModule.isLength('Hello there puppy', 3), false, 'Return false if the length is more than n');
  assert.deepEqual(utilityModule.isLength('Hello there puppy',17), true, 'Return true if string length is less than or equal to n');
});

QUnit.test('utilityModule.isOfLength', function(assert){
  assert.throws(function(){
      utilityModule.isOfLength();
    },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.isOfLength('hello there');
    },
    function(err){
      return err.toString() === 'Missing Parameter in isLength function: "n".';
    },
    'If n is not entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.isOfLength('',3);
    },
    function(err){
      return err.toString() === 'Missing Parameter in isLength function: "input".';
    },
    'If input string is not entered, an error should be shown'
  );
  assert.deepEqual(utilityModule.isOfLength('Hello', 9), false, 'Return false if the string length is less than n');
  assert.deepEqual(utilityModule.isOfLength('Hello there puppy',17), true, 'Return true if string length is more than or equal to n');
});

QUnit.test('utilityModule.countWords', function(assert){
  assert.throws(function(){
      utilityModule.countWords();
    },
    function(err){
      return err.toString() === 'Missing Parameter in countWords function: "inputString".';
    },
    'If no parameters are entered, an error should be shown'
  );


  assert.deepEqual(utilityModule.countWords('Hello there, Sam'), 3, 'Should return the number of words in the input string');
 // assert.deepEqual(utilityModule.isOfLength('Hello there puppy',17), true, 'Return true if string length is more than or equal to n');
});

QUnit.test('utilityModule.lessWordsThan', function(assert){
  assert.throws(function(){
      utilityModule.lessWordsThan();
    },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.lessWordsThan('hello there');
    },
    function(err){
      return err.toString() === 'Missing Parameter in lessWordsThan function: "n".';
    },
    'If n is not entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.lessWordsThan('',3);
    },
    function(err){
      return err.toString() === 'Missing Parameter in lessWordsThan function: "input".';
    },
    'If input string is not entered, an error should be shown'
  );
  assert.deepEqual(utilityModule.lessWordsThan('Hello there sammy boy.', 2), false, 'Return false if the string contains more words than n');
  assert.deepEqual(utilityModule.lessWordsThan('Hello there puppy',4), true, 'Return true if the string contains less words than or words equal to n');
});

QUnit.test('utilityModule.moreWordsThan', function(assert){
  assert.throws(function(){
      utilityModule.moreWordsThan();
    },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.moreWordsThan('hello there');
    },
    function(err){
      return err.toString() === 'Missing Parameter in moreWordsThan function: "n".';
    },
    'If n is not entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.moreWordsThan('',3);
    },
    function(err){
      return err.toString() === 'Missing Parameter in moreWordsThan function: "input".';
    },
    'If input string is not entered, an error should be shown'
  );
  assert.deepEqual(utilityModule.moreWordsThan('Hello there sammy boy.', 7), false, 'Return false if the string contains less words than n');
  assert.deepEqual(utilityModule.moreWordsThan('Hello there puppy',2), true, 'Return true if the string contains more words than or words equal to n');
});

QUnit.test('utilityModule.isBetween', function(assert){
  assert.throws(function(){
      utilityModule.isBetween();
    },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.isBetween(3);
    },
    function(err){
      return err.toString() === 'Missing Parameter in isBetween function: "floor".';
    },
    'If floor is not entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.isBetween(3,2);
    },
    function(err){
      return err.toString() === 'Missing Parameter in isBetween function: "ceil".';
    },
    'If ceil is not entered, an error should be shown'
  );
  assert.deepEqual(utilityModule.isBetween(4,6,10), false, 'Should return false is input is not between floor and ceil.');
  assert.deepEqual(utilityModule.isBetween(8,6,10), true, 'Should return true is input is between floor and ceil.');
});

QUnit.test('utilityModule.isAlphanumeric', function(assert){
  assert.throws(function(){
      utilityModule.isAlphanumeric();
    },
    function(err){
      return err.toString() === 'Missing Parameter in isAlphanumeric function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );


  assert.deepEqual(utilityModule.isAlphanumeric('Sure I like you 01'), true, 'Should return true if the input string only contains letters and numbers.');
  assert.deepEqual(utilityModule.isAlphanumeric('Sure I like you 01.'), false, 'Should return false if the string contains characters other than letters and numbers.');
});

QUnit.test('utilityModule.isCreditCard', function(assert){
  assert.throws(function(){
      utilityModule.isCreditCard();
    },
    function(err){
      return err.toString() === 'Missing Parameter in isCreditCard function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );


  assert.deepEqual(utilityModule.isCreditCard('4321456745673214'), true, 'Should return true if the input is a valid credit card without hyphens.');
  assert.deepEqual(utilityModule.isCreditCard('4321-4567-4567-3214'), true, 'Should return true if the input is a valid credit card with hyphens.');
  assert.deepEqual(utilityModule.isCreditCard('43214567456'), false, 'Should return false if the input less than 16 characters');
  assert.deepEqual(utilityModule.isCreditCard('Sure I like you 01.'), false, 'Should return false if the input is not a valid credit card.');
});

QUnit.test('utilityModule.isHex', function(assert){
  assert.throws(function(){
      utilityModule.isHex();
    },
    function(err){
      return err.toString() === 'Missing Parameter in isHex function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );


  assert.deepEqual(utilityModule.isHex('#333'), true, 'Should return true for 3 digit hex code');
  assert.deepEqual(utilityModule.isHex('#333333'), true, 'Should return true for 6 digit hex code');
  assert.deepEqual(utilityModule.isHex('#3ADBD1'), true, 'Should return true for valid number and letter hex code');
  assert.deepEqual(utilityModule.isHex('#3AGBD1'), false, 'Should return false if hex code has letter greater than F');
  assert.deepEqual(utilityModule.isHex('333333'), false, 'Should return false if no hash was entered');
  assert.deepEqual(utilityModule.isHex('#3333333'), false, 'Should return false if hex code too long');
  assert.deepEqual(utilityModule.isHex('#33'), false, 'Should return false if hex code too short');

});

QUnit.test('utilityModule.isRGB', function(assert){
  assert.throws(function(){
      utilityModule.isRGB();
    },
    function(err){
      return err.toString() === 'Missing Parameter in isRGB function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.deepEqual(utilityModule.isRGB('rgb(23, 45, 60)'), true, 'Should return true valid RGB code');
  assert.deepEqual(utilityModule.isRGB('rg(23, 45, 60)'), false, 'Should return false is the letters "rgb" doesn\'t exist');
  assert.deepEqual(utilityModule.isRGB('rgb(-1,23,38)'), false, 'Should return false if negative numbers exist');
  assert.deepEqual(utilityModule.isRGB('rgb(280,23,38)'), false, 'Should return false if numbers greater than 280 exist.');
});

// QUnit.test('utilityModule.isHSL', function(assert){
//   assert.throws(function(){
//       utilityModule.isHSL();
//     },
//     function(err){
//       return err.toString() === 'Missing Parameter in isHSL function: "input".';
//     },
//     'If no parameters are entered, an error should be shown'
//   );
//
//   assert.deepEqual(utilityModule.isRGB('rgb(23, 45, 60)'), true, 'Should return true valid RGB code');
//   assert.deepEqual(utilityModule.isRGB('rg(23, 45, 60)'), false, 'Should return false is the letters "rgb" doesn\'t exist');
//   assert.deepEqual(utilityModule.isRGB('rgb(-1,23,38)'), false, 'Should return false if negative numbers exist');
//   assert.deepEqual(utilityModule.isRGB('rgb(280,23,38)'), false, 'Should return false if numbers greater than 280 exist.');
// });

QUnit.test('utilityModule.isTrimmed', function(assert){
  assert.throws(function(){
      utilityModule.isTrimmed();
    },
    function(err){
      return err.toString() === 'Missing Parameter in isTrimmed function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.deepEqual(utilityModule.isTrimmed('Hello you.'), true, 'Should return true is string has no extra space');
  assert.deepEqual(utilityModule.isTrimmed('  Hey there. '), false, 'Should return false if input has extra space');

});

QUnit.test('utilityModule.keys', function(assert){
  assert.throws(function(){
      utilityModule.keys();
    },
    function(err){
      return err.toString() === 'Missing Parameter in keys function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.keys('string');
    },
    function(err){
      return err.toString() === 'Please provide an object to this function.';
    },
    'If any type besides Object is passed, an error should be thrown.'
  );

  assert.deepEqual(utilityModule.keys({a: 1, b: 2}), ['a', 'b'], 'Should return all keys of the object');

});

QUnit.test('utilityModule.values', function(assert){
  assert.throws(function(){
      utilityModule.values();
    },
    function(err){
      return err.toString() === 'Missing Parameter in values function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.values('string');
    },
    function(err){
      return err.toString() === 'Please provide an object to this function.';
    },
    'If any type besides Object is passed, an error should be thrown.'
  );

  assert.deepEqual(utilityModule.values({a: 1, b: 2}), [1, 2], 'Should return all keys of the object');

});

QUnit.test('utilityModule.pairs', function(assert){
  assert.throws(function(){
      utilityModule.pairs();
    },
    function(err){
      return err.toString() === 'Missing Parameter in pairs function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.pairs('string');
    },
    function(err){
      return err.toString() === 'Please provide an object to this function.';
    },
    'If any type besides Object is passed, an error should be thrown.'
  );

  assert.deepEqual(utilityModule.pairs({a: 1, b: 2}), ['a',1,'b',2], 'Should return all key-value pairs of the object in an array');

});

QUnit.test('utilityModule.shuffle', function(assert){
  assert.throws(function(){
      utilityModule.shuffle();
    },
    function(err){
      return err.toString() === 'Missing Parameter in pairs function: "input". or array is empty.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.shuffle('string');
    },
    function(err){
      return err.toString() === 'Please provide an array to this function.';
    },
    'If any type besides Object is passed, an error should be thrown.'
  );

});

QUnit.test('utilityModule.toDash()', function(assert){
  assert.throws(function(){
      utilityModule.toDash();
    },
    function(err){
      return err.toString() === 'Missing Parameter in toDash function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.deepEqual(utilityModule.toDash('toDashString'), 'to-dash-string', 'Should return dash separated string.');

});

QUnit.test('utilityModule.toCamel', function(assert){
  assert.throws(function(){
      utilityModule.toCamel();
    },
    function(err){
      return err.toString() === 'Missing Parameter in toCamel function: "input".';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.deepEqual(utilityModule.toCamel('to-dash-string'), 'toDashString', 'Should return a camel case string.');

});

QUnit.test('utilityModule.has', function(assert){
  assert.throws(function(){
      utilityModule.has();
    },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.has({}, 'string');
    },
    function(err){
      return err.toString() === 'Missing Parameter in has function: "obj".';
    },
    'If obj is not defined or is an empty object, an error should be thrown.'
  );

  assert.throws(function(){
      utilityModule.has({string: 'a'});
    },
    function(err){
      return err.toString() === 'Missing Parameter in has function: "search".';
    },
    'If search is not defined or has length 0, an error should be thrown.'
  );

  assert.deepEqual(utilityModule.has({string: 'a'}, 'a'), true, 'Should return true if search term is in object.' )
  assert.deepEqual(utilityModule.has({string: 'a'}, 'b'), false, 'Should return false if search term is in not object.' )

});

QUnit.test('utilityModule.pick', function(assert){
  assert.throws(function(){
      utilityModule.pick();
    },
    function(err){
      return err.toString() === 'No parameters entered.';
    },
    'If no parameters are entered, an error should be shown'
  );

  assert.throws(function(){
      utilityModule.pick({}, 'string');
    },
    function(err){
      return err.toString() === 'Missing Parameter in pick function: "obj".';
    },
    'If obj is not defined or is an empty object, an error should be thrown.'
  );

  assert.throws(function(){
      utilityModule.pick({string: 'a'});
    },
    function(err){
      return err.toString() === 'Missing Parameter in pick function: "keysArr".';
    },
    'If keysArr is not defined or keysArr length equal 0, an error should be thrown.'
  );

  assert.deepEqual(utilityModule.pick({a: 1, b: 2, c:3}, ['a', 'c']), {a: 1, c: 3}, 'Should return object with only keys from keysArr' );

});


