QUnit.test('reverseInteger', function(assert){
  assert.deepEqual(MDUtility.reverse(123), 321, 'Should return the reverse of a positive integer');
  assert.deepEqual(MDUtility.reverse(-123), -321, 'Should return the reverse of a negative integer');
  assert.deepEqual(MDUtility.reverse(0), 0, 'Should return 0 if 0 is entered');
  assert.deepEqual(MDUtility.reverse(2990474529917009), 0, 'Should return 0 for unsafe integers');
});

QUnit.test('plusOne', function(assert){
  assert.deepEqual(MDUtility.plusOne([1,2,3]), [1,2,4], 'Should return new array containing the number plus 1');
  assert.deepEqual(MDUtility.plusOne([0]), [1], 'Should return new array containing plus 1 event if number is 0');
});