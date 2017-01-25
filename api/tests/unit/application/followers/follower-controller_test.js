const Hapi = require('hapi');
const Follower = require('../../../../lib/domain/models/data/follower');
const cache = require('../../../../lib/infrastructure/cache');

describe('Unit | Controller | FollowerController', function () {

  let server;

  before(function () {
    server = this.server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/followers') });
  });

  describe('#Save', function () {

    let stub;
    const follower = new Follower({ "email": "test@follower.pix" });

    before(function () {
      stub = sinon.stub(Follower.prototype, 'save');
    });

    after(function () {
      stub.restore();
    });

    it('should return true when follower is saved', function (done) {
      // given
      stub.resolves(follower);

      // when
      server.inject({ method: 'POST', url: '/api/followers', payload : JSON.stringify(follower) }, (res) => {

        // then
        expect(res.result).to.deep.equal(follower);
        expect(res.statusCode).to.equal(201);
        done();
      });
    });

    it('should return an error 500 when the fetch fails', function(done) {
      // given
      stub.rejects(new Error('Fetch error'));

      // when
      server.inject({ method: 'POST', url: '/api/followers', payload : JSON.stringify(follower) }, (res) => {

        // then
        expect(res.statusCode).to.equal(500);
        done();
      });
    });
  });


});
