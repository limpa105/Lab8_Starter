// sum.test.js


// solution found https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import
sum = require('../assets/scripts/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3 using sum', () => {
  expect(sum(1,2)).toBe(3);
});
