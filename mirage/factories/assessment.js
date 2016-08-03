import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  afterCreate(assessment, server) {
    assessment.course = server.create('course');
    assessment.challenges = server.createList('challenge', 5);
  }
});
