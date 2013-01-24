var curry;
try {
  curry = require('curry');
} catch (ex) {
  curry = require('../');
}
var assert;
try {
  assert = require('better-assert');
} catch (ex) {
  try {
    assert = require('assert');
  } catch (ex) {
    assert = function (pass, message) {
      if (pass != true) {
        throw new Error(message || 'Assertion Failed');
      }
    }
  }
}

describe('sum4', function () {
  it('returns 20', function () {
    var sumFour = curry(function (a, b, c, d) {
      return a + b + c + d;
    });
    assert(sumFour(5)(5)(5)(5) === 20);
    assert(sumFour(5, 5)(5, 5) === 20);
    assert(sumFour(5, 5, 5, 5) === 20);
    assert(sumFour(5)(5, 5, 5) === 20);
    assert(sumFour(5, 5, 5)(5) === 20);
  });
});