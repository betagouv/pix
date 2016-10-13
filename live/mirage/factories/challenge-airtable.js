import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id: faker.random.uuid(),
  instruction: faker.lorem.paragraphs(2),
  proposals: "- yo \n - yo yo \n - yo yo yo",
  type: 'QCU'

});
