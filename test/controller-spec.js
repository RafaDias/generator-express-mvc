var assert = require('chai').assert;
var ctrl = require('../generators/app/templates/_app/_controllers/_home');

describe('Ctrl Test', function () {
  it('returns obj', function () {
    assert.isObject(ctrl());
  });

  it('returns function', function () {
    assert.isFunction(ctrl().index);
  });
});
