import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';

describe('Unit | Route | Assessments.ChallengeRoute', function () {

  setupTest('route:assessments.get-challenge', {});

  it('exists', function () {
    const route = this.subject();
    expect(route).to.be.ok;
  });

  describe('#_componentClassForChallenge', function () {

    [
      { challengeType: 'QCU', expectedClass: 'challenge-item-qcu' },
      { challengeType: 'QCUIMG', expectedClass: 'challenge-item-qcu' },
      { challengeType: 'QRU', expectedClass: 'challenge-item-qcu' },
      { challengeType: 'QCM', expectedClass: 'challenge-item-qcm' },
      { challengeType: 'QCMIMG', expectedClass: 'challenge-item-qcm' },
      { challengeType: 'QROC', expectedClass: 'challenge-item-qroc' },
      { challengeType: 'QROCm', expectedClass: 'challenge-item-qrocm' },
      { challengeType: 'QROCm-ind', expectedClass: 'challenge-item-qrocm' },
      { challengeType: 'QROCm-dep', expectedClass: 'challenge-item-qrocm' }
    ].forEach((useCase) => {

      it(`should return component class "${useCase.expectedClass}" when challenge type is "${useCase.challengeType}"`, function() {
        // given
        const route = this.subject();
        const challenge = Ember.Object.create({ type: useCase.challengeType});

        // when
        const componentClass = route._componentClassForChallenge(challenge);

        // then
        expect(componentClass).to.equal(useCase.expectedClass);
      });
    });

  });


});
