/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';
import { before, describe } from "mocha";
import Ember from 'ember';

describeModule(
  'service:assessment',
  'AssessmentService',
  {
    needs: ['model:assessment', 'model:challenge', 'model:course']
  },
  function () {

    function instantiateModels(store, challengesArray) {
      const challenges = challengesArray.map(
        (challenge) => store.createRecord('challenge', challenge)
      );
      const course = store.createRecord('course');
      course.get('challenges').pushObjects(challenges);
      const assessment = store.createRecord('assessment', { course });

      return { challenges, assessment };
    }

    describe('#getNextChallenge', function () {

      it("return the next challenge when current challenge is not the assessment's last one", function () {

        return Ember.run(() => {
          // given
          const store = this.container.lookup('service:store');
          const { challenges, assessment } = instantiateModels(store, [{ id:1 }, { id: 2 }]);

          // when
          const actual = this.subject().getNextChallenge(challenges[0], assessment);

          // then
          expect(actual.get('id')).to.equal(challenges[1].get('id'));
        });

      });

      it("return the next challenge when current challenge is the assessment's latest", function () {

        return Ember.run(() => {
          // given
          const store = this.container.lookup('service:store');
          const { challenges, assessment } = instantiateModels(store, [{ id:1 }, { id: 2 }]);

          // when
          const actual = this.subject().getNextChallenge(challenges[1], assessment);

          // then
          expect(actual).to.be.null;
        });

      });

      it("return challenge model objects well formed", function () {

        return Ember.run(() => {
          // given
          const store = this.container.lookup('service:store');
          const { challenges, assessment } = instantiateModels(store, [{ id:1 }, { id: 2 }, { id: 3 }]);

          // when
          const actual1 = this.subject().getNextChallenge(challenges[0], assessment);
          const actual2 = this.subject().getNextChallenge(actual1, assessment);
          const actual3 = this.subject().getNextChallenge(actual2, assessment);

          // then
          expect(actual1.get('id')).to.equal(challenges[1].get('id'));
          expect(actual2.get('id')).to.equal(challenges[2].get('id'));
          expect(actual3).to.be.null;
        });
      });
    });
  }
);
