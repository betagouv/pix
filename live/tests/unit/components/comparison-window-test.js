import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe.only('Unit | Component | comparison-window', function () {

  setupTest('component:comparison-window', {});

  const challengeQroc = { type: 'QROC' };
  const challengeQcm = { type: 'QCM' };
  const challengeQrocmInd = { type: 'QROCM-ind' };
  const challengeQrocmDep = { type: 'QROCM-dep' };

  describe('#isAssessmentChallengeTypeQroc', function () {

    it('should be true when the challenge is QROC', function () {
      // given
      const component = this.subject();
      component.set('challenge', challengeQroc);
      // when
      const isAssessmentChallengeTypeQroc = component.get('isAssessmentChallengeTypeQroc');
      // then
      expect(isAssessmentChallengeTypeQroc).to.be.true;
    });

    it('should be false when the challenge is not QROCM-ind', function () {
      // given
      const component = this.subject();
      component.set('challenge', challengeQrocmInd);
      // when
      const isAssessmentChallengeTypeQroc = component.get('isAssessmentChallengeTypeQroc');
      // then
      expect(isAssessmentChallengeTypeQroc).to.be.false;
    });
  });

  describe('#isAssessmentChallengeTypeQcm', function () {

    it('should be true when the challenge is QCM', function () {
      // given
      const component = this.subject();
      component.set('challenge', challengeQcm);
      // when
      const isAssessmentChallengeTypeQcm = component.get('isAssessmentChallengeTypeQcm');
      // then
      expect(isAssessmentChallengeTypeQcm).to.be.true;
    });

    it('should be false when the challenge is not QCM', function () {
      // given
      const component = this.subject();
      component.set('challenge', challengeQroc);
      // when
      const isAssessmentChallengeTypeQcm = component.get('isAssessmentChallengeTypeQcm');
      // then
      expect(isAssessmentChallengeTypeQcm).to.be.false;
    });
  });

  describe('#isAssessmentChallengeTypeQrocmInd', function () {

    it('should be true when the challenge is QROCM-ind', function () {
      // given
      const component = this.subject();
      component.set('challenge', challengeQrocmInd);
      // when
      const isAssessmentChallengeTypeQrocmInd = component.get('isAssessmentChallengeTypeQrocmInd');
      // then
      expect(isAssessmentChallengeTypeQrocmInd).to.be.true;
    });

    it('should be true when the challenge is not QROCM-ind', function () {
      // given
      const component = this.subject();
      component.set('challenge', challengeQroc);
      // when
      const isAssessmentChallengeTypeQrocmInd = component.get('isAssessmentChallengeTypeQrocmInd');
      // then
      expect(isAssessmentChallengeTypeQrocmInd).to.be.false;
    });
  });

  describe('#isAssessmentChallengeTypeQrocmDep', function () {

    it('should be true when the challenge is QROCM-dep', function () {
      // given
      const component = this.subject();
      component.set('challenge', challengeQrocmDep);
      // when
      const isAssessmentChallengeTypeQrocmDep = component.get('isAssessmentChallengeTypeQrocmDep');
      // then
      expect(isAssessmentChallengeTypeQrocmDep).to.be.true;
    });

    it('should be true when the challenge is not QROCM-dep', function () {
      // given
      const component = this.subject();
      component.set('challenge', challengeQroc);
      // when
      const isAssessmentChallengeTypeQrocmDep = component.get('isAssessmentChallengeTypeQrocmDep');
      // then
      expect(isAssessmentChallengeTypeQrocmDep).to.be.false;
    });
  });
});
