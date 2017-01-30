const Hapi = require('hapi');
const Follower = require('../../../../lib/domain/models/data/follower');

describe('Unit | Controller | FollowerController', function () {

  let server;

  before(function () {
    server = this.server = new Hapi.Server();
    server.connection({port: null});
    server.register({register: require('../../../../lib/application/followers')});
  });

  describe('#Save', function () {

    let stub;
    const follower = {"email": "testeur@follower.pix"};

    before(function () {
      stub = sinon.stub(Follower.prototype, 'save');
    });

    after(function () {
      stub.restore();
    });

    it('should return true when follower is saved', function (done) {
      // given
      stub.resolves(new Follower(follower));
      // when
      try{
        server.inject({method: 'POST', url: '/api/followers', payload: follower}, (res) => {
            // then
          expect(res.result.toJSON()).to.deep.equal(follower);
          done();
        });
      }
      catch (err){
        done(err);
      }
    });

    it('should not save follower when email is already saved', function (done) {
      // given
      stub.resolves({'message': 'Follower is already saved'});

      // when
      server.inject({method: 'POST', url: '/api/followers', payload: follower},
        (res) => {
          // then
          expect(res.result.message).to.equal('Follower is already saved');
          done();
        });
    });
  });
});
