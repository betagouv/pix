import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id: faker.random.uuid(),
  name: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  imageUrl: faker.image.imageUrl()
});
