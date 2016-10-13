import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id() { return faker.random.uuid() },
  name: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  imageUrl: faker.image.imageUrl(),
  challenges: ['abc', 'def', 'ghi']
});
