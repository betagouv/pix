import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {

  this.route('index', { path: '/' });
  this.route('home');
  this.route('preferences');

  this.route('challenge-show', { path: '/challenges/:id_challenge' });
  this.route('challenges.preview', { path: '/challenges/:challenge_id/preview' });

  this.route('courses.course-preview', { path: '/courses/:course_id/preview' });
  this.route('courses.challenge-preview', { path: '/courses/:course_id/preview/challenges/:challenge_id' });

  this.route('assessments.create', { path: '/courses/:course_id/assessment' });
  this.route('assessments.get', { path: '/assessments/:assessment_id' });
  this.route('assessments.get-challenge', { path: '/assessments/:assessment_id/challenges/:challenge_id' });
});

export default Router;
