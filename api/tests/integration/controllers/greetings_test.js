const server = require('../../../server');

describe('/api/greetings', function () {

  after(function (done) {

    server.stop(done);
  });

  describe('route /', function () {

    it('/ should return "Hello, world!"', function (done) {

      const options = { method: "GET", url: "/" };

      server.injectThen(options).then((response) => {

        expect(response.statusCode).to.equal(200);
        expect(response.result).to.have.lengthOf(13);
        expect(response.result).to.equal('Hello, world!');
        done();
      });
    });
  });

  describe('route /{name}', function () {

    it('/ should return "Hello, {name}!"', function (done) {

      const options = { method: "GET", url: "/test_name" };

      server.injectThen(options).then((response) => {

        expect(response.statusCode).to.equal(200);
        expect(response.result).to.equal('Hello, test_name!');
        done();
      });
    });
  });

});
