//Test code
QUnit.test('first', function(assert) {
  assert.equal(first(null), void 0, 'If the array is null, it returns undefined');
  assert.equal(first([]), void 0, 'If the array is empty, it returns undefined');
  assert.equal(first([1, 2, 3]), 1, 'If n is not provided, the 1st item is returned');
  assert.deepEqual(first([1, 2, 3], 1), 1, 'If n = 1, the 1st item is returned');
  assert.deepEqual(first([1, 2, 3], 0), [], 'If n = 0, [] is returned');
  assert.deepEqual(first([1, 2, 3], -1), [], 'If n = -1, [] is returned');
  assert.deepEqual(first([1, 2, 3], 5), [1, 2, 3], 'If length is less than n, it returns the full array');
  assert.deepEqual(first([1, 2, 3], 2), [1, 2], 'Normal case - length is greater than n');
});

QUnit.test('Queue', function(assert){
  var queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  assert.deepEqual(queue.dequeue(), 1, 'Should return first item in queue.')
});

QUnit.test('Stack', function(assert){
  var stack = new Stack();
  stack.push(1);
  stack.push(2);
  assert.deepEqual(stack.pop(), 2, 'Should return last item in stack.')
});