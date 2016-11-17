import {
  describe,
  it,
  before,
  beforeEach,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe("Acceptance | 16 - Afficher un QCM | ", function () {

  let application;
  let challenge;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  before(function () {
    return visit(`/assessments/new_assessment_of_noimage_course_id/challenges/qcm_challenge_full_id`);
  });

  it('06.1 It should render challenge instruction', function () {
    expect($('.challenge-instruction').text()).to.equal('This is the instruction of one QCM');
  });

});
