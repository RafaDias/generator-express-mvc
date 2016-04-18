var assert = require('chai').assert;
var model = require('../generators/app/templates/_app/_models/_model');

describe('Model Test', function () {
  it('returns obj', function () {
    assert.isObject(model);
  });
});
