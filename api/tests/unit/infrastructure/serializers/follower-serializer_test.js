/* global describe, it, expect */
const serializer = require('../../../../lib/infrastructure/serializers/follower-serializer');
const Follower = require('../../../../lib/domain/models/data/follower');

describe('Unit | Serializer | CourseSerializer', function () {

  describe('#serializeAttribute()', function () {

    it('should convert JSON API data into a Follower model object', function () {
      const followerModelObject = new Follower({email: 'brm+1@pix.fr'});
      const jsonFollower = {
        data: {
          attributes: {
            email: 'brm+1@pix.fr'
          },
          type: 'followers'
        }
      };

      // when
      const followerObject = serializer.deserialize(jsonFollower);

      // then
      expect(followerObject.get('email')).to.deep.equal(followerModelObject.get('email'));
    });

  });

});
