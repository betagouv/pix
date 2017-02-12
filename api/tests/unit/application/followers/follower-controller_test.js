const Hapi = require('hapi');
const EmailValidator = require('../../../../lib/domain/services/email-validator');
const Follower = require('../../../../lib/domain/models/data/follower');
const followerSerializer = require('../../../../lib/infrastructure/serializers/follower-serializer');

describe.only('Unit | Controller | FollowerController', function () {

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
      sinon.stub(followerSerializer, 'deserialize', _ => new Follower(follower));
      stub.resolves(follower);
      // when
      try{
        server.inject({method: 'POST', url: '/api/followers', payload: follower}, (res) => {
            // then
          expect(res.result).to.deep.equal(follower);
          followerSerializer.deserialize.restore();
          done();
        });
      }
      catch (err){
        console.log(err)
        done(err);
      }
    });

    it('should not save follower when email is already saved', function (done) {
      // given
      const messageAlreadySaved = {'message': 'Follower is already saved'};
      sinon.stub(followerSerializer, 'deserialize', _ => new Follower(follower));
      stub.resolves({'message': 'Follower is already saved'});

      // when
      server.inject({method: 'POST', url: '/api/followers', payload: follower}, (res) => {
        // then
        expect(res.result.message).to.equal(messageAlreadySaved.message);
        followerSerializer.deserialize.restore();
        done();
      });

    });

    it('should return 400 status code when email provided is not valid', function (done) {
      //Given
      const emailValidatorStub = sinon.stub(EmailValidator,'emailIsValid').returns(false);
      sinon.stub(followerSerializer, 'deserialize', _ => new Follower(follower));
      // when
      server.inject({method: 'POST', url: '/api/followers', payload: {"email": 'INVALID_EMAIL'}},
        (res) => {
          // then
          expect(res.statusCode).to.equal(400);
          emailValidatorStub.restore();
          followerSerializer.deserialize.restore();
          done();
        });
    });
  });
});
