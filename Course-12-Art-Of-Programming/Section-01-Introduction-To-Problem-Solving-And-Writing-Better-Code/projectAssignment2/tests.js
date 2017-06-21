QUnit.test('reverseInteger', function(assert){
  assert.deepEqual(MDUtility.reverseInteger(123), 321, 'Should return the reverse of a positive integer');
  assert.deepEqual(MDUtility.reverseInteger(-123), -321, 'Should return the reverse of a negative integer');
  assert.deepEqual(MDUtility.reverseInteger(0), 0, 'Should return 0 if 0 is entered');
  assert.deepEqual(MDUtility.reverseInteger(2990474529917009), 0, 'Should return 0 for unsafe integers');
})