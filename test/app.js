'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-express-mvc:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates files for mvc project', function () {
    assert.file([
      'bower.json',
      'package.json',
      'server.js',
      'app/controllers/home.js',
      'app/views/home.ejs',
      'app/routes/home.js',
      'app/models/model.js'
    ]);
  });
});
