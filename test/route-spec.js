var http = require('http');
var request = require('supertest');
var assert = require('chai').assert;
var route = require('../generators/app/templates/_app/_routes/_home');

describe('Test Instance', function () {
  it('returns obj', function () {
    assert.isFunction(route);
  });
});

describe('Test GET', function () {
  var server;
  before(function () {
    server = http.createServer(require('../generators/app/templates/_config/_express')());
    server.listen(3000);
  });

  after(function () {
    server.close();
  });

  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
