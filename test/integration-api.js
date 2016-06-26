var request = require('supertest');



describe('can receive frontend index file', function () {
  var server;
  beforeEach(function () {
    server = require('../server.js');
  });
  afterEach(function () {
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


describe('can receive requests to connections', function () {
  var server;
  beforeEach(function () {
    server = require('../server.js');
  });
  afterEach(function () {
    server.close();
  });

  it('responds to GET /connection with json', function testConnectionResponse(done) {
  request(server)
    .get('/connection')
    .expect('Content-Type', /json/)
    .expect(200, done)
  });

  it('responds to empty POST /connection with 400 error', function testConnectionResponse(done) {
  request(server)
    .post('/connection')
    .expect('Content-Type', /json/)
    .expect(function(res) {
    	if (!("message" in res.body)) throw new Error("No message returned");
    })
    .expect(function(res) {
    	if (res.body.message.indexOf('validation failed') < 0) throw new Error("Error message was unexpected");
    })
    .expect(400, done)
  });

  it('responds to valid POST /connection with 201', function testConnectionResponse(done) {
  request(server)
    .post('/connection')
    .field('api_key', "testing")
    .field('form_id', 'testing')
    .expect('Content-Type', /json/)
    .expect(function(res) {
    	if (!("message" in res.body)) throw new Error("No message returned");
    })
    .expect(function(res) {
    	if (res.body.message.indexOf('created') < 0) throw new Error("Error message was unexpected");
    })
    .expect(201, done)
    .expect(function(res) {
    	if (res.body.data.form_id != 'testing') throw Error('form_id not found in response');
    	if (res.body.data.api_key != 'testing') throw Error('form_id not found in response');
     });
  });

});
